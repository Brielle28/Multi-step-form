import React, { useContext, useState } from "react";
import { Yearlyplans } from "../../Utils/Plan";
import { UserContext } from "../../Context/UserProvider";

const YearlyPlan = () => {
  const { formPlan, toggleplan } = useContext(UserContext);
  const [activePlan, setActivePlan] = useState(null);

  const handleToggleplan = (plan) => {
    toggleplan(plan);
    setActivePlan(plan);
  };

  return (
    <div className="flex items-start gap-3">
      {Yearlyplans.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col items-start gap-[35px] border-2 p-2 w-[110px] rounded-[10px] ${
            activePlan === item ? 'border-brown' : 'border-gray-500'
          }`}
          onClick={() => handleToggleplan(item)}
        >
          <div>
            <img
              src={item.icon}
              alt=""
              className="w-[30px] h-[30px] rounded-[10px]"
            />
          </div>
          <div className="flex flex-col items-start gap-1">
            <h1 className="font-poppins font-bold text-[15px]">
              {item.tittle}
            </h1>
            <p className="text-gray-600 font-serif text-[15px] font-extralight">
              {item.Pricing}
            </p>
            <p className="text-gray-600 font-serif text-[15px] font-extralight">
              {item.days}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default YearlyPlan;
