import React,{useState} from "react";
import groupIcon from "../../../assets/QuizLogo.png";
import AttemptQuizModal from "./AttemptQuizModal";
import "./Style.css";
const QuizCard = ({ name, Id, time }) => {
  const [attemptQuiz, setAttemptQuiz] = useState(false);

  const openAttemptQuizModal = () => {
    if (time !== 0 && time !== 1) {
      setAttemptQuiz(true);
    }
  };

  const closeAttemptQuizModal = () => {
    setAttemptQuiz(false);
  };

  return (
    <div
      className={`mt-5 ml-3 mx-4 max-w-60 max-h-96 rounded-3xl overflow-hidden shadow-md ${time === 0 || time === 1 ? 'unclickable-card' : ''}`}
      onClick={openAttemptQuizModal}
      style={{ opacity: time === 0 || time === 1 ? 1 : 1 }}
    >
      <img
        className="image-icon"
        src={groupIcon}
        alt="group-icon"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <div className="bg-white px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {time === 1 ? 'quiz not started yet' : time === 0 ? 'quiz over' : name}
        </p>
      </div>
      <AttemptQuizModal
        isOpen={attemptQuiz}
        onClose={closeAttemptQuizModal}
        quizId={Id}
      />
    </div>
  );
};

export default QuizCard;
