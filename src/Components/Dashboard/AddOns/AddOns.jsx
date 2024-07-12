import React, { useContext } from "react";
import { Link } from "react-router-dom";
import MonthlyAddOn from "./MonthlyAddOns";
import YearlyAddOn from "./YearlyAddOns";
import { UserContext } from "../../Context/UserProvider";

const AddOns = () => {
  const { selectedPlan } = useContext(UserContext);

  return (
    <div className="flex flex-col max-w-[65%] items-start text-black mt-7 gap-5">
      <div className="flex flex-col items-start">
        <h1 className="font-poppins font-bold text-[40px]">Pick add-ons</h1>
        <p className="text-gray-600 font-serif text-[18px] font-extralight">
          Add-ons help to enhance your gaming experience
        </p>
      </div>
      <div>{selectedPlan === "monthly" ? <MonthlyAddOn /> : <YearlyAddOn />}</div>
      <div className="flex flex-row items-center justify-between w-full text-center mt-[10px]">
        <Link to="/plan">
          <h5 className="text-[16px] font-serif font-bold text-blue-600">
            GO BACK
          </h5>
        </Link>
        <Link to="/summary">
          <button className="btn btn-primary w-[150px] text-white">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default AddOns;
