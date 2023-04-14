import Search from "../utils/Search";
import { IoMdNotifications } from "react-icons/io";
import { useLocation } from "react-router-dom";
import {  FaSearch, FaBars } from "react-icons/fa";
import {RxDoubleArrowLeft, RxDoubleArrowRight} from 'react-icons/rx';


const BaseHeader = ({ width, isSearch, setIsSearch, setIsOpenNavbar , setIsToggleCollapse,
  isToggleCollapse}) => {
  const location = useLocation();


  
  return (
    <div className={` w-full bg-[#111A3A] rounded`}>
      <div className="flex items-center justify-between py-2 shadow md:hidden sm:hidden">

      {/* Toggle button */}
      <button onClick={() => setIsToggleCollapse(prev => !prev)} className={`text-gray-300 outline-none border-none mx-2 ${isToggleCollapse ? 'rotate-180' : 'rotate-0'} duration-500`}>
        <RxDoubleArrowLeft className={`text-3xl `}/>
      </button>

        {/* Heading */}
        <h1 className="text-lg px-4 capitalize font-bold text-gray-300">
          {location.pathname === "/"
            ? "dashboard"
            : location.pathname.replace("/", "")}
        </h1>

        <div className="flex items-center gap-x-10">
          {/* search component */}
          <Search />

          {/* Notification Icon */}
          <div className="notificationIcon flex mt-1">
            <IoMdNotifications className=" w-[40px] h-[40px] p-0.5 text-gray-300" />
          </div>

          {/* Admin Profile */}
          <div className="flex items-center gap-x-4 px-2 text-gray-300">
            <p>Mr. Admin</p>
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              className=" w-[50px] h-[50px] p-1 border-2 border-white rounded-full"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center gap-x-2 p-2 xl:hidden lg:hidden">

      {/* <FaBars
      onClick={() => setIsOpenNavbar(prev =>!prev)}
      className='text-xl hover:text-primary'
       /> */}

        {/* Notification Icon */}
        <IoMdNotifications className="text-3xl cursor-pointer hover:text-white duration-300" />

        {/* search component */}
        <FaSearch
          onClick={() => setIsSearch(!isSearch)}
          className="text-2xl cursor-pointer hover:text-primary duration-300"
        />

        {/* Admin Profile */}
        <div className="flex items-center gap-x-4 px-2">
          <p>Mr. Admin</p>
          <img
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            className=" w-[40px] h-[40px] p-1 border-2 border-primary rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default BaseHeader;
