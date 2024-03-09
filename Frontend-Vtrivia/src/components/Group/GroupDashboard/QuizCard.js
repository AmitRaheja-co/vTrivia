import React from "react";
import groupIcon from "../../../assets/QuizLogo.png";
import AttemptQuizModal from "./AttemptQuizModal";

const QuizCard = ({ name }) => {
  const [attemptQuiz, setAttemptQuiz] = useState(false);

  const openAttemptQuizModal = () => {
    setAttemptQuiz(true);
  };

  const closeAttemptQuizModal = () => {
    setAttemptQuiz(false);
  };
  console.log(name);
  return (
    <div
      className="mt-5 ml-3 max-w-60 max-h-96 rounded-3xl overflow-hidden shadow-md"
      onClick={openAttemptQuizModal}
    >
      <img
        src={groupIcon}
        alt="group-icon"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <div className="bg-white px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">{name}</p>
      </div>
      <AttemptQuizModal
        grpId={props.curr_group.id}
        isOpen={attemptQuiz}
        onClose={closeAttemptQuizModal}
      />
    </div>
  );
};

export default QuizCard;
