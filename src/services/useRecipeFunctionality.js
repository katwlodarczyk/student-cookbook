import {
    doc,
    setDoc,
    collection,
    getDocs,
   getFirestore
  } from "firebase/firestore";

  function useRecipeFunctionality() {
    const db = getFirestore();

    // add recipe to the shoppinglist of a user
    const createShoppingList = (userId ,recipeName, ingredients) => setDoc(doc(db, `shopping-list-${userId}`, recipeName), ingredients, {merge: true});

    // get shopping list of the user
    const getShoppingList = (userId) => getDocs(collection(db, `shopping-list-${userId}`));

    // get weekly planer of a user
    const getWeeklyPlanner = (userId) => getDocs(collection(db, `weekly-planner-${userId}`));

    return {createShoppingList, getShoppingList, getWeeklyPlanner}
  }
  
  export default useRecipeFunctionality;