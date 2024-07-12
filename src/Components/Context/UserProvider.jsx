import React, { createContext, useState, useContext } from "react";

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
  // Add or remove plan
  // const toggleplan = (plan) => {
  //   setFormPlan((prevplan) => {
  //     if (prevplan.includes(plan)) {
  //       return prevplan.filter((item) => item !== plan);
  //     } else {
  //       return [...prevplan, plan];
  //     }
  //   });
  // };

  
  
  // State for selected add-ons
  const [selectedAddOns, setSelectedAddOns] = useState([]);
  // Add or remove add-ons
  const toggleAddOn = (addOn) => {
    setSelectedAddOns((prevAddOns) => {
      if (prevAddOns.includes(addOn)) {
        return prevAddOns.filter((item) => item !== addOn);
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
