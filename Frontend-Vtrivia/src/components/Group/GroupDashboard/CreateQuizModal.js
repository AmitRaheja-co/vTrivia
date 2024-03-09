import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateGroupModal = ({ isOpen, onClose,grpId }) => {
  const [scheduleTime, setScheduleTime] = useState("");
  const [quizDuration, setQuizDuration] = useState("");
  const [windowTime, setWindowTime] = useState("");

  console.log("DNE"+ grpId);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
        startTimeStamp:scheduleTime,
      quizDuration:parseInt(quizDuration),
      timeWindow:parseInt(windowTime),
      groupId:grpId
    };

    axios
      .post("https://localhost:7089/api/Quiz", postData, {
        headers: {
          "Content-Type": "application/json",
        }
      })
      .then((response) => {
        console.log("Post request response:", response.data);
        navigate('/CreateQuiz',{ state: { props: response.data } });
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
              Set up Quiz:
            </h2>
            <form
              onSubmit={handleSubmit}
              className="space-y-4 md:space-y-6"
              action="/"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  scheduleTime
                </label>
                <input
                  type="datetime-local"
                  name="email"
                  id="email"
                  value={scheduleTime}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  onChange={(e) => setScheduleTime(e.target.value)}
                />
              </div>
              <div>
                <label
                  for=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  quizDuration
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="in minutes"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={windowTime}
                  onChange={(e) => setWindowTime(e.target.value)}
                  min="0"
                  step="1"
                />
              </div>
              <div>
                <label
                  for=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  WindowTime
                </label>
                <input
                  type="number"
                  name=""
                  id=""
                  placeholder="in minutes"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={quizDuration}
                  onChange={(e) => setQuizDuration(e.target.value)}
                  min="0"
                  step="1"
                />
              </div>
              <button
                onClick={handleSubmit}
                type="submit"
                className="mr-5 my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Set Up Quiz
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

export default CreateGroupModal;
