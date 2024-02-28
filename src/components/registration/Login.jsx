import React from "react";
import googleLogo from "../../assets/login/googleLogo.png";
import facebookLogo from "../../assets/login/facebookLogo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const welcome =
    "https://burst.shopifycdn.com/photos/macbook-air-on-desk.jpg?width=925&format=pjpg&exif=0&iptc=0";

  return (
    /*  main container */
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gray-100">
      {/*  welcome image  */}
      {/* <div
        className="p-8 rounded shadow-md bg-cover w-full md:w-96 bg-center h-auto md:h-auto md:mr-4"
        style={{
          backgroundImage: `url("${welcome}")`,
          transform: "scaleX(-1)",
        }}
      ></div> */}

      {/*  Login container */}
      <div className="bg-white p-5 rounded shadow-md w-full md:w-96 h-96 md:h-auto">
        <h1 className="text-2xl font-semibold mb-4 text-center text-primeColor">Login</h1>
        <form className="flex flex-col gap-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/signin"><h6 className="text-[15px] text-primeColor px-1 py-1">Don't have an account</h6></Link>
            <Link><h6 className="text-[15px] text-primeColor  px-1 py-1">Forgot Password</h6></Link>
          </div>

          <button
            type="submit"
            className="w-full bg-primeColor text-white py-2 rounded-md hover:bg-black transition duration-300"
          >
            Login
          </button>

          <h3 className="text-center py-2">or</h3>
          <div className="flex items-center justify-center gap-3">
            <Link><img src={googleLogo} alt="Google Logo" height="25" width="25" /></Link>
            <Link><img src={facebookLogo} alt="Google Logo" height="27" width="27" /></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
