import React, { useState } from "react";
import Modal from "react-modal";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateGroupModal = ({ isOpen, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");
  // console.log("DONE");
  // console.log(jwt);
  const handleCreateGroup =async (e) => {
    let grpId;
      e.preventDefault();

      // Dummy data for post request
      const postData = {
          name: title,
          description: description
      };

      // Dummy Axios post request
      await axios.post('https://localhost:7089/Group', postData,
      {
          headers: {
            "Content-Type": "application/json",
          Authorization: `Bearer ${jwt}`
          },
        }
      
      )
          .then(response => {
              console.log('Post request response:', response.data);
              grpId=response.data.id;
              //console.log(grpId);
              //navigate('/GroupDashboard',)
              // Close the popup
              //onClose();
          })
          .catch(error => {
              console.error('Post request error:', error);
          });

          //console.log("Haaaa"+grpId);
         await  axios
      .post(
        "https://localhost:7089/Group/GetInfo",
        {
          grpId:grpId
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
        navigate('/GroupDashboard', { state: { props: response.data } });
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
              Create Group:
            </h2>
            <form
              onSubmit={handleCreateGroup}
              className="space-y-4 md:space-y-6"
              action="/"
            >
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Title
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={title}
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required=""
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div>
                <label
                  for=""
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder=""
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required=""
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <button
                onClick={handleCreateGroup}
                type="submit"
                className="my-3 text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                Create Group
              </button>
             
            </form>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateGroupModal;
