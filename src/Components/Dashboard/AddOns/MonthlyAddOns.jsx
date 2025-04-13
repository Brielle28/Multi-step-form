// MonthlyAddOns.jsx
import { useContext } from "react";
import { MonthlyAddOns } from "../../Utils/AddsOn";
import { UserContext } from "../../Context/UserProvider";

const MonthlyAddOn = () => {
  const { selectedAddOns, toggleAddOn } = useContext(UserContext);

  const handleToggle = (addOn) => {
    toggleAddOn(addOn);
  };

  const isSelected = (item) => {
    return selectedAddOns.some(addon => addon.id === item.id);
  };

  return (
    <div className="flex flex-col gap-4">
      {MonthlyAddOns.map((item) => (
        <div
          key={item.id}
          className={`flex items-center border rounded-lg p-4 cursor-pointer transition-all hover:border-blue-500 ${
            isSelected(item) ? "border-blue-500 bg-blue-50" : "border-gray-300"
          }`}
          onClick={() => handleToggle(item)}
        >
          <div className="mr-4">
            <input
              type="checkbox"
              className="checkbox checkbox-info"
              checked={isSelected(item)}
              onChange={(e) => {
                // Prevent the click from propagating to avoid double toggle
                e.stopPropagation();
                handleToggle(item);
              }}
            />
          </div>
          <div className="flex-grow">
            <h3 className="font-semibold text-blue-900">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.description}</p>
          </div>
          <div className="font-medium text-blue-600 whitespace-nowrap">
            {item.pricing}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MonthlyAddOn;