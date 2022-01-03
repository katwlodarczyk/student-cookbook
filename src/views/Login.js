import logo from '../assets/illustrations/logo.svg'
import { Link } from "react-router-dom";
import React, { useState } from "react";
import Form from "../Components/LoginForm";

const Login = (props) => {
  const {signInEmailUser, signInFacebookUser, signInGoogleUser} = useAuth();

  const loginFormSchema = yup.object().shape({
    email: yup
      .string()
      .email("please enter a valid email address")
      .required("please enter an email address"),
    password: yup
      .string()
      .required("please enter a password")
      .min(5, "password must be at least 8 characters long"),
  });

  const { register, handleSubmit, errors } = useForm({
    validationSchema: loginFormSchema,
  });

  const handleClick = (e) => {
    e.preventDefault();
  };

  const handleEmailSubmit = async (data) => {
    try {
      const { email, password } = data;
      await signInEmailUser(email, password);
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
    <div className="w-full min-h-screen h-max px-4 py-10 flex flex-col space-y-8">
        <div className="flex flex-col justify-center align-center text-center">
          <img src={logo} alt="logo"/>
          <h1 className="text-4xl font-galada mt-4 pb-2">Student Cookbook</h1>
          <p className="text-sm px-10">A vast collection of fast and easy recipes with a step by step guide</p>
        </div>
        <Form
          serverErrorMessage={serverErrorMessage}
          onEmailSubmit={handleEmailSubmit}
          onSocialSubmit={handleSocialSubmit}
        />
    </div>
  );
};

export default Login;