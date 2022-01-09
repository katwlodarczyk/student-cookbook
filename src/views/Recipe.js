import React, { useState, useEffect } from "react";
import Banner from "../components/Banner";
import TabBar from "../components/TabBar";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useRecipeFunctionality from "../services/useRecipeFunctionality"
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {
    doc,
    getDoc,
   getFirestore
  } from "firebase/firestore";
import useAuth from "../services/useAuth";
import CalendarModal from "../components/CalendarModal";

const Recipe = () => {
    const {user} = useAuth();
    const {createShoppingList} = useRecipeFunctionality();
    let params = useParams();
    const [loading, setLoading] = useState(true);
    const [recipe, setRecipe] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const stepId = 1;
    const db = getFirestore();
    const getRecipeData = async () => {
        const docRef = doc(db, "recipes", params.recipeId)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setRecipe(docSnap.data())
            setLoading(false)
        } else {
            console.log("No recipe!");
            setLoading(false)
        }
    };

    useEffect(() => {
        getRecipeData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    const displayMenu = e => {
        setShowMenu(!showMenu);
      };

    const addIngredientsToShoppingList = async () => {
        const addTL = {...recipe.ingredients}
    
        try {
          await createShoppingList(user.uid,recipe.name, addTL);
           NotificationManager.success('Ingredients have been added to your shopping list', 'Success!', 2000)
        } catch (e) {
            NotificationManager.error('Oops, something went wrong. Try again!', 'Error!', 2000)
          console.log(e);
        }
      };

      const openCalendarModal = () => {
        setShowModal(!showModal)
      }


  return (
    <div className="relative text-gray-700 w-full min-h-screen h-max">
         {loading ? (<div className="h-40 w-full bg-gray-50"/>) : (<Banner position="center" withIcon image={ recipe.photo_url}/>)}
         { loading && (<div className="p-4 text-lg">Loading...</div>)}
         { !loading && (
            <div className="min-h-screen mb-44 p-4 flex flex-col space-y-5">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col space-y-2">
                        <h1 className="font-semibold text-2xl mb-4">{recipe.name}</h1>
                        <div className="flex flex-row space-x-2.5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C17.514 2 22 6.486 22 12C22 17.514 17.514 22 12 22C6.486 22 2 17.514 2 12C2 6.486 6.486 2 12 2ZM12 3.5C7.313 3.5 3.5 7.313 3.5 12C3.5 16.687 7.313 20.5 12 20.5C16.687 20.5 20.5 16.687 20.5 12C20.5 7.313 16.687 3.5 12 3.5ZM11.6612 7.0954C12.0762 7.0954 12.4112 7.4314 12.4112 7.8454V12.2674L15.8162 14.2974C16.1712 14.5104 16.2882 14.9704 16.0762 15.3264C15.9352 15.5614 15.6862 15.6924 15.4312 15.6924C15.3002 15.6924 15.1682 15.6584 15.0472 15.5874L11.2772 13.3384C11.0512 13.2024 10.9112 12.9574 10.9112 12.6934V7.8454C10.9112 7.4314 11.2472 7.0954 11.6612 7.0954Z" fill="#333333"/>
                            </svg>
                            <span>{recipe.time}</span>
                        </div>
                        <div className="flex flex-row space-x-2.5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M9.59179 13.957C12.8508 13.957 17.1838 14.324 17.1838 17.499C17.1838 20.8435 12.1349 21.0442 9.96919 21.0562L9.18289 21.0562C6.87372 21.0443 1.99979 20.8447 1.99979 17.519C1.99979 14.1707 7.04868 13.9698 9.21438 13.9578L9.47458 13.957C9.51513 13.957 9.55423 13.957 9.59179 13.957ZM9.59179 15.457C6.81279 15.457 3.49979 15.814 3.49979 17.519C3.49979 18.871 5.54979 19.557 9.59179 19.557C13.6338 19.557 15.6838 18.864 15.6838 17.499C15.6838 16.144 13.6338 15.457 9.59179 15.457ZM18.7065 13.4899C21.4125 13.8949 21.9795 15.1479 21.9795 16.1269C21.9795 16.8559 21.6645 17.8429 20.1615 18.4119C20.0745 18.4449 19.9845 18.4609 19.8955 18.4609C19.5925 18.4609 19.3075 18.2759 19.1945 17.9769C19.0475 17.5899 19.2425 17.1559 19.6295 17.0099C20.4795 16.6879 20.4795 16.2949 20.4795 16.1269C20.4795 15.5599 19.8085 15.1719 18.4855 14.9749C18.0755 14.9129 17.7925 14.5309 17.8535 14.1219C17.9155 13.7119 18.3045 13.4369 18.7065 13.4899ZM9.59179 2C12.4228 2 14.7268 4.304 14.7268 7.135C14.7328 8.499 14.2038 9.787 13.2398 10.757C12.2778 11.728 10.9928 12.265 9.62579 12.27H9.59179C6.75979 12.27 4.45579 9.966 4.45579 7.135C4.45579 4.304 6.75979 2 9.59179 2ZM16.6794 3.1238C18.6444 3.4458 20.0704 5.1268 20.0704 7.1198C20.0664 9.1248 18.5694 10.8468 16.5874 11.1248C16.5524 11.1298 16.5174 11.1318 16.4824 11.1318C16.1144 11.1318 15.7934 10.8608 15.7404 10.4858C15.6834 10.0758 15.9684 9.6958 16.3784 9.6388C17.6264 9.4638 18.5684 8.3808 18.5704 7.1188C18.5704 5.8648 17.6724 4.8068 16.4374 4.6048C16.0284 4.5368 15.7514 4.1518 15.8184 3.7428C15.8854 3.3338 16.2724 3.0588 16.6794 3.1238ZM9.59179 3.5C7.58679 3.5 5.95579 5.131 5.95579 7.135C5.95579 9.139 7.58679 10.77 9.59179 10.77H9.62279C10.5868 10.766 11.4948 10.387 12.1758 9.7C12.8578 9.015 13.2308 8.104 13.2268 7.138C13.2268 5.131 11.5958 3.5 9.59179 3.5Z" fill="#333333"/>
                            </svg>
                            <span>{recipe.amount}</span>
                        </div>
                        <div className="flex flex-row space-x-2.5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M16.436 1C20.063 1 22.5 3.546 22.5 7.335V16.165C22.5 19.954 20.063 22.5 16.436 22.5H7.064C3.437 22.5 1 19.954 1 16.165V7.335C1 3.546 3.437 1 7.064 1H16.436ZM16.436 2.5H7.064C4.292 2.5 2.5 4.397 2.5 7.335V16.165C2.5 19.103 4.292 21 7.064 21H16.436C19.209 21 21 19.103 21 16.165V7.335C21 4.397 19.209 2.5 16.436 2.5ZM7.1211 9.2025C7.5351 9.2025 7.8711 9.5385 7.8711 9.9525V16.8125C7.8711 17.2265 7.5351 17.5625 7.1211 17.5625C6.7071 17.5625 6.3711 17.2265 6.3711 16.8125V9.9525C6.3711 9.5385 6.7071 9.2025 7.1211 9.2025ZM11.7881 5.9185C12.2021 5.9185 12.5381 6.2545 12.5381 6.6685V16.8115C12.5381 17.2255 12.2021 17.5615 11.7881 17.5615C11.3741 17.5615 11.0381 17.2255 11.0381 16.8115V6.6685C11.0381 6.2545 11.3741 5.9185 11.7881 5.9185ZM16.3784 12.8275C16.7924 12.8275 17.1284 13.1635 17.1284 13.5775V16.8115C17.1284 17.2255 16.7924 17.5615 16.3784 17.5615C15.9644 17.5615 15.6284 17.2255 15.6284 16.8115V13.5775C15.6284 13.1635 15.9644 12.8275 16.3784 12.8275Z" fill="#333333"/>
                            </svg>
                            <span className="capitalize">{recipe.difficulty_level}</span>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 mt-0.5">
                        <div className="relative inline-block text-left">
                            <svg onClick={displayMenu} width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M20.1675 3C24.4038 3 27.25 5.9725 27.25 10.395V20.605C27.25 25.0275 24.4038 28 20.1663 28H9.33125C5.095 28 2.25 25.0275 2.25 20.605V10.395C2.25 5.9725 5.095 3 9.33125 3H20.1675ZM20.1675 4.875H9.33125C6.16875 4.875 4.125 7.04125 4.125 10.395V20.605C4.125 23.9587 6.16875 26.125 9.33125 26.125H20.1663C23.33 26.125 25.375 23.9587 25.375 20.605V10.395C25.375 7.04125 23.33 4.875 20.1675 4.875ZM19.6853 14.2671C20.3765 14.2671 20.9353 14.8259 20.9353 15.5171C20.9353 16.2084 20.3765 16.7671 19.6853 16.7671C18.994 16.7671 18.429 16.2084 18.429 15.5171C18.429 14.8259 18.9828 14.2671 19.6728 14.2671H19.6853ZM14.6731 14.2671C15.3644 14.2671 15.9231 14.8259 15.9231 15.5171C15.9231 16.2084 15.3644 16.7671 14.6731 16.7671C13.9819 16.7671 13.4181 16.2084 13.4181 15.5171C13.4181 14.8259 13.9706 14.2671 14.6619 14.2671H14.6731ZM9.66213 14.2671C10.3534 14.2671 10.9121 14.8259 10.9121 15.5171C10.9121 16.2084 10.3534 16.7671 9.66213 16.7671C8.97088 16.7671 8.40588 16.2084 8.40588 15.5171C8.40588 14.8259 8.95963 14.2671 9.65088 14.2671H9.66213Z" fill="#333333"/>
                            </svg>
                            {showMenu && (
                                <div className="z-40 origin-top-right absolute mt-1 right-0 w-40 rounded-md shadow-lg bg-white focus:outline-none">
                                    <div className="py-1">
                                        <div onClick={addIngredientsToShoppingList} className="text-gray-700 block px-4 py-2 text-xs" id="0">Add to shopping list</div>
                                        <div onClick={openCalendarModal} className="text-gray-700 block px-4 py-2 text-xs" id="1">Add to my week</div>
                                        {/* <p className="text-gray-700 block px-4 py-2 text-xs" id="2">Share a recipe</p> */}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-medium text-xl mb-2">Ingregients</h2>
                    <ul className="ml-5 leading-relaxed list-disc list-outside">
                    { 
                        recipe.ingredients.map( (ingredient, index) =>
                        <li className="py-1" key={index}> {ingredient} </li>
                        )
                    }
                    </ul>
                </div>
                <div>
                    <h2 className="font-medium text-xl mb-2">Instructions</h2>
                    <ul className="leading-relaxed list-decimal ml-3 list-outside">
                        { 
                            recipe.instructions.map( (step, index) =>
                        <li className="py-1" key={index}> {step} </li>
                        )
                        }
                    </ul>
                </div>
                {
            showModal && (<CalendarModal onClose={openCalendarModal} show={showModal} />)
        }
            </div>
        )}
        <Link to={{
            pathname: `step/${stepId}`,
            recipe: recipe
        }} className="fixed bottom-24 w-full py-6 bg-brand-orange text-white tracking-wide font-semibold text-xl flex flex-row justify-center items-center space-x-6">
            <span>START COOKING</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.8366 12.3607L10.835 12.0066C10.835 10.535 10.9212 9.19332 11.051 8.31871L11.1648 7.77483C11.228 7.48678 11.3112 7.1588 11.3979 6.99137C11.7154 6.37892 12.3361 6 13.0005 6H13.0583C13.4914 6.01432 14.4012 6.39435 14.4012 6.40756C15.8652 7.02183 18.6895 8.87572 19.994 10.1974L20.3731 10.5942C20.4723 10.7017 20.5839 10.829 20.6531 10.9282C20.8844 11.2344 21 11.6134 21 11.9923C21 12.4153 20.8702 12.8085 20.6247 13.1302L20.2353 13.5505L20.148 13.6402C18.9644 14.9234 15.8739 17.0218 14.2572 17.664L14.0131 17.7576C13.7194 17.8629 13.3078 17.9884 13.0583 18C12.7408 18 12.4376 17.9262 12.1485 17.7808C11.7874 17.577 11.4994 17.2554 11.3401 16.8764C11.2387 16.6143 11.0794 15.8267 11.0794 15.8124C10.9334 15.0183 10.8487 13.7652 10.8366 12.3607ZM3 11.9996C3 11.1613 3.67308 10.4817 4.50325 10.4817L8.20248 10.8088C8.85375 10.8088 9.38174 11.3419 9.38174 11.9996C9.38174 12.6583 8.85375 13.1903 8.20248 13.1903L4.50325 13.5175C3.67308 13.5175 3 12.8378 3 11.9996Z" fill="white"/>
            </svg>
        </Link>
        <TabBar/>
        <NotificationContainer/>
    </div>
  );
};

export default Recipe;