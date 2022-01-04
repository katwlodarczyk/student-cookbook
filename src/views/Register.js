import logo from '../assets/illustrations/logo.svg'
import React, { useState } from "react";
import Form from "../components/RegisterForm";
import useAuth from "../services/useAuth";

const Register = (props) => {
  const [serverErrorMessage, setServerErrorMessage] = useState();
  const {createEmailUser, signInFacebookUser, signInGoogleUser} = useAuth();

  const handleEmailRegister = async (data) => {
    try {
      const { email, password } = data;
      await createEmailUser(email, password);
    } catch (e) {
      setServerErrorMessage(e.message);
    }
  };

  const handleSocialSubmit = async (method) => {
    try {
      if (method === "facebook") {
        await signInFacebookUser();
      }
      if (method === "google") {
        await signInGoogleUser();
      }
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <div className="w-full min-h-screen h-max px-4 pt-16 pb-10 flex flex-col space-y-8">
        <div className="flex flex-col justify-center align-center text-center">
        <img src={logo} alt="logo" className="w-1/3 self-center flex-shrink-0 mb-4"/>
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