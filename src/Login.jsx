import React from "react";
import oderdo from "../src/assets/oderdo-2.jpg";
import Logooderdo from "../src/assets/oderdoLogo.jpg";
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/dashboard");
  };

  return (
    <>
      <div className="bg-[url('../src/assets/oderdo-2.jpg')] bg-cover bg-center h-[43.4rem] w-full flex items-center justify-center text-white">
        <div className="p-6 rounded-lg sm:mx-auto sm:w-full sm:max-w-lg text-white">
          <div className="flex flex-col items-center">
            <img
              className="w-full h-auto mb-6"
              src={Logooderdo}
              alt="oderdoLogo.jpg"
            />
            <form onSubmit={handleSignIn} className="w-full">
              <div className="mb-4">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 text-black"
                  type="email"
                  id="email"
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300 bg-gray-300 text-black"
                  type="password"
                  id="password"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-black-200"
              >
                Sign In
              </button>
            </form>
            <div className="mt-4 text-center text-black font-bold">
                <h3>
                    Not a user? <a className="text-blue-600 font-bold hover:underline" href="/register"> Register </a>
                </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
