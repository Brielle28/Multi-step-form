import React from "react";
import { Monthlyplans } from "../../Utils/Plan";

const MonthlyPlan = () => {
  return (
    <>
      <div className="flex items-start gap-3">
        {Monthlyplans.map((item) => (
          <div className="flex flex-col items-start gap-[35px] border-2 border-gray-300 p-2 w-[110px] rounded-[10px]">
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
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MonthlyPlan;
