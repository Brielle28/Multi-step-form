// import React, { useState } from "react";
// import { FormInfo } from "../../Utils/FormInfo";
// import { Link, useNavigate } from "react-router-dom";

// const PersonalInfo = () => {
//   const [formData, setFormData] = useState({});
//   const navigate = useNavigate();

//   const handleChange = (e, id) => {
//     setFormData({
//       ...formData,
//       [id]: e.target.value,
//     });
//   };

//   const Nextpage = () => {
//     const allFieldsFilled = FormInfo.every(item => formData[item.id]);
//     if (!allFieldsFilled) {
//       alert("Please fill in all fields");
//     } else {
//       navigate("/plan");
//     }
//   };

//   return (
//     <div className="flex flex-col max-w-[65%] items-start text-black mt-7 gap-5">
//       <div className="flex flex-col items-start">
//         <h1 className="font-poppins font-bold text-[40px]">Personal Info</h1>
//         <p className="text-gray-600 font-serif text-[15px] font-extralight">
//           Please provide your Name, Email address, and Phone Number
//         </p>
//       </div>
//       <div className="w-full">
//         <ul className="w-full">
//           {FormInfo.map((item) => (
//             <li key={item.id} className="w-full mb-5">
//               <div className="flex flex-col items-start w-full gap-2">
//                 <h5 className="text-[14px] font-serif font-light pl-2">
//                   {item.title}
//                 </h5>
//                 <input
//                   type="text"
//                   placeholder={item.placeholder}
//                   value={formData[item.id] || ""}
//                   onChange={(e) => handleChange(e, item.id)}
//                   className="w-full max-w-xl bg-white input input-bordered input-primary"
//                 />
//               </div>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="flex flex-row items-center justify-end w-full">
//         <button className="btn btn-primary w-[150px] text-white" onClick={Nextpage}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PersonalInfo;
import React, { useState } from "react";
import { FormInfo } from "../../Utils/FormInfo";
import { Link, useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e, id) => {
    setFormData({
      ...formData,
      [id]: e.target.value,
    });
    
    // Clear error when user starts typing
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    let isValid = true;

    FormInfo.forEach(item => {
      if (!formData[item.id] || formData[item.id].trim() === "") {
        newErrors[item.id] = "This field is required";
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/plan");
    }
  };

  return (
    <div className="flex justify-center w-full px-4 md:px-6 lg:px-8">
      <div className="w-full max-w-xl mx-auto">
        <div className="mt-6 mb-8 md:mt-10">
          <h1 className="mb-2 text-2xl font-bold text-black md:text-3xl lg:text-4xl">
            Personal Info
          </h1>
          <p className="text-sm text-gray-600 md:text-base">
            Please provide your Name, Email address, and Phone Number
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          {FormInfo.map((item) => (
            <div key={item.id} className="mb-6">
              <div className="flex justify-between mb-1">
                <label htmlFor={item.id} className="text-sm font-medium text-black">
                  {item.title}
                </label>
                {errors[item.id] && (
                  <span className="text-sm font-medium text-red-500">
                    {errors[item.id]}
                  </span>
                )}
              </div>
              <input
                id={item.id}
                type="text"
                placeholder={item.placeholder}
                value={formData[item.id] || ""}
                onChange={(e) => handleChange(e, item.id)}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors[item.id] 
                    ? "border-red-500 focus:border-red-500 focus:ring-red-500" 
                    : "border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                } bg-white focus:outline-none focus:ring-2 transition-all`}
              />
            </div>
          ))}

          <div className="flex justify-end mt-8 mb-6">
            <button
              type="submit"
              className="px-6 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg shadow-sm hover:bg-blue-700"
            >
              Next Step
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;