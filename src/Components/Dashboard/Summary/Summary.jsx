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
    <div className="flex flex-col w-full max-w-3xl px-4 mx-auto mt-4 text-black sm:px-6 md:px-8 sm:mt-7">
      <div className="mb-6">
        <h1 className="text-2xl font-bold sm:text-3xl md:text-4xl">Finish Up</h1>
        <p className="text-sm font-light text-gray-600 sm:text-base md:text-lg">
          Double check everything looks OK before confirming
        </p>
      </div>

      <div className="w-full p-4 mb-6 rounded-lg shadow-sm bg-gray-50 sm:p-5">
        {/* Display selected plan */}
        {formPlan && (
          <div className="flex items-center justify-between">
            <div className="flex flex-col items-start">
              <h2 className="text-sm font-bold text-blue-900 sm:text-base">
                {formPlan.tittle} ({selectedPlan})
              </h2>
              <Link to="/plan" className="text-xs text-blue-500 underline sm:text-sm">
                Change
              </Link>
            </div>
            <h3 className="text-sm font-bold text-blue-900 sm:text-base">{formPlan.Pricing}</h3>
          </div>
        )}
        
        <hr className="my-3 border-gray-200" />

        {/* Display selected add-ons */}
        {selectedAddOns &&
          selectedAddOns.length > 0 &&
          selectedAddOns.map((addOn, index) => (
            <div key={index} className="flex items-center justify-between mb-3">
              <h5 className="text-xs text-gray-500 sm:text-sm">{addOn.title}</h5>
              <h5 className="text-xs text-gray-600 sm:text-sm">{addOn.pricing}</h5>
            </div>
          ))}
      </div>
      
      <div className="flex items-center justify-between w-full px-4 mb-8">
        <h5 className="text-sm font-medium sm:text-base">Total ({selectedPlan})</h5>
        <h5 className="text-sm font-bold text-blue-700 sm:text-base md:text-lg">
          ${totalPricing} ({selectedPlan})
        </h5>
      </div>
      
      <div className="flex flex-row items-center justify-between w-full mt-4 sm:mt-6">
        <Link to="/addons">
          <button className="font-medium text-blue-600 transition-colors hover:text-blue-800">
            Go Back
          </button>
        </Link>
        <Link to="/laststep">
          <button className="px-4 py-2 text-white transition-colors bg-blue-700 rounded-lg sm:px-6 hover:bg-blue-800">
            Confirm
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Summary;