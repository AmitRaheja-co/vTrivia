import React, { useState } from "react";
import CreateGroupModal from "./CreateGroupModal";

const ProfileNavbar = () => {
  const [isCreateGroupModalOpen, setCreateGroupModalOpen] = useState(false);

  const openCreateGroupModal = () => {
    setCreateGroupModalOpen(true);
  };

  const closeCreateGroupModal = () => {
    setCreateGroupModalOpen(false);
  };
  return (
    <>
      <nav className="bg-sky-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              <a href="/">vTrivia</a>
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div className="font-small flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-sky-600 md:dark:">
              {/* Create Group Icon */}
              <button
                type="button"
                onClick={openCreateGroupModal}
                className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Create Group
              </button>
              <CreateGroupModal
                isOpen={isCreateGroupModalOpen}
                onClose={closeCreateGroupModal}
              />

              {/* Profile Icon */}
              <div className="flex items-center md:order-0 space-x-3">
                <button
                  type="button"
                  className="text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-red-600"
                  id="user-menu-button"
                >
                  <div className="w-8 h-8 rounded-full"></div>
                </button>
              </div>

              {/* notification icon */}
              <div className="flex items-center md:order-0 space-x-3">
                <button
                  type="button"
                  className="text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-yellow-500"
                  id="user-menu-button"
                >
                  <div className="w-8 h-8 rounded-lg"></div>
                </button>
              </div>

              {/* Log Out button */}
              <button
                type="button"
                className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <a href="/Login">Log Out</a>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default ProfileNavbar;
