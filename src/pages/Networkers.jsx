import React from 'react'
import TableHead from "../UI/TableHead"
import TableData from "../UI/TableData"
import { getAllWorkers, removeNetworker } from "../api/apis";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Skeleton } from "@mui/material";
import NetworkerModal from "../Shared/NetworkerModal";
import { useQuery } from "@tanstack/react-query";

const Networkers = () => {
    const [networkers, setnetworkers] = useState([]);
    const [showModal, setShowModal] = React.useState(false);
    const [error, setError] = useState("");
    const [selectedNetworker, setSelectedNetworker] = useState({});
    const [loading, setLoading] = useState(false);
    const [paginationUrl, setPaginationUrl] = useState("");
    const [category, setcategory] = useState("all");
    const [inputValue, setInputValue] = useState("");


    const getAllWorkersQuery = useQuery({
      queryKey: ["getAllWorkers", category, paginationUrl],
      queryFn: () => getAllWorkers(category, paginationUrl, setLoading),
      refetchOnWindowFocus: false,
      retry: 1,
    })
    const networkerHandler = (item) => {
      setSelectedNetworker(item);
      setShowModal(true);
  };



  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none w-full flex items-center justify-center">
        {getAllWorkersQuery?.isLoading ? (
        <section className="w-[95%] h-[80vh]">
        <Skeleton />
        </section>
        )
        :
        (
        
        <section className="w-[95%] h-[80vh]">
        
    
        <div className="flex items-center justify-between p-4 xl:space-y-0 space-y-4 sm:flex-col md:flex-col">
              <h1 className=" capitalize font-bold"> All Networkers </h1>
              <div className=" w-[300px] border py-2 px-4 border-gray-500 rounded-lg">
                <input
                  className="outline-none border-none w-full"
                  type="text"
                  placeholder="Search by email"
                  onChange={({ target }) => setInputValue(target.value)}
                />
              </div>
            </div>
    
    
    
    
			<table className="w-full text-left">
        <thead className="text-xs shadow bg-black text-white">
          <tr>
            <TableHead className={""}>Name</TableHead>
            <TableHead className={""}>Email</TableHead>
            <TableHead className={""}>Is Active</TableHead>
            <TableHead className={""}>Date Joined</TableHead>
            <TableHead className={""}>Action</TableHead>
          </tr>
        </thead>
        
        <tbody>
          {getAllWorkersQuery?.data?.results?.slice(0, 10).map((item) => (
            <tr
              key={item?.id}
              className="hover:bg-gray-200 border-b text-sm capitalize"
            >
              <TableData className="text-left px-2 py-3 ">{item?.full_name}</TableData>
              <TableData className="text-left px-2 py-3 lowercase">{item?.email}</TableData>
              <TableData className="text-left px-2 py-3">{item?.is_active === true ? "Active" : "Inactive"}</TableData>
              <TableData className="text-left px-2 py-3 ">{item?.date_joined.split("T")[0]}</TableData>
              <TableData className="text-left ">
                <Button
                    variant="outlined"
                  onClick={() => networkerHandler(item)}
                  >
                    Action
                  </Button>
              </TableData>
            </tr>
          ))} 
          {getAllWorkersQuery?.data?.results?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-left py-4 ">
                  No Data Found
                </td>
              </tr>
            )}
        </tbody>
      </table>
          <div className="flex justify-center items-center gap-x-4 mt-4">
              <button
              disabled={getAllWorkersQuery?.data?.previous === null && true}
                onClick={() =>
                  setPaginationUrl(
                    "?" + getAllWorkersQuery?.data?.previous?.split("?")[1]
                  )
                }
                className=" outline-none border border-gray-600 rounded-lg py-1 px-4 "
              >
                Prev
              </button>
              <button
                disabled={getAllWorkersQuery?.data?.next === null && true}
                onClick={() =>
                  setPaginationUrl(
                    "?" + getAllWorkersQuery?.data?.next?.split("?")[1]
                  )
                }
                className={`outline-none border border-gray-600 rounded-lg py-1 px-4`}
              >
                Next
              </button>
            </div>
        </section>
        )
        }

        {
            showModal && (
              <NetworkerModal info = {selectedNetworker} setShowModal = {setShowModal}  />
            )
        }
        </main>
  )
}

export default Networkers