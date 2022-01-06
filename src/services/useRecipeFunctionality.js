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
    const createShoppingList = (userId ,recipeName, recipe) => setDoc(doc(db, `shopping-list-${userId}`, recipeName), recipe, {merge: true});

    // get shopping list of the user
    const getShoppingList = (userId) => getDocs(collection(db, `shopping-list-${userId}`));
  
    return {createShoppingList, getShoppingList}
  }
  
  export default useRecipeFunctionality;