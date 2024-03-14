import React, { useState } from "react";
import axios from "axios";
import CreateQuizModal from "./CreateQuizModal";
import QuizCard from "./QuizCard";
import Sidebar from "./Sidebar";
import SidebarAll from "./SidebarAll";

import { useLocation,useNavigate } from "react-router-dom";

const GroupDashboard = () => {
  const [createQuizModal, setCreateQuizModal] = useState(false);
  const [showMembersSidebar, setShowMembersSidebar] = useState(false);
  const [showInviteSidebar, setShowInviteSidebar] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const props = location.state?.props;
  const currGroup = location.state?.props.curr_group;
  const members = location.state?.props.members || [];
  const membersUsername = members.map((member) => member.userName);
  const userId = location.state?.props.userId;
  const allUsers = location.state?.props.all || [];
  const allUsername = allUsers.map((user) => user.userName);
  const quizs = props.quizs;
  const jwt = localStorage.getItem("jwt");
  console.log(props);
  //console.log(props.curr_group.id);


  // console.log(membersUsername);
  // console.log(allUsername);
  //console.log()
  var currentQuizzes= [],pastQuizzes= [],futureQuizzes = [];
  const currentTime = new Date();
  quizs.map(
    (quiz) =>{
      if (new Date(quiz.startTimeStamp).getTime() + quiz.timeWindow * 60000 <
      currentTime.getTime()) {
        pastQuizzes.push(quiz);
      }
      else if (new Date(quiz.startTimeStamp).getTime() >
      currentTime.getTime() + quiz.timeWindow * 60000) {
        futureQuizzes.push(quiz);
      }
      else{
        currentQuizzes.push(quiz);
      }
    }
  );
    console.log("all quiz");
    console.log(quizs);
    console.log("current");
    console.log(currentQuizzes);
    console.log("past");
    console.log(pastQuizzes);
    console.log("future");
    console.log(futureQuizzes);
  const openCreateQuizModal = () => {
    setCreateQuizModal(true);
  };

  const closeCreateQuizModal = () => {
    setCreateQuizModal(false);
  };

  const toggleMembersSidebar = () => {
    setShowMembersSidebar(!showMembersSidebar);
    setShowInviteSidebar(false);
  };

  const toggleInviteSidebar = () => {
    setShowInviteSidebar(!showInviteSidebar);
    setShowMembersSidebar(false);
  };
  const postDataWithJWT = async ()  => {
    //console.log(jwtToken);
    await axios.get('https://localhost:7089/Group', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${jwt}` // Include the JWT token in the Authorization header
      },
    })
    .then((response) => {
    //  console.log('POST request successful:', response.data);
    //alert(response.data);
      navigate("/Dashboard", { state: { props: response.data } });
      // Add any additional logic after successful submission
    })
    .catch((error) => {
      console.error('Error submitting form:', error);
      // Handle errors appropriately
    });
  };
  return (
    <>
      <div className="bg-blue-300 relative" style={{
        width:'100%',
        height:'100%'
      }}>
        <nav className="sticky top-0 bg-sky-600">
          <div className=" max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex">
          
            <a className="flex mr-5 items-center space-x-3 rtl:space-x-reverse">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                <a href="/">vTrivia</a>
              </span>
            </a>
            <button
                  type="button"
                  onClick={postDataWithJWT}
                  className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Dashboard
                </button>
            </div>
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
                  grpId={props.curr_group.id}
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

                <button
                  type="button"
                  onClick={toggleInviteSidebar}
                  className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
                  Invite

                </button>
                {showMembersSidebar && <Sidebar members={membersUsername} onClose={toggleMembersSidebar} />}
                {showInviteSidebar && <SidebarAll allusers={allUsers} admin={props.curr_group.adminId} grpId={props.curr_group.id} onClose={toggleInviteSidebar} />}
              </div>
            </div>
          </div>

        </nav>
        {/* <div>
        <div className="flex flex-wrap">
          {quizs.map((quiz) => (
            <QuizCard key={quiz.id} Id={quiz.id} name={`quiz${quiz.id}`} />
            ))}
        </div>
      </div> */}
         {/* Current Contests */}
      <div>
        <h1 className="text-3xl my-2">Current Contests</h1>
        <div className="grid col-span-5">
          <div
            className={`flex flex-wrap w-full col-span-1 ${
              showMembersSidebar || showInviteSidebar ? "w-3/4" : ""
            }`}
          >
           {currentQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} Id={quiz.id} name={`quiz${quiz.id}`} time = {2} />
          ))}
          </div>
        </div>
      </div>

      {/* <div className="flex flex-wrap">
          <div
            className={`flex w-full ${
              showMembersSidebar || showInviteSidebar ? "w-8/12" : ""
            }`}
          >
           {pastQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} Id={quiz.id} name={`quiz${quiz.id}`} time = {0} />
          ))}
          </div>
        </div> */}

      {/* Future Contests */}
      <div>
        <h1 className="text-3xl my-2">Future Contests</h1>
        <div className="grid col-span-5">
          <div
            className={`flex flex-wrap w-full col-span-1 ${
              showMembersSidebar || showInviteSidebar ? "w-3/4" : ""
            }`}
          >
           {futureQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} Id={quiz.id} name={`quiz${quiz.id}`} time = {1} />
          ))}
          </div>
        </div>
      </div>
      {/* Past Contests */}
      <div>
        <h1 className="text-3xl my-2">Past Contests</h1>
        <div className="grid col-span-5">
          <div
            className={`flex flex-wrap w-full col-span-1 ${
              showMembersSidebar || showInviteSidebar ? "w-3/4" : ""
            }`}
          >
           {pastQuizzes.map((quiz) => (
            <QuizCard key={quiz.id} Id={quiz.id} name={`quiz${quiz.id}`} time = {0} />
          ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default GroupDashboard;
