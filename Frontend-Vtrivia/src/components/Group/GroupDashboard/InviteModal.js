import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const InviteModal = ({ grpId,admin,id,name,isOpen, onClose }) => {
  const [scheduleTime, setScheduleTime] = useState("");
  const [quizDuration, setQuizDuration] = useState("");
  const [windowTime, setWindowTime] = useState("");

  //console.log("DNE"+ grpId);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
        adminId:admin,
        invitedUserId:id,
        groupId:grpId
    };

    axios
      .post("https://localhost:7089/api/Invite", postData, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        console.log("Post request response:", response.data);
        toast.success("Invitation Sent");
        //navigate('/CreateQuiz',{ state: { props: response.data } });
      })
      .catch((error) => {
        console.error("Post request error:", error);
      });
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-500 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Send An Invite
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="/"
            >
              
            
              <h1>Send an invite to {name} to join this group as a member and attemot the quiz</h1>
              <button
                onClick={handleSubmit}
                type="submit"
                className="mr-5 my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Send an invite
              </button>
              <button
                onClick={onClose}
                type="submit"
                className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default InviteModal;
