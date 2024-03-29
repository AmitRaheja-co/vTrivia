import React, { useState } from "react";
import "./LoginPage.css";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import logo from "../../assets/Thundre-removebg-preview.png";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const postDataWithJWT = async (jwtToken) => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://localhost:7089/Group', {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${jwtToken}`
        },
      });
      setIsLoading(false);
      navigate("/Dashboard", { state: { props: response.data } });

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://localhost:7089/login",
        {
          email,
          password,
          twoFactorCode: "string",
          twoFactorRecoveryCode: "string",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const bearerToken = response.data.accessToken;
      localStorage.setItem('jwt', bearerToken);
      setIsLoading(false);
      await postDataWithJWT(localStorage.getItem('jwt'));
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
    <div style={{
      overflowY:'hidden'
    }}>
      <Navbar />
      <section className="bg-sky-300 h-screen relative">
        <Loader
           isOpen={isLoading}
            onClose={isLoading}
        />
        <img
          src={logo}
          style={{
            position: 'absolute',
            top: '40px',
            left: '40%',
            width: '',
            height: 'calc(100% + 20px)',
            transform: 'rotate(20deg)',
            zIndex: 0
          }}
        />
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0" style={{ position: 'relative' }}>
          <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-blue-500 dark:text-">
            Login to vTrivia
          </a>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-blue-500 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="/">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="FullName@domain.com"
                    required=""
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start"></div>
                  <a href="/" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                    <a href="/ForgetPassword">Forget Password?</a>
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  Don't have an account yet?{" "}
                  <a href="/" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                    <a href="/SignUp">Sign up</a>
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
};

export default LoginPage;
