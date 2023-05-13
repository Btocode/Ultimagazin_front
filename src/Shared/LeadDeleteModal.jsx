import React from "react";
import { deleteLead } from "../api/apis";

const LeadDeleteModal = ({ setDeleteModal, id }) => {
  const handleConfirm = () => {
    deleteLead(id).then((data) => {
      console.log(data);
      setDeleteModal(false);
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-6 ">
            {/* Remove button */}
            <button
              className="absolute top-2 right-2 p-1 bg-transparent border-0 text-gray-600 opacity-50 hover:opacity-100 rounded-full outline-none focus:outline-none"
              onClick={() => setDeleteModal(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4">
                <p className="text-lg font-medium">Are you sure?</p>
              </div>
              <div className="flex justify-end p-4">
                <button
                  className="mr-2"
                  onClick={() => setDeleteModal(false)}>
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleConfirm}>
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default LeadDeleteModal;
