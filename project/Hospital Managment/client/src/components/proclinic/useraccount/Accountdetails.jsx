import React from "react";

const Accountdetails = () => {
  return (
    <div className=" relative">
      <div
        className={` w-[100%] flex items-center justify-center flex-col bg-[hsl(208,35%,13%)] h-[81.8vh] `}
      >
        <div className="card bg-[hsl(210,56%,25%)] w-[50%] max-sm:w-[80%] text-white shadow-2xl  shadow-[#3f5c79] transition-all hover:shadow-[hsla(210,56%,25%,1)]">
          <div className="card-header w-full flex justify-center">
            <h1 className=" h3">Account Details</h1>
          </div>
          <div className="body  mt-3 flex justify-center mb-3">
            <div className="w-[60%]">
              <div className="flex justify-between mt-2 border-b pb-2 border-spacing-3">
                <div className="font-bold text-lg">UserName</div>
                <div>jsdjdsjjd</div>
              </div>
              <div className="flex justify-between mt-2 border-b pb-2 border-spacing-3">
                <div className="font-bold text-lg">Phone Number</div>
                <div>jsdjdsjjd</div>
              </div>
              <div className="flex justify-between mt-2 border-b pb-2 border-spacing-3">
                <div className="font-bold text-lg">Email id</div>
                <div>jsdjdsjjd</div>
              </div>
              <div className="flex justify-between mt-2 ">
                <div className="font-bold text-lg">Passsword</div>
                <div>fffkf</div>
              </div>
            </div>
          </div>
          <div className="card-footer flex justify-end">
            <button className="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accountdetails;
