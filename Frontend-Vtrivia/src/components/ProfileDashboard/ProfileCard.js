import React, { useState } from "react";
import groupIcon from "../../assets/QuizLogo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProfileCard = ({ Id, key, Title, Designation }) => {
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  //console.log(Id);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (Designation.trim() === "Not Joined") {
      if (window.confirm("Do you want to join this group?")) {
        // User clicked OK, handle join logic
        console.log("Joining group...");
        axios
        .post(
          "https://localhost:7089/Group/Join",
          {
            grpId: Id
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
        .then(async (response) => {
          console.log(response.data);
          console.log("hii there fro join call in profile card")
          await axios
          .post(
            "https://localhost:7089/Group/GetInfo",
            {
              grpId: Id
            },
            {
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
              },
            }
          )
          .then((response) => {
            console.log(response.data);
            navigate("/GroupDashboard", { state: { props: response.data } });
          })
          .catch((error) => {
            console.log(error);
          });
          //navigate("/GroupDashboard", { state: { props: response.data } });
        })
        .catch((error) => {
          console.log(error);
        });

        // Implement your join group logic here
      } else {
        // User clicked Cancel, do nothing
        console.log("Cancelled joining group.");
      }
    } else {
      // Handle navigation to group dashboard for joined groups
      axios
        .post(
          "https://localhost:7089/Group/GetInfo",
          {
            grpId: Id
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
          }
        )
        .then((response) => {
          console.log(response.data);
          //navigate("/GroupDashboard", { state: { props: response.data } });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div className="mt-5 ml-3 max-w-60 max-h-96 rounded-3xl overflow-hidden shadow-md">
      <img
        src={groupIcon}
        alt="group-icon"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        onClick={handleSubmit}
      />
      <div className="bg-white px-6 py-4">
        <div className="font-bold text-xl mb-2">{Title}</div>
        <p className="text-gray-700 text-base">{Designation}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
