import { useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  signInWithPopup,
  FacebookAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
import useUsers from "./useUsers";


function useAuth() {
  const { createUser } = useUsers();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});
  const auth = getAuth();
  const facebookProvider = new FacebookAuthProvider();
  const googleProvider = new GoogleAuthProvider();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuthenticated(true);
      setUser(auth.currentUser)
      localStorage.setItem('userUID',auth.currentUser.uid);
      console.log(auth.currentUser)
      return;
    }
    setIsAuthenticated(false);
    return;
  });

  // const addUserToCollection = async () => {
  //   const userData = {
  //     ...auth.currentUser.uid,
  //     ...{

  //       displayName: user.displayName,
  //       userId: user.uid,
  //       email: user.email,
  //     },
  //   };

  //   try {
  //     await createUser(auth.currentUser.uid, userData);
  //     await console.log('works')
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };


  const createEmailUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    // addUserToCollection()
  }

  const signInEmailUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signUserOut = () => signOut(auth).then(localStorage.removeItem('userUID'));

  const signInFacebookUser = () => signInWithPopup(auth, facebookProvider )
  const signInGoogleUser = () => signInWithPopup(auth, googleProvider);

  return {
    createEmailUser,
    isAuthenticated,
    signInEmailUser,
    signUserOut,
    signInFacebookUser,
    signInGoogleUser,
    user
  };
}
export default useAuth;
