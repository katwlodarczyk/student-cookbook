import {
    collection,
    getDocs,
    getDoc,
   getFirestore
  } from "firebase/firestore";

  function useRecipes() {
    const db = getFirestore();
    const ref = collection(db, "recipes");
    // get all recipes in the collection
    const getRecipes = () => getDocs(ref);
    
    // get recipe based on ID
    const getRecipe = (id) => {
      const ref = collection(db, "recipes", id);
      return getDoc(ref);
    }
  
    return {getRecipes, getRecipe}
  }
  
  export default useRecipes;