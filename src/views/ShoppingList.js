import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import shopingListImage from "../assets/images/shopping-list.jpg"
import emptyCart from "../assets/illustrations/empty-cart.svg"
import Checkbox from "../components/Checkbox.js";
import useRecipeFunctionality from "../services/useRecipeFunctionality";
import React, { useEffect, useState } from "react";

const ShoppingList = () => {
    const bgImage = shopingListImage;
    const empty = emptyCart;
    const userUID = localStorage.getItem('userUID')
    const {getShoppingList} = useRecipeFunctionality();
    const [loading, setLoading] = useState(true);
    const [shoppingList, setShoppingList] = useState([]);

    const getShoppingListData = async () => {
      console.log(userUID)
      const listSnap = await getShoppingList(userUID);
      let shoppingList = [];
      if (listSnap.size) {
        console.log(listSnap)
        listSnap.forEach((doc) => {
          shoppingList.push({ ...doc.data(), ...{ id: doc.id } });
        });
        setShoppingList(shoppingList);
        console.log(shoppingList)
        getItems()
        setLoading(false)
      }
    };

    function getItems () {
      return shoppingList.map( (item) => 
        Object.values(item)      
      )
    }
  
    useEffect(() => {
      getShoppingListData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

  return (
    <div className="w-full font-nunito min-h-screen h-max">
        <Banner center image={bgImage} position="center" heading="Shopping list" className="bg-cover"/>
        { loading && 'Loading'}
        {!loading && shoppingList.length === 0 && 
          <div className="mb-25 p-4 flex flex-col justify-center pt-32 items-center space-y-5 text-sm">
              <img src={empty} alt="empty cart"></img>
              <p>Your shopping list is empty.</p>
          </div>
        }
        {!loading && shoppingList.length > 0 && 
          <div className="mb-25 p-4 pb-12 h-full flex flex-col  space-y-5 divide-y divide-dashed divide-gray-300">
              <div className="min-h-max flex flex-col space-y-2 pb-2">
                <div className="flex flex-col space-y-2">
                  {shoppingList.map( (item) => 
                  <div key={item.id} className="flex flex-col space-y-1">
                    <h2>{item.id}</h2>
                    {
                      Object.values(item).map( (ingredient, index) =>
                      <Checkbox key={index} label={ingredient}></Checkbox>
                      )
                    }
                  </div>
                  )}
                </div>
              </div>
              {/* <div className="pt-4 flex flex-col space-y-2">
                <h2 className="text-lg">Already got:</h2>
                <div className="flex flex-col space-y-2">
                  {shoppingList.map( (item) => 
                  item.alreadyGot ? <Checkbox key={item.id} label={item.name} alreadyGot></Checkbox> : ''
                  )}
                </div>
              </div> */}
          </div>
        }
        <TabBar/>
    </div>
  );
};

export default ShoppingList;