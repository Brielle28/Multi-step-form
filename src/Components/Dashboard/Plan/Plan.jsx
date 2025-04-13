import { useContext, useState } from "react";
import MonthlyPlan from "./MonthlyPlan";
import YearlyPlan from "./YearlyPlan";
import { Link,  } from "react-router-dom";
import { UserContext } from "../../Context/UserProvider";

const Plan = () => {
  const { selectedPlan, togglePlan, formPlan } = useContext(UserContext);
  // const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleNextStep = (e) => {
    if (!formPlan || !formPlan.tittle) {
      e.preventDefault(); // Prevent navigation
      setError("Please select a plan to continue");
      // Scroll to error message if needed
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Clear error if there was one
      setError("");
      // Navigation will proceed naturally through the Link
    }
  };

  return (
    <div className="flex flex-col justify-center w-full px-4 mx-auto text-black md:px-0 md:max-w-xl">
      <div className="mb-6">
        <h1 className="mt-6 mb-2 text-2xl font-bold sm:text-3xl md:text-4xl md:mt-10">
          Select your Plan
        </h1>
        <p className="text-sm text-gray-600 sm:text-base">
          You have the option of monthly or yearly billing
        </p>
      </div>

      {/* Error message */}
      {error && (
        <div className="p-3 mb-4 text-red-700 bg-red-100 rounded-md">
          {error}
        </div>
      )}

      <div className="w-full mb-6">
        {selectedPlan === "monthly" && <MonthlyPlan />}
        {selectedPlan === "yearly" && <YearlyPlan />}
      </div>

      <div className="flex justify-center w-full mb-8">
        <div className="flex items-center gap-4 px-6 py-3 bg-gray-100 rounded-lg">
          <span
            className={`font-medium ${
              selectedPlan === "monthly" ? "text-blue-800" : "text-gray-500"
            }`}
          >
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
          <span
            className={`font-medium ${
              selectedPlan === "yearly" ? "text-blue-800" : "text-gray-500"
            }`}
          >
            Yearly
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between w-full pt-6 mt-5">
        <Link to="/personalinfo">
          <button className="font-medium text-blue-700 transition-colors hover:text-blue-800">
            Go Back
          </button>
        </Link>
        <Link to="/addons" onClick={handleNextStep}>
          <button className="px-6 py-2 font-medium text-white transition-colors bg-blue-700 rounded-lg shadow-sm hover:bg-blue-800">
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Plan;