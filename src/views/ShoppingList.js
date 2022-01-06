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
    const [toBuy, setToBuy] = useState([]);
    const [bought, setBought] = useState([]);
    const [listWithoutNames, setListWithoutNames] = useState([])

    const getShoppingListData = async () => {
      const listSnap = await getShoppingList(userUID);
      let shoppingList = [];
      if (listSnap.size) {
        listSnap.forEach((doc) => {
          shoppingList.push({ ...doc.data(), ...{ id: doc.id } });
        });
        setShoppingList(shoppingList);
        getItems(shoppingList)
        // getToBuy(listWithoutNames)
        setLoading(false)
      }
    };

    const getItems = (shoppingList) => {
      const items = shoppingList.map( (item) => 
        Object.values(item)
      )   
      const names = items.map ( (el) => 
        el.pop()
      )
      getToBuy(items)
      return setListWithoutNames(items)
    }
  
    const getToBuy = (listWithoutNames) => {
      const toBuyListToConcat = listWithoutNames.map( (item) => 
        Object.values(item)
      ) 
      const toBuyList = [].concat(...toBuyListToConcat)
      return setToBuy(toBuyList)
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
              <h2 className="text-lg">To Buy:</h2>
                <div className="flex flex-col space-y-2">
                  {
                    Object.values(toBuy).map( (ingredient, index) => 
                      <Checkbox onClick={console.log('updated')} key={index} label={ingredient}></Checkbox> 
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