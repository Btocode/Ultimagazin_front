// import { dashboardHeading } from "@/data/data";
// import AttendenceList from "@/subpages/AttendenceList";
// import AllDepartment from "./Department/AllDepartment";
import React, { useEffect, useState } from "react";
import ReflinkInfoModal from "../Shared/ReflinkInfoModal";
import TableData from "../UI/TableData";
import TableHead from "../UI/TableHead";
import { getLeads, getreflinks } from "../api/apis";

const Dashboard = () => {
  const [reflinks, setreflinks] = useState([]);
  const [leads, setleads] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [modalInfo, setModalInfo] = useState({});

  useEffect(() => {
    getreflinks().then((data) => {
      setreflinks(data);
    });
    getLeads().then((data) => {
      setleads(data);
    });
  }, []);

  const showModalHandler = (item) => {
    setModalInfo(item);
    setShowModal(true);
  };

  return (
    <main className="flex xl:flex-col md:flex-col lg:flex-col sm:flex-col ">
      {/*  Dashboard Heading section  */}

      {/* Reflinks Section */}
      <section className="w-full 2xl:w-1/2 h-[60vh] p-4 m-4 overflow-auto">
        <h1 className="text-lg font-bold">Active Reflinks</h1>
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
            {reflinks?.results?.slice(0, 6).map((item, index) => (
              <tr
                key={item.id}
                className="hover:bg-gray-200 border-b text-sm capitalize">
                <TableData className="text-left px-2 py-3 ">
                  {item?.id}
                </TableData>
                <TableData className="text-left px-2 py-3 lowercase">
                  {item.url}
                </TableData>
                <TableData className="text-left px-2 py-3 ">
                  {item.leads}
                </TableData>
                <TableData className="text-left px-2 py-3 ">
                  {item.created_at.split("T")[0]}
                </TableData>
                <TableData className="text-left px-2 py-3">
                  <button onClick={() => showModalHandler(item)}>View</button>
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
      </section>
      {/* Leads Section */}
      <section className="w-full 2xl:w-1/2 h-[60vh] p-4 m-4 overflow-x-auto">
        {/* Table title  */}
        <h1 className="text-lg font-bold">Recent Leads</h1>
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
            {leads?.results?.slice(0, 6).map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-200 border-b text-sm capitalize">
                <TableData className="text-left px-2 py-3 ">
                  {item.id}
                </TableData>
                <TableData className="text-left px-2 py-3 ">
                  {item.name}
                </TableData>
                <TableData className="text-left px-2 py-3 lowercase">
                  {item.email}
                </TableData>
                <TableData className="text-left px-2 py-3 ">
                  {item.reflink}
                </TableData>
                <TableData className="text-left px-2 py-3 ">
                  {item.created_at.split("T")[0]}
                </TableData>
                <TableData className="text-left px-2 py-3 ">
                  <button>Delete</button>
                </TableData>
              </tr>
            ))}
            {leads?.results?.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No Data Found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </section>
      {showModal && (
        <ReflinkInfoModal
          setShowModal={setShowModal}
          modalInfo={modalInfo}
        />
      )}
    </main>
  );
};

export default Dashboard;
