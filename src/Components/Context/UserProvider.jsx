// UserProvider.jsx
import  { createContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  // Toggling between monthly plan and yearly plan
  const [selectedPlan, setSelectedPlan] = useState("monthly");
  const togglePlan = () => {
    setSelectedPlan((prevPlan) =>
      prevPlan === "monthly" ? "yearly" : "monthly"
    );
  };

  // state for plan
  const [formPlan, setFormPlan] = useState([]);
  const toggleplan = (plan) => {
    setFormPlan(plan);
  };
  
  // State for selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  // Add or remove add-ons by comparing IDs instead of object references
  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prevAddOns) => {
      const isSelected = prevAddOns.some(item => item.id === addOn.id);
      if (isSelected) {
        return prevAddOns.filter((item) => item.id !== addOn.id);
      } else {
        return [...prevAddOns, addOn];
      }
    });
  };

  const value = {
    selectedPlan,
    setSelectedPlan,
    togglePlan,
    selectedAddOns,
    toggleAddOn,
    formPlan,
    setFormPlan,
    toggleplan,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;