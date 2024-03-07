import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import axios from "axios";
import { useNavigate } from "react-router";
 
const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [username, setUsername] = useState("");
 
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
        .post("https://localhost:7089/register", {
             email,
             password
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) => {
            console.log("I am here");
            navigate('/Login');
        })
        .catch((error) => {
            console.error(error);
        });
};
  return (
    <>
      <Navbar />
      <div className="h-screen bg-sky-300 flex justify-center items-center w-full">
        {/* <h1 className="text-3xl">Sign up to vTrivia</h1> */}
        <form onSubmit={handleSubmit}>
          <div className="bg-blue-500 px-10 py-8 rounded-xl w-screen shadow-md max-w-sm">
            <div className="space-y-4">
              <h1 className="text-center text-2xl font-semibold text-white">
                Register
              </h1>
              {/* <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your Name"
                  required=""
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div> */}
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
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
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
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
            </div>
            <button className="mt-5 w-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-indigo-100 py-2 rounded-md text-lg tracking-wide">
              Register
            </button>
            <p className="my-4 text-sm font-small text-gray-900 dark:text-white">
              Already have an account?{" "}
              <a
                href="/"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                <a href="/Login">Click here</a>
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};
 
export default SignUpPage;