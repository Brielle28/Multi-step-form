import React, { useContext } from "react";
import { UserContext } from "../../Context/UserProvider";
import { Link } from "react-router-dom";

const Summary = () => {
  const { formPlan, selectedAddOns, selectedPlan } = useContext(UserContext);

  const calculateTotalPricing = () => {
    const planPrice =
      parseFloat(formPlan?.Pricing?.replace(/[^0-9.-]+/g, "")) || 0;
    const addOnsPrice = selectedAddOns.reduce((total, addOn) => {
      const price = parseFloat(addOn.pricing?.replace(/[^0-9.-]+/g, "")) || 0;
      return total + price;
    }, 0);
    return planPrice + addOnsPrice;
  };

  const totalPricing = calculateTotalPricing();

  return (
    <div className="flex flex-col max-w-[65%] items-start text-black mt-7 gap-5">
      <div className="flex flex-col items-start">
        <h1 className="font-poppins font-bold text-[40px]">Finish Up</h1>
        <p className="text-gray-600 font-serif text-[18px] font-extralight">
          Double check everything looks OK before confirming
        </p>
      </div>

      <div className="w-[95%] bg-[#d8f3e3] p-5 items-center rounded-[10px]">
        {/* Display selected plan */}
        {formPlan && (
          <div className="flex items-center justify-between text-center">
            <div className="flex flex-col items-start justify-center text-start">
              <h1 className="font-bold text-blue-900">
                {formPlan.tittle} ({selectedPlan})
              </h1>
              <a href="/plan" className="text-blue-500 text text-[14px]">
                Change
              </a>
            </div>
            <h6 className="font-bold text-blue-900">{formPlan.Pricing}</h6>
          </div>
        )}
        <hr
          className="my-3 h-[2px] font-extrabold"
          style={{ backgroundColor: "white", color: "white" }}
        />

        {/* Display selected add-ons */}
        {selectedAddOns &&
          selectedAddOns.length > 0 &&
          selectedAddOns.map((addOn, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <h5 className="font-medium">{addOn.title}</h5>
              <h5 className="text-gray-600">{addOn.pricing}</h5>
            </div>
          ))}
      </div>
      <div className="flex w-[92%] px-5 items-center justify-between">
        <h5 className="font-medium">Total ({selectedPlan})</h5>
        <h5 className="text-gray-600">${totalPricing} ({selectedPlan})</h5>
      </div>
      <div className="flex flex-row items-center justify-between w-full text-center mt-[20px]">
        <Link to="/addons">
          <h5 className="text-[16px] font-serif font-bold text-blue-600">
            GO BACK
          </h5>
        </Link>
        <Link to="/laststep">
          <button className="btn btn-primary w-[150px] text-white">Next</button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;
