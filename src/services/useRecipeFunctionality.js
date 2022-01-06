import {
    doc,
    setDoc,
    addDoc,
    collection,
    getDocs,
    getDoc,
   getFirestore
  } from "firebase/firestore";

  import { useState} from "react";

  function useRecipeFunctionality() {
    const db = getFirestore();

    // add recipe to the shoppinglist of a user
    const createShoppingList = (userId ,recipeName, recipe) => setDoc(doc(db, `shopping-list-${userId}`, recipeName), recipe, {merge: true});
    // get shopping list of the user
    const getShoppingList = (userId) => getDocs(collection(db, `shopping-list-${userId}`));
    // get recipe based on ID
    
    const getRecipe = (id) => {
      const ref = collection(db, "recipes", id);
      return getDoc(ref);
    }
  
    return {createShoppingList, getShoppingList}
  }
  
  export default useRecipeFunctionality;