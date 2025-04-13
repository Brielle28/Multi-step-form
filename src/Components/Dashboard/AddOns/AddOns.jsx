import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MonthlyAddOn from "./MonthlyAddOns";
import YearlyAddOn from "./YearlyAddOns";
import { UserContext } from "../../Context/UserProvider";

const AddOns = () => {
  const { selectedPlan, selectedAddOns } = useContext(UserContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleNext = (e) => {
    e.preventDefault();
    if (selectedAddOns.length === 0) {
      setError("Please select at least one add-on to continue");
      // Scroll to the top to show the error
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/summary");
    }
  };

  return (
    <div className="flex flex-col w-full max-w-xl px-4 mx-auto md:px-0">
      <div className="mb-3">
        <h1 className="mt-6 mb-2 text-2xl font-bold sm:text-3xl md:text-4xl md:mt-">Pick add-ons</h1>
        <p className="text-sm text-gray-600 sm:text-base">
          Add-ons help to enhance your gaming experience
        </p>
      </div>

      {error && (
        <div className="flex items-center justify-between px-4 py-1 mb-4 text-red-700 bg-red-100 border border-red-400 rounded">
          <span>{error}</span>
          <button onClick={() => setError("")} className="font-bold text-red-700">
            ×
          </button>
        </div>
      )}

      <div className="w-full mb-8">
        {selectedPlan === "monthly" ? <MonthlyAddOn /> : <YearlyAddOn />}
      </div>

      <div className="flex items-center justify-between w-full pt-6 mt-4">
        <Link to="/plan" className="font-medium text-blue-700 transition-colors hover:text-blue-800">
          Go Back
        </Link>
        <button
          onClick={handleNext}
          className="px-6 py-2 font-medium text-white transition-colors bg-blue-700 rounded-lg shadow-sm hover:bg-blue-800"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default AddOns;
