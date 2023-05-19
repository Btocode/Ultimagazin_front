import React from 'react'
import TableHead from "../UI/TableHead";
import TableData from "../UI/TableData";
import { getLeads } from "../api/apis";
import { useState, useEffect } from "react";
import { Button, Skeleton } from "@mui/material";
import LeadDeleteModal from "../Shared/LeadDeleteModal";

const Leads = () => {

	const [leads, setleads] = useState([]);
	const [showModal, setShowModal] = React.useState(false);
  const [paginationUrl, setPaginationUrl] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");

	useEffect(() => {
		getLeads(setLoading, paginationUrl).then((data) => {
			setleads(data);
		});
	}, [paginationUrl]);



    return (
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none w-full flex items-center justify-center">
        {loading ? (
        <section className="w-[95%] h-[80vh]">
        <Skeleton />
        </section>
        )
        :
        (
        <section className="w-[95%] h-[80vh]">
        
    
        <div className="    flex items-center justify-between p-4 xl:space-y-0 space-y-4">
              <h1 className=" capitalize font-bold"> All Leads </h1>
              <div className=" w-[300px] border py-2 px-4 border-gray-500 rounded-lg">
                <input
                  className="outline-none border-none w-full"
                  type="text"
                  placeholder="Search by Email"
                  onChange={({ target }) => setInputValue(target.value)}
                />
              </div>
            </div>
    
    
    
    
			<table className="w-full text-left">
        <thead className="text-xs shadow bg-black text-white">
          <tr>
            <TableHead className={""}>ID</TableHead>
            <TableHead className={""}>Name</TableHead>
            <TableHead className={""}>Email</TableHead>
            <TableHead className={""}>Reflink</TableHead>
            <TableHead className={""}>Date</TableHead>
            <TableHead className={""}>Action</TableHead>
          </tr>
        </thead>
        <tbody>
          {leads?.results?.slice(0, 10).map((item) => (
            <tr
              key={item.id}
              className="hover:bg-gray-200 border-b text-sm capitalize"
            >
              <TableData className="text-left px-2 py-3 ">{item.id}</TableData>
              <TableData className="text-left px-2 py-3 ">{item.name}</TableData>
              <TableData className="text-left px-2 py-3 lowercase">{item.email}</TableData>
              <TableData className="text-left px-2 py-3 ">{item.reflink}</TableData>
              <TableData className="text-left px-2 py-3 ">{item.created_at}</TableData>
              <TableData className="text-left px-2 py-3 ">
                <Button 
                variant="outlined"
                onClick={() => {
                  setShowModal(true);
                  setId(item.id);
                }
                }

                >Delete</Button>
              </TableData>
            </tr>
          ))} 
          {leads?.results?.length === 0 && (
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
              disabled={leads?.previous === null && true}
                onClick={() =>
                  setPaginationUrl(
                    "?" + leads?.previous?.split("?")[1]
                  )
                }
                className=" outline-none border border-gray-600 rounded-lg py-1 px-4 "
              >
                Prev
              </button>
              <button
                disabled={leads?.next === null && true}
                onClick={() =>
                  setPaginationUrl(
                    "?" + leads?.next?.split("?")[1]
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
            <LeadDeleteModal
              setDeleteModal={setShowModal}
              id = {id}
              paginationUrl={paginationUrl}
              setleads={setleads}
              setLoading={setLoading}
              />
            )
        }
        </main>
      );
}

export default Leads