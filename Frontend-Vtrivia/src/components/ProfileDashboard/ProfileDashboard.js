import React,{useEffect,useState,useRef} from "react";
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
  const [parentHeight, setParentHeight] = useState('100%');
  const childRef = useRef(null);
 
  useEffect(() => {
    const childHeight = childRef.current.clientHeight;
    const windowHeight = window.innerHeight;
 
    if (childHeight < windowHeight) {
      setParentHeight('100vh'); // Child is smaller, set parent height to viewport height
    } else {
      setParentHeight('100%'); // Child is larger, set parent height to 100% of its container
    }
  }, []);
  return (
    <>
      <div className="bg-blue-300 w-screen" style={{
        height: parentHeight
      }}>
        <ProfileNavbar
        Id={userId}
         />
         <div ref={childRef}>
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
        <div className="flex flex-wrap mt-5">
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
      </div>
    </>
  );
};

export default ProfileDashboard;