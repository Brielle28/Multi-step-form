import { SidebarItems } from "../Utils/SidebarItems";
import { Link, NavLink } from "react-router-dom";

const Aside = () => {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? "#6fdf9c" : "transparent",
    borderRadius: isActive ? "50px" : "0px",
  });

  return (
    <div
      className="bg-cover bg-center w-full md:w-[45%] h-auto md:h-[510px] md:rounded-[10px] fixed top-0 left-0 right-0 z-10 rounded-b-[20px]"
      style={{ backgroundImage: `url('/bg-sidebar-desktop.svg')` }}
    >
      <div className="flex flex-col items-center w-full p-4 text-start">
        <ul className="flex flex-row items-start justify-center w-full gap-4 mt-4 md:flex-col md:items-start md:justify-start md:gap-6 md:mt-10">
          {SidebarItems.map((item) => (
            <li key={item.id} className="">
              <Link to={item.link}>
                <div className="flex flex-col items-center justify- md:flex-row md:gap-5">
                  <NavLink style={navLinkStyles} to={item.link}>
                    <div className="flex items-center justify-center w-10 h-10 text-center text-white border-2 rounded-full">
                      {item.id}
                    </div>
                  </NavLink>
                  <div className="flex flex-col items-start text-center text-white md:flex justfiy-center">
                    <h6 className="hidden md:flex text-[13px] font-serif font-extralight">
                      STEP {item.id}
                    </h6>
                    <span className="text-[10px] mt-3 md:mt-0 md:text-[15px] md:font-bold font-poppins">
                      {item.title}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Aside;
