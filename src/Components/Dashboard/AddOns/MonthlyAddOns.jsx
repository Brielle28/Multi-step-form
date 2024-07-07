import React from "react";
import { MonthlyAddOns } from "../../Utils/AddsOn";

const MonthlyAddOn = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      {MonthlyAddOns.map((item) => (
        <div
          key={item.id}
          className="flex flex-row items-center justify-center text-center gap-5 w-full max-w-md mb-4 p-4 border rounded "
        >
          <div className="form-control">
            <input type="checkbox" className="checkbox checkbox-info" />
          </div>
          <div className="flex flex-col items-start justify-center text-left">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </div>
          <div className="text-right">
            <p className="text-base font-medium">{item.pricing}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyAddOn;
