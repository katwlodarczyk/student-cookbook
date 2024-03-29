import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import shopingListImage from "../assets/images/shopping-list.jpg"
import emptyCart from "../assets/illustrations/empty-cart.svg"
import useRecipeFunctionality from "../services/useRecipeFunctionality";
import React, { useEffect, useState } from "react";
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'; 
import { doc, deleteDoc, getFirestore } from "firebase/firestore";

const ShoppingList = () => {
    const db = getFirestore();
    const bgImage = shopingListImage;
    const empty = emptyCart;
    const userUID = localStorage.getItem('userUID')
    const {getShoppingList} = useRecipeFunctionality();
    const [loading, setLoading] = useState(true);
    const [shoppingList, setShoppingList] = useState([]);
    const [toBuy, setToBuy] = useState([]);
    const [bought, setBought] = useState([]);
    const [listWithoutNames, setListWithoutNames] = useState([])
    const [recipeNames, setRecipeNames] = useState([]);
    const [checkedState, setCheckedState] = useState([]);

    const getShoppingListData = async () => {
      const listSnap = await getShoppingList(userUID);
      let shoppingList = [];
      if (listSnap.size) {
        listSnap.forEach((doc) => {
          shoppingList.push({ ...doc.data(), ...{ id: doc.id } });
        });
        setShoppingList(shoppingList);
        getItems(shoppingList)
        setLoading(false)
      }
      else {
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
      setRecipeNames(names)
      getToBuy(items)
      // setCheckedState(new Array(toBuy.length).fill(false))
      return setListWithoutNames(items)
    }
  
    const getToBuy = (listWithoutNames) => {
      const toBuyListToConcat = listWithoutNames.map( (item) => 
        Object.values(item)
      ) 
      const toBuyList = [].concat(...toBuyListToConcat)
      if (!localStorage.getItem('checkedState')) {
        setCheckedState(new Array(toBuyList.length).fill(false))
      } else {
        setCheckedState(JSON.parse(localStorage.getItem('checkedState')))
      }
      return setToBuy(toBuyList)
    }

    useEffect(() => {
      getShoppingListData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleOnChange = (position) => {
      const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
      );
  
      setCheckedState(updatedCheckedState);
      if (JSON.parse(localStorage.getItem('checkedState')) !== []) {
        localStorage.removeItem('checkedState')
        localStorage.setItem('checkedState', JSON.stringify(updatedCheckedState))
      } else {
        localStorage.setItem('checkedState', JSON.stringify(updatedCheckedState))
      }

      function getAllBoughtIndexes(arr, val) {
        var indexes = [], i;
        for(i = 0; i < arr.length; i++)
            if (arr[i] === val)
                indexes.push(i);
        return indexes;
      }
      getAllBoughtIndexes(updatedCheckedState, true)
    };

    const handleClickDelete = (userId) => {
      recipeNames.forEach(async function(name) {
        await deleteDoc(doc(db, `shopping-list-${userId}`, name));
      });

      localStorage.removeItem('checkedState')
      setShoppingList([])
      setToBuy([])
      setBought([])
      setListWithoutNames([])
      setCheckedState([])
    }

    const confirmDelete = () => {
      confirmAlert({
        customUI: ({ onClose }) => {
          return (
            <div className='font-koho mx-8 flex flex-col bg-gray-50 text-gray-900 px-6 py-4 rounded-sm'>
              <h1 className="flex flex-row space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="text-red-400 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
                <span>
                  Are you sure?
                </span>
              </h1>
              <p className="text-sm">All items will be deleted from your list.</p>
              <div className="flex flex-row justify-between mt-5">
                <button onClick={onClose}>Cancel</button>
                <button className="bg-red-500 text-white py-1 px-3 rounded-sm"
                  onClick={() => {
                    handleClickDelete(userUID);
                    onClose();
                  }}
                >
                  Yes, Delete it!
                </button>
              </div>
            </div>
          );
        }
      });
    };


  return (
    <div className="w-full font-nunito min-h-screen h-max">
        <Banner center image={bgImage} position="center" heading="Shopping list" className="bg-cover"/>
        { loading && (<div className="p-4 text-lg">Loading...</div>)}
        {!loading && shoppingList.length === 0 && 
          <div className={"mb-25 p-4 flex flex-col justify-center h-auto items-center space-y-5 text-sm " + (window.innerHeight < 700 ? 'py-auto' : 'py-28')}>
              <img src={empty} alt="empty cart"></img>
              <p>Your shopping list is empty.</p>
          </div>
        }
        {!loading && shoppingList.length > 0 && 
          <div className="mb-2 p-4 pb-12 h-full flex flex-col  space-y-5 divide-y divide-dashed divide-gray-300">
              <div className="min-h-max flex flex-col space-y-2 pb-2">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-lg">To Buy:</h2>
                  <svg onClick={confirmDelete} width="20" height="20" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M38.7692 17.44C39.5952 17.508 40.2112 18.23 40.1452 19.056C40.1332 19.192 39.0492 32.614 38.4252 38.244C38.0372 41.738 35.7292 43.864 32.2452 43.928C29.5792 43.974 27.0072 44 24.4932 44C21.7832 44 19.1412 43.97 16.5272 43.916C13.1832 43.85 10.8692 41.682 10.4912 38.258C9.8612 32.578 8.7832 19.19 8.7732 19.056C8.7052 18.23 9.3212 17.506 10.1472 17.44C10.9612 17.418 11.6972 17.99 11.7632 18.814C11.7696 18.9008 12.2103 24.3681 12.6905 29.7774L12.787 30.8569C13.0289 33.5456 13.2741 36.1293 13.4732 37.928C13.6872 39.874 14.7372 40.878 16.5892 40.916C21.5892 41.022 26.6912 41.028 32.1912 40.928C34.1592 40.89 35.2232 39.906 35.4432 37.914C36.0632 32.326 37.1432 18.95 37.1552 18.814C37.2212 17.99 37.9512 17.414 38.7692 17.44ZM28.6908 4.0006C30.5268 4.0006 32.1408 5.23859 32.6148 7.01259L33.1228 9.5346C33.287 10.3613 34.0125 10.9651 34.8526 10.9784L41.416 10.9786C42.244 10.9786 42.916 11.6506 42.916 12.4786C42.916 13.3066 42.244 13.9786 41.416 13.9786L34.9112 13.9783C34.9011 13.9785 34.8909 13.9786 34.8808 13.9786L34.832 13.9766L14.0832 13.9784C14.0671 13.9785 14.051 13.9786 14.0348 13.9786L14.004 13.9766L7.5 13.9786C6.672 13.9786 6 13.3066 6 12.4786C6 11.6506 6.672 10.9786 7.5 10.9786L14.062 10.9766L14.264 10.9638C15.0166 10.8662 15.6421 10.2946 15.7948 9.5346L16.2808 7.1026C16.7748 5.2386 18.3888 4.0006 20.2248 4.0006H28.6908ZM28.6908 7.0006H20.2248C19.7448 7.0006 19.3228 7.3226 19.2008 7.7846L18.7348 10.1246C18.6756 10.421 18.5893 10.7066 18.479 10.9791H30.4372C30.3267 10.7066 30.2403 10.421 30.1808 10.1246L29.6948 7.6926C29.5928 7.3226 29.1708 7.0006 28.6908 7.0006Z" fill="black"/>
                  </svg>
                </div>
                <div className="flex flex-col space-y-2">
                  {
                    Object.values(toBuy).map( (ingredient, index) => 
                    <fieldset id={'checkbox'+index} key={index} className="space-y-5">
                      <div className="relative flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id={index}
                            name="checkBoxItem"
                            checked={checkedState[index]}
                            onChange={() => handleOnChange(index)}
                            type="checkbox"
                            className="focus:ring-brand-orange h-4 w-4 text-brand-orange border-gray-300 rounded " 
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor={index} className={"font-medium text-gray-700 " + (checkedState[index] === true ? 'line-through' : '')}>
                            {ingredient}
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  )}
                </div>
              </div>
          </div>
        }
        <TabBar/>
    </div>
  );
};

export default ShoppingList;