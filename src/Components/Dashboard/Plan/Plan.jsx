// import React, { useContext } from "react";
// import MonthlyPlan from "./MonthlyPlan";
// import YearlyPlan from "./YearlyPlan";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../../Context/UserProvider";

// const Plan = () => {
//   const { selectedPlan, togglePlan } = useContext(UserContext);
//   const navigate = useNavigate();

//   return (
//     <div className="flex flex-col max-w-[65%] items-start text-black mt-7 gap-5">
//       <div className="flex flex-col items-start">
//         <h1 className="font-poppins font-bold text-[40px]">Select your Plan</h1>
//         <p className="text-gray-600 font-serif text-[18px] font-extralight">
//           You have the option of monthly or yearly billing
//         </p>
//       </div>
//       <div className="mt-5">
//         {selectedPlan === "monthly" && <MonthlyPlan />}
//         {selectedPlan === "yearly" && <YearlyPlan />}
//       </div>
//       <div className="flex flex-row items-center justify-center w-full gap-5">
//         <div className="form-control">
//           <label className="flex gap-3 cursor-pointer label">
//             <span className="label-text">Monthly</span>
//             <input
//               type="checkbox"
//               className="toggle"
//               checked={selectedPlan === "yearly"}
//               onChange={togglePlan}
//             />
//             <span className="label-text">Yearly</span>
//           </label>
//         </div>
//       </div>
//       <div className="flex flex-row items-center justify-between w-full text-center mt-[60px]">
//         <Link to="/personalinfo">
//           <h5 className="text-[16px] font-serif font-bold text-blue-600">
//             GO BACK
//           </h5>
//         </Link>
//         <Link to="/addons">
//           <button className="btn btn-primary w-[150px] text-white">
//             Next
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Plan;
import React, { useContext } from "react";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider";

const Plan = () => {
  const { selectedPlan, togglePlan } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col w-full px-4 mx-auto text-black md:px-0 md:max-w-xl">
      <div className="mb-6">
        <h1 className="mb-2 text-2xl font-bold sm:text-3xl md:text-4xl">Select your Plan</h1>
        <p className="text-sm text-gray-600 sm:text-base">
          You have the option of monthly or yearly billing
        </p>
      </div>
      
      <div className="w-full mb-6">
        {selectedPlan === "monthly" && <MonthlyPlan />}
        {selectedPlan === "yearly" && <YearlyPlan />}
      </div>
      
      <div className="flex justify-center w-full mb-8">
        <div className="flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-lg">
          <span className={`font-medium ${selectedPlan === "monthly" ? "text-blue-800" : "text-gray-500"}`}>
            Monthly
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={selectedPlan === "yearly"}
              onChange={togglePlan}
            />
            <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <span className={`font-medium ${selectedPlan === "yearly" ? "text-blue-800" : "text-gray-500"}`}>
            Yearly
          </span>
        </div>
      </div>
      
      <div className="flex items-center justify-between w-full pt-6 mt-6 border-t border-gray-200">
        <Link to="/personalinfo">
          <button className="font-medium text-blue-700 transition-colors hover:text-blue-800">
            Go Back
          </button>
        </Link>
        <Link to="/addons">
          <button className="px-6 py-2 font-medium text-white transition-colors bg-blue-700 rounded-lg shadow-sm hover:bg-blue-800">
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Plan;
