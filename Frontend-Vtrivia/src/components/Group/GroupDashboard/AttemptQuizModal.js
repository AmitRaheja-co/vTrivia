import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AttemptQuizModal = ({ isOpen, onClose ,quizId}) => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    const postData = {
      grpId: quizId,
    };
    //alert(quizId);
    axios
      .post("https://localhost:7089/api/Quiz/GetQues", postData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("Post request response:", response.data);
        navigate("/StartQuiz", { state: { props: response.data } });
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
            <h2 className="text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl dark:text-white">
              Instructions :
            </h2>
            <ul class="max-w-md space-y-1 text-blue-600 list-disc list-inside dark:text-black">
              <li>
                Before you proceed with the quiz, please read the following
                instructions carefully:{" "}
              </li>
              <li>Time Limit of the quiz is time minutes</li>
              <li>
                Every question of the quiz consists of four choices, one of them
                is correct
              </li>
              <li>
                Marking scheme of each question will be +4 / -1, meaning for
                each correct attempt, you will get four points, and for each
                incorrect one, you will get deducted one point
              </li>
            </ul>
            <button
              onClick={handleSubmit}
              type="submit"
              className="mr-5 my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Start Quiz
            </button>
            {/* <button
              onClick={onClose}
              type="submit"
              className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
            >
              Cancel
            </button> */}
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AttemptQuizModal;
