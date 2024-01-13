import React from "react";
const Service = () => {
  return (
    <>
      <div className="bg-white flex gap-4 justify-center items-center">
        <div className="boxes h-[280px] w-[354px] rounded-lg  bg-white">
          <div className="h-[200px] w-[354px] rounded-t-lg border bg-white border-slate-300">
            <img
              className="object-cover h-[200px] w-[354px] rounded-t-lg"
              src="https://b.zmtcdn.com/webFrontend/e5b8785c257af2a7f354f1addaf37e4e1647364814.jpeg?output-format=webp&fit=around%7C402:360&crop=402:360;*,*"
              alt=""
            />
          </div>
          <div className="h-[80px] bg-white w-[354px] rounded-b-lg border border-slate-300 flex flex-col justify-center px-3">
            <h2 className="text-xl font-bold">Order Online</h2>
            <p>Stay home and order to your doorstep</p>
          </div>
        </div>
        <div className="boxes h-[280px] w-[354px] rounded-lg bg-white">
          <div className="h-[200px] w-[354px] rounded-t-lg border bg-white border-slate-300">
            <img
              className=" object-cover h-[200px] w-[354px] rounded-t-lg"
              src="https://b.zmtcdn.com/webFrontend/d026b357feb0d63c997549f6398da8cc1647364915.jpeg?output-format=webp&fit=around%7C402:354&crop=402:354;*,*"
            ></img>
          </div>
          <div className="h-[80px] bg-white w-[354px] rounded-b-lg border border-slate-300 flex flex-col justify-center px-3">
            <h2 className="text-xl font-bold">Dining</h2>
            <p>View the city's favourite dining venues</p>
          </div>
        </div>
        <div className="boxes h-[280px] w-[354px] rounded-lg  bg-white">
          <div className="h-[200px] w-[354px] rounded-t-lg border bg-white border-slate-300">
            <img
              className="object-cover h-[200px] w-[354px] rounded-t-lg"
              src="            https://b.zmtcdn.com/webFrontend/d9d80ef91cb552e3fdfadb3d4f4379761647365057.jpeg?output-format=webp&fit=around%7C402:354&crop=402:354;*,*
"
              alt=""
            />
          </div>
          <div className="h-[80px] bg-white w-[354px] rounded-b-lg border border-slate-300 flex flex-col justify-center px-3">
            <h2 className="text-xl font-bold">Nightlife And Clubs</h2>
            <p>Explore the city's top nightlife outlets</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Service;
