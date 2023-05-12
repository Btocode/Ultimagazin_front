import { Link, useLocation } from "react-router-dom";

const MenuItem = ({ title, icon, route, isToggleCollapse }) => {
  const location = useLocation();

  return (
    <Link
      to={route}
      className={`w-full sm:w-[40px] mx-auto h-[40px] flex items-center cursor-pointer rounded hover:bg-white hover:text-black overflow-hidden gap-4 ${
        location.pathname === route
          ? "bg-white text-black"
          : "bg-transparent text-white"
      }`}>
      <span
        className={`w-[50px] ${
          isToggleCollapse ? " mx-auto" : ""
        }  h-full text-2xl flex items-center justify-center`}>
        {icon}
      </span>
      <span
        className={`${
          isToggleCollapse ? "opacity-0 hidden" : "opacity-100"
        } text-md font-medium capitalize md:hidden sm:hidden`}>
        {title}
      </span>
    </Link>
  );
};

export default MenuItem;
