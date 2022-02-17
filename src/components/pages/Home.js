import React from "react";
import d4logo from "../../images/d4logo.png";
import lmclogo from "../../images/lmclogo.png";
import tgplogo from "../../images/tgpph.png";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col gap-10 
    mobile:flex-col-reverse 
    tablet:flex-col-reverse tablet:h-screen tablet:justify-end tablet:mt-10"
    >
      <div
        className="flex items-end gap-2 
      mobile:flex-col mobile:items-center 
      tablet:flex-col tablet:items-center tablet:justify-center"
      >
        <img
          className="w-80 mobile:w-52 laptop:w-48 tablet:w-48"
          src={tgplogo}
          alt="d4"
        />
        <img
          className="w-96 mobile:w-56 laptop:w-52 tablet:w-52"
          src={lmclogo}
          alt="d4"
        />
        <img
          className="w-80 mobile:w-52 laptop:w-48 tablet:w-48"
          src={d4logo}
          alt="d4"
        />
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={() => navigate("/home")}
          className="text-white border border-blue-600 pl-2 pr-2 text-xl rounded-lg bg-slate-900"
        >
          Goto Home
        </button>
      </div>
    </div>
  );
};

export default Home;
