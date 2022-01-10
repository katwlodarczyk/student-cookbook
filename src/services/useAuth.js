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
import { useNavigate } from "react-router-dom";


function useAuth() {
  const navigate = useNavigate();
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
      return;
    }
    setIsAuthenticated(false);
    return;
  });

  const createEmailUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
  }

  const signInEmailUser = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

  const signUserOut = () => signOut(auth).then(localStorage.removeItem('userUID')).then(navigate('../login', { replace: true }));

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
