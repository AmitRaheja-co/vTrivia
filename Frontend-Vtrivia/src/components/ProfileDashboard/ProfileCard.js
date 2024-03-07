import React from "react";
import groupIcon from "../../assets/QuizLogo.png";

const ProfileCard = (props) => {
  return (
    <div className="mt-5 ml-3 max-w-60 max-h-96 rounded-3xl overflow-hidden shadow-md">
      <img
        src={groupIcon}
        alt="group-icon"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <div className="bg-white px-6 py-4">
        <div className="font-bold text-xl mb-2">{props.title}</div>
        <p className="text-gray-700 text-base">{props.designation}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
