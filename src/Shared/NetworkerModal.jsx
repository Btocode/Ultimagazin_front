import { Button } from "@mui/material";
import React from 'react'
import { removeNetworker, getAllWorkers, activateNetworker } from "../api/apis";


const NetworkerModal = ({info, setShowModal, setnetworkers, category, paginationUrl, setLoading}) => {
  const [modalLoader, setModalLoader] = React.useState(false);
  const [deleteLoader, setDeleteLoader] = React.useState(false);

    const activateNetworkerHandler = () => {
        // Show a confirmation message before deleting a networker
        const confirm = window.confirm("Are you sure you want to activate this networker?");
        if (confirm) {
            activateNetworker(info?.id, setModalLoader).then((data) => {
              setShowModal(false);
                if (data === "200") {
                    getAllWorkers(category, paginationUrl, setLoading).then((data) => {
                        setnetworkers(data);
                    });
                }

            });
        }
    };



    const handleRemove = () => {
        // Show a confirmation message before deleting a networker
        const confirm = window.confirm("Are you sure you want to delete this networker?");
        if (confirm) {
            removeNetworker(info?.id, setDeleteLoader).then((data) => {
              setShowModal(false);
                if (data === "204") {
                  getAllWorkers(category, paginationUrl, setLoading).then((data) => {
                    setnetworkers(data);
                });
                }

            });
        }
    };
   
  return (
    <>
      <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
      >
       <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-6">
            {/* Remove button */}
            <button
              className="absolute top-2 right-2 p-1 bg-transparent border-0 text-gray-600 opacity-50 hover:opacity-100 rounded-full outline-none focus:outline-none"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Header */}
            <div className="flex items-start justify-center p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold tracking-wider">NETWORKERS INFO</h3>
            </div>

            {/* Body */}
            <div className="relative p-6 flex-auto">
              <div className="my-2">
                <p className="text-gray-500 text-lg leading-relaxed">ID: {info?.id}</p>
              </div>
              <div className="my-2">
                <p className="text-gray-500 text-lg leading-relaxed">Status: {
                    info?.is_active ? <span className="text-green-500">Active</span> : <span className="text-red-500">Inactive</span> 
                    }</p>
              </div>
              <div className="my-2">
                <p className="text-gray-500 text-lg leading-relaxed">Full Name: {info?.full_name}</p>
              </div>

            </div>

            {/* Footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              { !info?.is_active && 
              <Button
                color="primary"
                variant="contained"
                onClick={() => activateNetworkerHandler()}
              >
                {
                  modalLoader ? "Activating..." : "Activate"
                }
              </Button>
              }
              <span 
              className="mx-2"
              >

              </span>
              <Button
                variant="contained"
                color="error"

                onClick={() => handleRemove()}
              >
                {
                  deleteLoader ? "Removing..." : "Remove"
                }
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default NetworkerModal