import React from "react";

const Summary = () => {
  return (
    <>
      <div className="flex flex-col max-w-[65%] items-start text-black mt-7 gap-5">
        <div className="flex flex-col items-start">
          <h1 className="font-poppins font-bold text-[40px]"> Finish Up </h1>
          <p className="text-gray-600 font-serif text-[18px] font-extralight">
           Double check everything looks OK before confirming {" "}
          </p>
        </div>
        <div>
          <div>
            <h1>
              Arcade Monthly
            </h1>
            <div>
            <a href="/plan"> change </a>
            <h6> $9/mo</h6>
            </div>
          </div>
          <hr />
          <div>
            <h5>
              online service 
            </h5>
            <h5>
              $1/mo
            </h5>
          </div>
          <div>
            <h5>
              online service 
            </h5>
            <h5>
              $1/mo
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summary;
