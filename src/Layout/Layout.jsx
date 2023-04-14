import BaseHeader from "../Shared/BaseHeader";
import Sidebar from "../Sidebar/Sidebar";
import Search from "../utils/Search";
import {  useEffect, useState } from "react";

const Layout = ({ width, children }) => {
  const [isSearch, setIsSearch] = useState(false);
  const [isOpenNavbar, setIsOpenNavbar] = useState(false);
  const [isToggleCollapse, setIsToggleCollapse] = useState(false);

    useEffect(() => {
    if (width < 900) {
      setIsToggleCollapse(true);
    }
  }, [width]);


  return (
    <div className="flex justify-between gap-x-6 sm:gap-2 p-6">
      <Sidebar 
      isToggleCollapse={isToggleCollapse} 
      isOpenNavbar={isOpenNavbar} 
      width={width} 
      />

      <div className="bg-secondary flex-1 sm:p-2 h-screen overflow-y-scroll pb-10 md:pb-20 sm:pb-20">
        <BaseHeader 
        setIsToggleCollapse={setIsToggleCollapse} 
        isToggleCollapse={isToggleCollapse}
        setIsOpenNavbar={setIsOpenNavbar}
         isSearch={isSearch}
          setIsSearch={setIsSearch} 
          />
        <Search
    
          className={`${
            !isSearch
              ? " scale-0 duration-500"
              : " scale-100  duration-500 mt-4 border border-white shadow-lg rounded-full bg-white text-black"
          } xl:hidden lg:hidden`}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
