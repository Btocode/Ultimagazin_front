import { Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import { getLeadsByReflink, getreflinks, removeRefLink } from "../api/apis";

const ReflinkInfoModal = ({
  setShowModal,
  modalInfo,
  paginationUrl,
  setreflinks,
  setLoading,
}) => {
  const [loading1, setLoading1] = React.useState(false);
  const [removeLoading, setRemoveLoading] = React.useState(false);
  const [leads, setleads] = React.useState([]);
  useEffect(() => {
    getLeadsByReflink(modalInfo.id, setLoading1).then((data) => {
      setleads(data);
    });
  }, []);

  const handleDelete = () => {
    removeRefLink(modalInfo.id, setRemoveLoading).then(() => {
      setShowModal(false);
      getreflinks(paginationUrl, setLoading).then((data) => {
        setreflinks(data);
      });
    });
  };
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="fixed inset-0 transition-opacity">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-md shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none px-6">
            {/* Remove button */}
            <button
              className="absolute top-2 right-2 p-1 bg-transparent border-0 text-gray-600 opacity-50 hover:opacity-100 rounded-full outline-none focus:outline-none"
              onClick={() => setShowModal(false)}>
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

            {/* Header */}
            <div className="flex items-start justify-center p-5 border-b border-solid border-gray-300 rounded-t">
              <h3 className="text-xl font-semibold tracking-wider">
                REFLINK INFO
              </h3>
            </div>

            {/* Body */}
            <div className="relative p-6 flex-auto">
              <div className="my-2">
                <p className="text-gray-500 text-lg leading-relaxed">
                  ID: {modalInfo?.id}
                </p>
              </div>
              <div className="my-2">
                <p className="text-gray-500 text-lg leading-relaxed">
                  Reflink: {modalInfo?.url}
                </p>
              </div>
              <div className="my-2">
                <p className="text-gray-500 text-lg leading-relaxed">
                  Networker: {modalInfo?.networker_name}
                </p>
              </div>

              <div className="my-2">
                <p className="text-gray-500 text-lg leading-relaxed">
                  Total Leads: {modalInfo?.leads}
                </p>
                <hr />
                {loading1 ? (
                  <Skeleton />
                ) : (
                  <ul className="list-disc list-inside max-h-[100px] overflow-auto">
                    {leads &&
                      leads?.results?.map((lead) => (
                        <li
                          key={lead.id}
                          className="text-gray-500 text-lg">
                          {lead.email} (created at{" "}
                          {lead.created_at.substring(0, 10)})
                        </li>
                      ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
              <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}>
                Close
              </button>
              <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={handleDelete}>
                {removeLoading ? "Deleting..." : "Delete"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReflinkInfoModal;
