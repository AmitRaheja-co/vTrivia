import React from "react";
import ProfileNavbar from "./ProfileNavbar.js";
import ProfileCard from "./ProfileCard.js";
import { useLocation } from "react-router-dom";

const ProfileDashboard = () => {
  const location = useLocation();
  const props = location.state?.props;

  const username = props.userName.userName;
  const userId = props.userId;
  const groupsJoined = props.groups_joined;
  const publicGroups = props.public_groups;
 console.log(publicGroups);
  console.log(props);

  return (
    <>
      <div className="bg-blue-300 h-screen w-screen">
        <ProfileNavbar />
        <p className="text-2xl ml-3 my-2">Joined by {username}</p>
        <div className="flex mt-5">
          {groupsJoined.map((group) => {
             return<ProfileCard
              Id={group.id}
              key={group.id} // Make sure to provide a unique key
              Title={group.name}
              Designation={group.adminId === userId ? "Admin" : "Member"}
            />
})}
        </div>
        <p className="text-2xl ml-3 my-3">Public Groups</p>
        <div className="flex mt-5">
          {publicGroups.map((group) => {
            return <ProfileCard
            Id={group.id} // Make sure to provide a unique key
            key={group.id} // Make sure to provide a unique key

            Title={group.name}
            Designation="Not Joined"
            //groupId={group.id} // Pass group id as a prop to ProfileCard
          />

          })}
        </div>
      </div>
    </>
  );
};

export default ProfileDashboard;