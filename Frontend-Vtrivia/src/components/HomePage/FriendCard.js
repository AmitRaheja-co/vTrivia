import React from "react";

const FriendCard = (props) => {
  return (
    <>
      <div className="w-full max-w-sm bg-sky-400 border border-gray-800 rounded-md shadow dark:bg-sky-400 dark:border-gray-700 pt-3">
        <div className="flex flex-col items-center pb-10">
          <img
            className="w-24 h-24 mb-3 rounded-full shadow-lg"
            src={props.image}
            alt="friend-image"
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {props.friendName}
          </h5>
          <span className="text-sm text-blue-500 dark:text-blue-700">
            {props.Role}
          </span>
          <div className="flex mt-4 md:mt-6">
            <a
              href={props.Linkedin}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-sky-700 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Linkedin
            </a>
            <a
              href={props.Github}
              className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-sky-400 dark:text-blue-600 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FriendCard;
