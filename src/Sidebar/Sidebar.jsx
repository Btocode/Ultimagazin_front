import { menuItem } from "../data/data";
import MenuItem from "../pages/MenuItem";
import { FiLogOut } from "react-icons/fi";
import Logo from "../assets/images/logo1.png";
import { Link } from "react-router-dom";

const Sidebar = ({  isToggleCollapse, isOpenNavbar, width }) => {


  return (
    <div
      className={`bg-primary h-[95vh] p-2  flex justify-between flex-col rounded-2xl `}
      style={{
        width: isToggleCollapse ? "8vh" : "28vh",
        transition: " width 450ms cubic-bezier(0.2, 0, 0, 0.2) 0ms",
      }}
    >
      {/* Nav list */}
      <div className="flex flex-col">
        <Link
          to={"/"}
          className={` w-full sm:w-[40px] mx-auto h-[50px] mt-4 flex items-center cursor-pointer  overflow-hidden gap-2 `}
        >
          {/* <img
            src={Logo}
            className="w-[50px] h-[50px] sm:w-[40px] sm:h-[40px] object-cover object-center"
          /> */}
          <p
            className={`${
              isToggleCollapse ? " opacity-0 hidden" : "opacity-100"
            } capitalize text-lg  text-white font-bold md:hidden sm:hidden ml-8`}
          >
          Ultimagazin
          </p>
        </Link>

        <div className="flex flex-col space-y-3  mt-10">
          {menuItem.map((item) => (
            <MenuItem
              isToggleCollapse={isToggleCollapse}
              key={item.id}
              title={item.title}
              icon={item.icon}
              route={item.route}
            />
          ))}
        </div>

      </div>
      {/* Sign out button */}
      <div
    className={` w-full sm:w-[40px] mx-auto h-[50px] flex items-center cursor-pointer rounded text-white hover:bg-white hover:text-black overflow-hidden gap-4 `}
    >
        <span className={`w-[50px] ${isToggleCollapse ? ' mx-auto' : ''}  h-full text-2xl flex items-center justify-center`}>
          <FiLogOut />
        </span>
        <span className={`${isToggleCollapse ? 'opacity-0 hidden': 'opacity-100'} text-md font-medium capitalize md:hidden sm:hidden`}>Logout</span>
      </div>

    </div>
  );
};

export default Sidebar;
