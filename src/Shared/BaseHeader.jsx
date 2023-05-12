import Search from "../utils/Search";
import { IoMdNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import { RxDoubleArrowLeft, RxDoubleArrowRight } from "react-icons/rx";

const BaseHeader = ({
  width,
  isSearch,
  setIsSearch,
  setIsOpenNavbar,
  setIsToggleCollapse,
  isToggleCollapse,
}) => {
  const location = useLocation();
  const full_name = localStorage.getItem("full_name");
  return (
    <div className={` w-full bg-[#111A3A] rounded`}>
      <div className="flex items-center justify-between py-2 shadow md:hidden sm:hidden">
        {/* Toggle button */}
        <button
          onClick={() => setIsToggleCollapse((prev) => !prev)}
          className={`text-gray-300 outline-none border-none mx-2 ${
            isToggleCollapse ? "rotate-180" : "rotate-0"
          } duration-500`}>
          <RxDoubleArrowLeft className={`text-3xl `} />
        </button>

        {/* Heading */}
        <h1 className="text-lg px-4 capitalize font-bold text-gray-300">
          {location.pathname === "/"
            ? "dashboard"
            : location.pathname.replace("/", "")}
        </h1>

        <div className="flex items-center gap-x-10">

          {/* Admin Profile */}
          <div className="flex items-center gap-x-4 px-2 text-gray-300">
            <p>{full_name ? full_name : "Admin"}</p>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              className=" w-[50px] h-[50px] p-1 border-2 border-white rounded-full"
            />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default BaseHeader;
