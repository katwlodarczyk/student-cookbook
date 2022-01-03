import logo from '../assets/illustrations/logo.svg'

const Login = (props) => {

  return (
    <div className="w-full min-h-screen h-max px-4 py-10 flex flex-col space-y-5">
        <div className="flex flex-col justify-center align-center text-center">
          <img src={logo} alt="logo"/>
          <h1 className="text-4xl font-galada mt-4 pb-2">Student Cookbook</h1>
          <p className="text-sm px-10">A vast collection of fast and easy recipes with a step by step guide</p>
        </div>
    </div>
  );
};

export default Login;