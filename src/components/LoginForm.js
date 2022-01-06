import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import ErrorLabel from "./ErrorLabel";

function LoginForm(props) {
    const { onEmailSubmit, onSocialSubmit, serverErrorMessage } = props;

    const loginFormSchema = yup.object({
        email: yup
          .string()
          .email("please enter a valid email address")
          .required("please enter your email address"),
        password: yup
          .string()
          .required("please enter a password")
          .min(8, "password must be 8 characters long"),
      }).required();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginFormSchema)
    });

      return (
        <React.Fragment>
            <div>
                <div>
                    <form id="loginForm" onSubmit={handleSubmit(onEmailSubmit)} className="flex flex-col text-gray-700 mt-10mb-3">
                        <div className="flex flex-col space-y-1 mb-4">
                            <label>
                                Email address
                            </label>
                            <input 
                                type="text" 
                                name="email" 
                                {...register("email")}
                                className={"rounded-lg " + (errors.email?.message ? 'border-red-600 text-red-600 focus:outline-none focus:ring-0 focus:border-current' : 'border-gray-300 text-gray-700')}
                            />
                            <ErrorLabel> {errors.email?.message} </ErrorLabel>
                        </div>
                        <div className="flex flex-col space-y-1">
                            <label>
                                Password
                            </label>
                            <input 
                                {...register("password")} 
                                type="password" 
                                name="password" 
                                className={"rounded-lg " + (errors.password?.message ? 'border-red-600 text-red-600 focus:outline-none focus:ring-0 focus:border-current' : 'border-gray-300 text-gray-700')}
                            />
                            <ErrorLabel> {errors.password?.message} </ErrorLabel>
                        </div>
                        <ErrorLabel> {serverErrorMessage} </ErrorLabel>
                        <button type="submit" className="cursor-pointer mt-8 w-full py-6 bg-brand-orange text-white tracking-wide font-semibold text-xl flex flex-row justify-center items-center space-x-6">
                            <span>LOGIN</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.8366 12.3607L10.835 12.0066C10.835 10.535 10.9212 9.19332 11.051 8.31871L11.1648 7.77483C11.228 7.48678 11.3112 7.1588 11.3979 6.99137C11.7154 6.37892 12.3361 6 13.0005 6H13.0583C13.4914 6.01432 14.4012 6.39435 14.4012 6.40756C15.8652 7.02183 18.6895 8.87572 19.994 10.1974L20.3731 10.5942C20.4723 10.7017 20.5839 10.829 20.6531 10.9282C20.8844 11.2344 21 11.6134 21 11.9923C21 12.4153 20.8702 12.8085 20.6247 13.1302L20.2353 13.5505L20.148 13.6402C18.9644 14.9234 15.8739 17.0218 14.2572 17.664L14.0131 17.7576C13.7194 17.8629 13.3078 17.9884 13.0583 18C12.7408 18 12.4376 17.9262 12.1485 17.7808C11.7874 17.577 11.4994 17.2554 11.3401 16.8764C11.2387 16.6143 11.0794 15.8267 11.0794 15.8124C10.9334 15.0183 10.8487 13.7652 10.8366 12.3607ZM3 11.9996C3 11.1613 3.67308 10.4817 4.50325 10.4817L8.20248 10.8088C8.85375 10.8088 9.38174 11.3419 9.38174 11.9996C9.38174 12.6583 8.85375 13.1903 8.20248 13.1903L4.50325 13.5175C3.67308 13.5175 3 12.8378 3 11.9996Z" fill="white"/>
                            </svg>
                        </button>
                    </form>
                    <div className="mt-3">
                        <span>Don't have an account?</span> 
                        <Link to={'/register'} className="cursor-pointer font-semibold"> Register.</Link>
                    </div>
                </div>
                <div className="mt-8 flex flex-row justify-center space-x-16 aling-center">
                    <svg network="facebook" onClick={()=> onSocialSubmit("facebook")} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M29.75 0H4.25C1.90612 0 0 1.90612 0 4.25V29.75C0 32.0939 1.90612 34 4.25 34H29.75C32.0939 34 34 32.0939 34 29.75V4.25C34 1.90612 32.0939 0 29.75 0Z" fill="#1976D2"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M28.6875 17H23.375V12.75C23.375 11.577 24.327 11.6875 25.5 11.6875H27.625V6.375H23.375C21.6842 6.375 20.0627 7.04665 18.8672 8.24219C17.6716 9.43774 17 11.0592 17 12.75V17H12.75V22.3125H17V34H23.375V22.3125H26.5625L28.6875 17Z" fill="#FAFAFA"/>
                    </svg>
                    <svg network="google" onClick={()=> onSocialSubmit("google")} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.982 17.3181C33.982 15.9251 33.8664 14.9086 33.616 13.8545H17.3386V20.1416H26.8931C26.7005 21.7041 25.6603 24.0571 23.3487 25.6382L23.3163 25.8487L28.4629 29.7448L28.8195 29.7796C32.0942 26.8242 33.982 22.4758 33.982 17.3181Z" fill="#4285F4"/>
                        <path d="M17.3386 33.8832C22.0195 33.8832 25.9491 32.3772 28.8194 29.7796L23.3487 25.6382C21.8847 26.6359 19.9198 27.3324 17.3386 27.3324C12.754 27.3324 8.86285 24.3771 7.47577 20.2923L7.27246 20.3092L1.92094 24.3563L1.85095 24.5464C4.70187 30.0807 10.5579 33.8832 17.3386 33.8832Z" fill="#34A853"/>
                        <path d="M7.47582 20.2923C7.10983 19.2382 6.89801 18.1086 6.89801 16.9416C6.89801 15.7745 7.10983 14.6451 7.45656 13.5909L7.44687 13.3664L2.02828 9.25424L1.85099 9.33665C0.67599 11.6332 0.00177002 14.2121 0.00177002 16.9416C0.00177002 19.6711 0.67599 22.2499 1.85099 24.5465L7.47582 20.2923Z" fill="#FBBC05"/>
                        <path d="M17.3386 6.55073C20.5941 6.55073 22.79 7.92487 24.0422 9.07321L28.935 4.40484C25.9301 1.67537 22.0195 3.05176e-05 17.3386 3.05176e-05C10.5579 3.05176e-05 4.70188 3.80244 1.85095 9.33665L7.45653 13.5909C8.86287 9.50613 12.754 6.55073 17.3386 6.55073Z" fill="#EB4335"/>
                    </svg>
                </div>
            </div>
        </React.Fragment>
      )
}

export default LoginForm;