import logo from '../assets/illustrations/logo.svg'
import React, { useState } from "react";
import Form from "../components/RegisterForm";
import useAuth from "../services/useAuth";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Register = (props) => {
  const navigate = useNavigate();
  const [serverErrorMessage, setServerErrorMessage] = useState();
  const {signInGoogleUser} = useAuth();
  const auth = getAuth();

  const handleEmailRegister = async (data) => {
    const { email, password } = data;
      await createUserWithEmailAndPassword(auth, email, password)
      await navigate('../', { replace: true })
      .catch((error) => {
        setServerErrorMessage(error.message)
      });
    }


  const handleSocialSubmit = async (method) => {
    try {
      if (method === "google") {
        await signInGoogleUser();
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="w-full min-h-screen h-max p-4 justify-center flex flex-col space-y-8">
        <div className="flex flex-col justify-center align-center text-center">
        <img src={logo} alt="logo" className="w-1/3 max-w-min self-center flex flex-shrink-0 mb-4"/>
          <h1 className="text-4xl font-galada mt-4 pb-2">Student Cookbook</h1>
          <p className="text-sm px-10">A vast collection of fast and easy recipes with a step by step guide</p>
        </div>
        <Form
          serverErrorMessage={serverErrorMessage}
          onEmailRegister={handleEmailRegister}
          onSocialSubmit={handleSocialSubmit}
        />
    </div>
  );
};

export default Register;