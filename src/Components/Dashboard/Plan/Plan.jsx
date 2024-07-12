import React, { useContext } from "react";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider";

const Plan = () => {
  const { selectedPlan, togglePlan } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col max-w-[65%] items-start text-black mt-7 gap-5">
      <div className="flex flex-col items-start">
        <h1 className="font-poppins font-bold text-[40px]">Select your Plan</h1>
        <p className="text-gray-600 font-serif text-[18px] font-extralight">
          You have the option of monthly or yearly billing
        </p>
      </div>
      <div className="mt-5">
        {selectedPlan === "monthly" && <MonthlyPlan />}
        {selectedPlan === "yearly" && <YearlyPlan />}
      </div>
      <div className="flex flex-row items-center justify-center w-full gap-5">
        <div className="form-control">
          <label className="label cursor-pointer flex gap-3">
            <span className="label-text">Monthly</span>
            <input
              type="checkbox"
              className="toggle"
              checked={selectedPlan === "yearly"}
              onChange={togglePlan}
            />
            <span className="label-text">Yearly</span>
          </label>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between w-full text-center mt-[60px]">
        <Link to="/personalinfo">
          <h5 className="text-[16px] font-serif font-bold text-blue-600">
            GO BACK
          </h5>
        </Link>
        <Link to="/addons">
          <button className="btn btn-primary w-[150px] text-white">
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Plan;
