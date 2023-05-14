import TableHead from "../UI/TableHead";
import TableData from "../UI/TableData";
import { useState, useEffect } from "react";
import AxiosApi from "../api/AxiosApi";
import { getreflinks } from "../api/apis";
import React from "react";
import CreateReflinkModal from "../Shared/CreateReflinkModal";
import ReflinkInfoModal from "../Shared/ReflinkInfoModal";
import { Button, Skeleton } from "@mui/material";

const Reflinks = () => {

    const [reflinks, setreflinks] = useState([]);

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [category, setcategory] = useState("");
    const [showCreateModal, setCreateModal] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);
    const [modalInfo, setModalInfo] = useState({});
    const [paginationUrl ,setPaginationUrl] = useState("");


    useEffect(() => {
      getreflinks(setLoading, paginationUrl).then((data) => {
        setreflinks(data);
      });
    }, [paginationUrl]);
    const showModalHandler = (item) => {
      setModalInfo(item);
      setShowModal(true);
    };
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
          <h1 className=" capitalize font-bold"> All Reflinks </h1>
          <div className=" w-[300px] border py-2 px-4 border-gray-500 rounded-lg">
            <input
              className="outline-none border-none w-full"
              type="text"
              placeholder="Search by ID"
              onChange={({ target }) => setInputValue(target.value)}
            />
          </div>
          <div className="create-reflink">
            <button
              onClick={() => setCreateModal(true)}
              className="bg-black text-white px-4 py-2 rounded-lg"
            >
              Create Reflink
            </button>
          </div>
        </div>





        <table className="w-full text-left">
        <thead className="text-xs shadow bg-black text-white">
          <tr>
            <TableHead className={""}>ID</TableHead>
            <TableHead className={""}>Link</TableHead>
            <TableHead className={""}>Leads</TableHead>
            <TableHead className={""}>Created At</TableHead>
            <TableHead className={""}>Action</TableHead>
          </tr>
        </thead>
        <tbody>
          {reflinks?.results?.slice(0, 10).map((item, index) => (
            <tr
              key={item.id}
              className="hover:bg-gray-200 border-b text-sm capitalize"
            >
              <TableData className="text-left px-2 py-3 ">{item?.id}</TableData>
              <TableData className="text-left px-2 py-3 lowercase">{item.url}</TableData>
              <TableData className="text-left px-2 py-3 ">{item.leads}</TableData>
              <TableData className="text-left px-2 py-3 ">{item.created_at.split("T")[0]}</TableData>
              <TableData className="text-left px-2 py-3">
              <Button
                  variant="outlined"
               onClick={() => showModalHandler(item)}>View</Button>
              </TableData>
            </tr>
           
          ))}
          {reflinks?.results?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No Data Found
                </td>
              </tr>
            )}
        </tbody>
      </table>
      <div className="flex justify-center items-center gap-x-4 mt-4">
          <button
          disabled={reflinks?.previous === null && true}
            onClick={() =>
              setPaginationUrl(
                "?" + reflinks?.previous?.split("?")[1]
              )
            }
            className=" outline-none border border-gray-600 rounded-lg py-1 px-4 "
          >
            Prev
          </button>
          <button
            disabled={reflinks?.next === null && true}
            onClick={() =>
              setPaginationUrl(
                "?" + reflinks?.next?.split("?")[1]
              )
            }
            className={`outline-none border border-gray-600 rounded-lg py-1 px-4`}
          >
            Next
          </button>
        </div>

    </section>
        )}

      {showCreateModal && <CreateReflinkModal setCreateModal={setCreateModal} />}
      {showModal && (
        <ReflinkInfoModal
          setShowModal={setShowModal}
          modalInfo={modalInfo}
        />
      )}
      {/* {
        loading && (
          <Skeleton variant="rectangular" width="100%" height="100%" />
        )
      } */}
    </main>
  );
};

export default Reflinks;
