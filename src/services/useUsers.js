import {
    doc,
    collection,
    getDocs,
    setDoc,
   getFirestore
  } from "firebase/firestore";

  function useUsers() {
    const db = getFirestore();
     // add user on register
     const createUser = (userId, userData) => setDoc(doc(db, `users`, userId), userData);
    // get user
    const getUser = (uid) => getDocs(collection(db, "recipes", uid));


  
    return {createUser, getUser,}
  }
  
  export default useUsers;