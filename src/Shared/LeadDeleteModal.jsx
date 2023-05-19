import React from "react";
import { deleteLead, getLeads } from "../api/apis";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { CircularProgress } from "@mui/material";

const LeadDeleteModal = ({ setDeleteModal, id, paginationUrl,
  setleads,
  setLoading }) => {
  const queryClient = useQueryClient();


  const deleteLeadQuery = useMutation( (id) => {
      const response =  deleteLead(id);
      return response;
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("leads");
        setDeleteModal(false);
        getLeads(setLoading, paginationUrl).then((data) => {
          setleads(data);
          alert("Lead deleted successfully");
        }
        
        );
      },
      onError: (error) => {
        setDeleteModal(false);
        toast.error("Something went wrong")
      }
    }
  );





  const handleConfirm = () => {
    deleteLeadQuery.mutate(id)
  };



  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-6 py-4">
            {/* Remove button */}
            <button
              className="absolute top-2 right-2 p-1 bg-transparent border-0 text-gray-600 opacity-50 hover:opacity-100 rounded-full outline-none focus:outline-none"
              onClick={() => setDeleteModal(false)}
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
              <h3 className="text-xl font-semibold tracking-wider">DELETE LEAD</h3>
            </div>
            <hr />

            <div className="bg-white rounded-lg overflow-hidden">
              <div className="p-4">
                     <p className="text-center"> Are You Sure you want to delete this lead ? </p>
              </div>
              <hr />
              <div className="flex justify-end p-4">
                <button
                  className="mr-2"
                  onClick={() => setDeleteModal(false)}>
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                  onClick={handleConfirm}>
                  {
                    deleteLeadQuery.isLoading ? "Deleting..." : "Confirm"
                  }
                  
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
