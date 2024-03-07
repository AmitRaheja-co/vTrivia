import React from "react";
import HomeNav from "./HomeNav";
import logo from "../../assets/QuizLogo.png";
import FriendCard from "./FriendCard";

const HomePage = () => {
  return (
    <>
      <HomeNav />
      <div className="bg-sky-400 h-screen w-screen grid grid-cols-5">
        <div className="col-span-3">
          <a
            href="/Login"
            className="mt-20 mb-40 mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-col md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-sky-400 dark:hover:bg-sky-600"
          >
            <div className="flex flex-col justify-between p-4 leading-normal">
              <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                vTrivia : Quiz App 2k24
              </p>
              <p className=" font-normal text-gray-800 dark:text-gray-900">
                Welcome to vTrivia, where the thrill of trivia meets the joy of
                learning! Explore a wide range of categories, challenge friends
                in real-time multiplayer quizzes, and customize your own
                brain-teasers. With a sleek design and regular updates, vTrivia
                is the ultimate destination for quiz enthusiasts. Prove your
                knowledge, earn badges, and enjoy a fun and engaging experience.
                Get ready to be a Trivian!
              </p>
            </div>

            
          </a>

          <div class="w-full p-2 text-center bg-white border border-gray-200 rounded-lg shadow sm:p-5 dark:bg-sky-400 dark:border-gray-700">
            <p class="mb-1 text-2xl font-bold text-gray-900 dark:text-white">
              Get the essence of amazing trivias'
            </p>
            <p class="mb-4 text-base text-gray-800 sm:text-lg dark:text-gray-800">
              "Explore the excitement of vTrivia: Quiz App 2k24! Dive into a
              world of diverse categories, challenge friends with real-time
              quizzes, and embrace the joy of learning and fun competition."
            </p>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
              <a
                href="/SignUp"
                class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-cyan-600 dark:hover:bg-blue-600 dark:focus:ring-gray-700"
              >
                <div class="text-left rtl:text-right">
                  <div class="-mt-1 font-sans text-sm font-semibold">
                    Sign Up
                  </div>
                </div>
              </a>
              <a
                href="/Login"
                class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              >
                <div class="text-left rtl:text-right">
                  <div class="-mt-1 font-sans text-sm font-semibold">Login</div>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="w-screen h-screen col-span-2 flex">
          <img
            src={logo}
            alt="quiz-app-logo"
            style={{ maxWidth: "100%", maxHeight: "74%" }}
          />
        </div>
      </div>
      <div className="grid grid-cols-4">
        <FriendCard
          friendName="Deepti"
          Role="Business Analyst"
          Github="abc"
          Linkedin="abc"
        />
        <FriendCard
          friendName="Aryan"
          Role="Frontend Engineer"
          Github="https://github.com/Aryan-Sanghi-008"
          Linkedin="https://www.linkedin.com/in/aryansanghi008/"
        />
        <FriendCard
          friendName="Dhruv Mathur"
          Role="Backend Engineer (.NET)"
          Github="https://github.com/dhruvmathur2003"
          Linkedin="https://www.linkedin.com/in/dhruv-mathur-8a3404209?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
        />
        <FriendCard
          friendName="Amit Raheja"
          Role="Backend Engineer (.NET)"
          Github="https://github.com/AmitRaheja-co"
          Linkedin="https://www.linkedin.com/in/amit-raheja-5550a3200/"
        />
      </div>
    </>
  );
};

export default HomePage;
