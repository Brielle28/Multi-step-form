import React from "react";
import { SidebarItems } from "../Utils/SidebarItems";
import { Link, NavLink } from "react-router-dom";

const Aside = () => {

  const navLinkStyles = ({ isActive }) =>{
    return {
      backgroundColor: isActive? "#6fdf9c" : "transparent",
      borderRadius: isActive? "50px" : "0px",
    };
  }

  return (
    <>
      <div
        className="bg-cover bg-center h-full w-[30%] rounded-[10px] pb-[250px]"
        style={{ backgroundImage: `url('/bg-sidebar-desktop.svg')` }}
      >
        <div className="flex flex-col items-center text-start w-full">
          <ul className="flex flex-col w-full mt-10">
            {SidebarItems.map((item) => (
              <Link to={item.link}>
                <li key={item.id} className="pb-3 pl-10">
                  <div className="flex flex-row items-center gap-5">
                    <NavLink style={navLinkStyles} to={item.link}>
                    <div className="flex items-center justify-center text-center text-white h-10 w-10 rounded-full border-2">
                      {item.id}
                    </div>
                    </NavLink>
                    <div className="flex flex-col items-start text-white">
                      <h6 className="font-serif font-extralight text-[13px]">
                        STEP {item.id}
                      </h6>
                      <Link to={item.link} className="font-poppins font-bold">
                        {item.title}
                      </Link>
                    </div>
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Aside;
