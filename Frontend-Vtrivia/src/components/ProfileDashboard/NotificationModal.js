import React, { useState,useEffect } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NotificationModal = ({ Id,isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  // console.log("DONE");
  // console.log(jwt);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7089/api/Invite',{
          params:{
            id:Id
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    if (isOpen) {
      fetchData();
    }
  }, [isOpen]);
  console.log(data);
  const handleCreateGroup =async (groupId,id,e) => {
    // let grpId;
      e.preventDefault();

    //   // Dummy data for post request
    //   const postData = {
    //       name: title,
    //       description: description
    //   };
     axios
        .post(
          "https://localhost:7089/Group/Join",
          {
            grpId: groupId
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${jwt}`,
            },
          }
        ).then(async (response) => {
          console.log(response.data);
          console.log("hii there fro join call in profile card")
          await axios
          .post(
            "https://localhost:7089/Group/GetInfo",
            {
              grpId: groupId
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
            await axios
          .delete(
            "https://localhost:7089/api/Invite",
            
            {
              params:{
                id:id
              },
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${jwt}`,
              },
            }
          )
          .then(async (response) => {
            console.log(response.data);
            
            //navigate("/GroupDashboard", { state: { props: response.data } });
          })
          .catch((error) => {
            console.log(error);
          });
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

    //   // Dummy Axios post request
    //   await axios.post('https://localhost:7089/Group', postData,
    //   {
    //       headers: {
    //         "Content-Type": "application/json",
    //       Authorization: `Bearer ${jwt}`
    //       },
    //     }
      
    //   )
    //       .then(response => {
    //           console.log('Post request response:', response.data);
    //           grpId=response.data.id;
    //           //console.log(grpId);
    //           //navigate('/GroupDashboard',)
    //           // Close the popup
    //           //onClose();
    //       })
    //       .catch(error => {
    //           console.error('Post request error:', error);
    //       });

    //       //console.log("Haaaa"+grpId);
    //      await  axios
    //   .post(
    //     "https://localhost:7089/Group/GetInfo",
    //     {
    //       grpId:grpId
    //     },
        
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `Bearer ${jwt}`,
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //     navigate('/GroupDashboard', { state: { props: response.data } });
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const handleDeleteInvite = (groupId, id,e) => {
     e.preventDefault();
    axios
      .delete("https://localhost:7089/api/Invite", {
        params: {
          id: id,
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        // After successful deletion, close the modal
        onClose();
      })
      .then(() => {
        // Navigate to the desired route
       // navigate("/GroupDashboard");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="modal">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-sky-500 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Invitation
            </h2>
            {data?(
              <div>
              {data.invite.map((item, index) => (
              <div key={index}>
                <h1>You have got an invitation for the group {item.groupId} </h1>
                <form
              onSubmit={(e) => handleCreateGroup(item.groupId,item.id,e)}
              className="space-y-4 md:space-y-6"
              action="/"
            >          
              <button
                onClick={(e) => handleCreateGroup(item.groupId,item.id,e)}
                type="submit"
                className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Join
              </button>
              <button
                onClick={(e) => handleDeleteInvite(item.groupId,item.id,e)}
                // type="submit"
                className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Reject
              </button>
             
            </form>
              </div>
            ))}
              </div>
            ):(<h1>No Invitation</h1>)}
           
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationModal;
