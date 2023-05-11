import React from 'react'
import { useState } from "react";
import { addReflink } from "../api/apis";

const CreateReflinkModal = ({setCreateModal, 
}) => {
  const [refLink, setRefLink] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const handleRefLinkChange = (event) => {
    setRefLink(event.target.value);
  };


  const handleAddRefLinkClick = () => {
    if (!refLink) {
      setError("Please enter a referral link.");
      return;
    }
    const networker = localStorage.getItem("id");
    addReflink(refLink, networker).then((data) => {
      if (data.error) {
        setError(data.error);
        setErrorMessage(data.message);
      } else {
        setCreateModal(false);
      }
    });

    

  };
  return (
    <>
    <div
      className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none 
      transition-opacity"
    >
    <div className="">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        <span className="hidden sm:inline-block sm:align-middle sm:h-screen"></span>
        &#8203;

        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 sm:mx-0 sm:h-10 sm:w-10">
                {/* TODO: Add icon here */}
              </div>
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Add Referral Link
                </h3>
                <div className="mt-2">
                  <p className="text-sm leading-5 text-gray-500">
                    Enter your referral link below:
                  </p>
                  <div className="mt-2">
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      type="text"
                      value={refLink}
                      onChange={handleRefLinkChange}
                      placeholder="https://example.com/referral-link"
                    />
                  </div>
                  {errorMessage && (
                    <p className="mt-2 text-xs text-red-500">{errorMessage}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                type="button"
                onClick={handleAddRefLinkClick}
                className="inline-flex justify-center w-full rounded-md border border-transparent px-4 py-2 bg-blue-600 text-base leading-6 font-medium text-white shadow-sm hover:bg-blue-500 focus:outline-none focus          :shadow-outline-blue active:bg-blue-600 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Add Referral Link
          </button>
        </span>
        <span className="mt-3 flex w-full rounded-md shadow-sm sm:mt-0 sm:w-auto">
          <button
            type="button"
            onClick={()=> setCreateModal(false)}
            className="inline-flex justify-center w-full rounded-md border border-gray-300 px-4 py-2 bg-white text-base leading-6 font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
          >
            Cancel
          </button>
        </span>
      </div>
    </div>
  </div>
    </div>
  </>
  )
}

export default CreateReflinkModal