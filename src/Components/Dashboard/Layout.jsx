import { Outlet } from "react-router-dom";
import Aside from "./Aside";

const Layout = () => {
  return (
    <div className="bg-[#d8f3e3] w-full min-h-screen flex items-center justify-center overflow-y-auto md:overflow-none">
      <div className="flex flex-col md:flex-row items-start justify-start text-center gap-4 md:gap-10 bg-white w-[98%] md:w-[70%] p-[15px] rounded-[20px] overflow-y-auto relative">
        <Aside />
        <div className="w-full mt-24 md:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;