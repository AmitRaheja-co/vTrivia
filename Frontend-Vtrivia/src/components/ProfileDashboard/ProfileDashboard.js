import React from "react";
import ProfileNavbar from "./ProfileNavbar.js";
import ProfileCard from "./ProfileCard.js";
import axios from "axios";

const ProfileDashboard = (props) => {
  return (
    <>
      <div className="bg-blue-300 h-screen w-screen">
        <ProfileNavbar />
        <p className="text-2xl ml-3 my-2">Joined by me</p>
        <div className="flex mt-5">
          <ProfileCard />
        </div>
        <p className="text-2xl ml-3 my-3">Public Groups</p>
        <div className="flex mt-5">
          <ProfileCard />
        </div>
      </div>
    </>
  );
};

export default ProfileDashboard;
