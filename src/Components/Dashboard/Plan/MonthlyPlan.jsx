import { useContext, useState, useEffect } from "react";
import { Monthlyplans } from "../../Utils/Plan";
import { UserContext } from "../../Context/UserProvider";

const MonthlyPlan = () => {
  const { formPlan, toggleplan } = useContext(UserContext);
  const [activePlan, setActivePlan] = useState(null);

  const handleToggleplan = (plan) => {
    toggleplan(plan);
    setActivePlan(plan);
  };

  // Check if a plan is already selected from context when component mounts
  useEffect(() => {
    if (formPlan && formPlan.tittle) {
      setActivePlan(formPlan);
    }
  }, [formPlan]);

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      {Monthlyplans.map((item, index) => (
        <div 
          key={index}
          onClick={() => handleToggleplan(item)}
          className={`plan-card p-4 border rounded-lg cursor-pointer ${
            activePlan && activePlan.tittle === item.tittle 
              ? "border-blue-500 bg-blue-50" 
              : "border-gray-200"
          }`}
        >
          <div className="flex flex-col items-center plan-content">
            <h3 className="mb-2 text-lg font-semibold">{item.tittle}</h3>
            <p className="mb-1 text-2xl font-bold">{item.Pricing}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyPlan;