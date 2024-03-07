import React, { useState } from "react";
import CreateQuizModal from "./CreateQuizModal";
import Sidebar from "./Sidebar";
 
const GroupDashboard = () => {
  const [createQuizModal, setCreateQuizModal] = useState(false);
  const [showMembersSidebar, setShowMembersSidebar] = useState(false);
 
  const openCreateQuizModal = () => {
    setCreateQuizModal(true);
  };
 
  const closeCreateQuizModal = () => {
    setCreateQuizModal(false);
  };
 
  const toggleMembersSidebar = () => {
    setShowMembersSidebar(!showMembersSidebar);
  };
  return (
    <>
      <div className="bg-blue-300 h-screen w-screen">
        <nav className="bg-sky-600">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a className="flex items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <a href="/">vTrivia</a>
              </span>
            </a>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <div className="font-small flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-sky-600 md:dark:">
                {/* Create Quiz Icon */}
                <button
                  type="button"
                  onClick={openCreateQuizModal}
                  className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Create Quiz
                </button>
                <CreateQuizModal
                  isOpen={createQuizModal}
                  onClose={closeCreateQuizModal}
                />
                <button
                  type="button"
                  onClick={toggleMembersSidebar}
                  className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Members
                </button>
 
                {/* Log Out button */}
                <button
                  type="button"
                  onClick={toggleMembersSidebar}
                  className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Invite
                </button>
              </div>
            </div>
          </div>
        </nav>
 
        {showMembersSidebar && <Sidebar onClose={toggleMembersSidebar} />}
      </div>
    </>
  );
};
 
export default GroupDashboard;