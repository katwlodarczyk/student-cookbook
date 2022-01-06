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
    const ref = collection(db, "shopping-lists");
    // add shoppinglist of a user
    const createShoppingList = (userId ,recipe) => setDoc(doc(db, "shopping-lists", userId), {recipe: recipe}, { merge: true });
    // const createShoppingList = (addToList) => setDoc(ref, addToList, {merge: true});

    // get shopping list of the user
    const getRecipes = () => getDocs(ref);
    // get recipe based on ID
    
    const getRecipe = (id) => {
      const ref = collection(db, "recipes", id);
      return getDoc(ref);
    }
  
    return {createShoppingList}
  }
  
  export default useRecipeFunctionality;