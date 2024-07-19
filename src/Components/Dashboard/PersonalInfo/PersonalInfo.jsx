import React, { useState } from "react";
import { FormInfo } from "../../Utils/FormInfo";
import { Link, useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e, id) => {
    setFormData({
      ...formData,
      [id]: e.target.value,
    });
  };

  const Nextpage = () => {
    const allFieldsFilled = FormInfo.every(item => formData[item.id]);
    if (!allFieldsFilled) {
      alert("Please fill in all fields");
    } else {
      navigate("/plan");
    }
  };

  return (
    <div className="flex flex-col max-w-[65%] items-start text-black mt-7 gap-5">
      <div className="flex flex-col items-start">
        <h1 className="font-poppins font-bold text-[40px]">Personal Info</h1>
        <p className="text-gray-600 font-serif text-[15px] font-extralight">
          Please provide your Name, Email address, and Phone Number
        </p>
      </div>
      <div className="w-full">
        <ul className="w-full">
          {FormInfo.map((item) => (
            <li key={item.id} className="mb-5 w-full">
              <div className="flex flex-col items-start w-full gap-2">
                <h5 className="text-[14px] font-serif font-light pl-2">
                  {item.title}
                </h5>
                <input
                  type="text"
                  placeholder={item.placeholder}
                  value={formData[item.id] || ""}
                  onChange={(e) => handleChange(e, item.id)}
                  className="input input-bordered input-primary w-full max-w-xl bg-white"
                />
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-row items-center justify-end w-full">
        <button className="btn btn-primary w-[150px] text-white" onClick={Nextpage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PersonalInfo;
