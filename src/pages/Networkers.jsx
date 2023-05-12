import React from 'react'
import TableHead from "../UI/TableHead"
import TableData from "../UI/TableData"
import { getAllWorkers, removeNetworker } from "../api/apis";
import { useState } from "react";
import { useEffect } from "react";

const Networkers = () => {
    const [networkers, setnetworkers] = useState([]);

    useEffect(() => {
        getAllWorkers().then((data) => {
            setnetworkers(data);
        });
    }, []);

    const handleRemove = (id) => {
        // Show a confirmation message before deleting a networker
        const confirm = window.confirm("Are you sure you want to delete this networker?");
        if (confirm) {
            removeNetworker(id).then((data) => {
                if (data === "204") {
                    getAllWorkers().then((data) => {
                        setnetworkers(data);
                    });
                }
            });
        }
    };

  return (
    <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none w-full flex items-center justify-center">
        <section className="w-[95%] h-[80vh]">
        
    
        <div className="    flex items-center justify-between p-4 xl:space-y-0 space-y-4">
              <h1 className=" capitalize font-bold"> All Networkers </h1>
              <div className=" w-[300px] border py-2 px-4 border-gray-500 rounded-lg">
                <input
                  className="outline-none border-none w-full"
                  type="text"
                  placeholder="Search by ID"
                //   onChange={({ target }) => setInputValue(target.value)}
                />
              </div>
              <select
                // value={category}
                // onChange={(e) => setcategory(e.target.value)}
                className="w-[200px] outline-none bg-transparent p-2 border rounded-lg shadow-sm capitalize"
              >
                {/* {TripStatusoptions?.map((item) => ( */}
                  <option
                    // key={item.label}
                    // value={item.value}
                    className="border-none capitalize"
                  >Select Items
    
                    {/* {item.label} */}
                  </option>
                {/* ))} */}
              </select>
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
          {networkers?.results?.slice(0, 10).map((item) => (
            <tr
              key={item?.id}
              className="hover:bg-gray-200 border-b text-sm capitalize"
            >
              <TableData className="text-left px-2 py-3 ">{item?.full_name}</TableData>
              <TableData className="text-left px-2 py-3 lowercase">{item?.email}</TableData>
              <TableData className="text-left px-2 py-3">{item?.is_active === true ? "Active" : "Inactive"}</TableData>
              <TableData className="text-left px-2 py-3 ">{item?.date_joined.split("T")[0]}</TableData>
              <TableData className="text-left px-2 py-3 ">
                <button onClick={()=> handleRemove(item?.id)}
                >Delete</button>
              </TableData>
            </tr>
          ))} 
          {networkers?.results?.length === 0 && (
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
            //   disabled={categoryTripsQuery?.data?.data?.previous === null && true}
                // onClick={() =>
                //   setPaginationUrl(
                //     "?" + categoryTripsQuery?.data?.data?.previous?.split("?")[1]
                //   )
                // }
                className=" outline-none border border-gray-600 rounded-lg py-1 px-4 "
              >
                Prev
              </button>
              <button
                // disabled={categoryTripsQuery?.data?.data?.next === null && true}
                // onClick={() =>
                //   setPaginationUrl(
                //     "?" + categoryTripsQuery?.data?.data?.next?.split("?")[1]
                //   )
                // }
                className={`outline-none border border-gray-600 rounded-lg py-1 px-4`}
              >
                Next
              </button>
            </div>
        </section>
        </main>
  )
}

export default Networkers