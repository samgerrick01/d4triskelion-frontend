import React from "react";
import d4logo from "../../images/d4logo.png";
import lmclogo from "../../images/lmclogo.png";
import tgplogo from "../../images/tgpph.png";

const Home = () => {
  return (
    <div className="flex items-end gap-2 mobile:flex-col mobile:items-center">
      <img className="w-80 mobile:w-52" src={tgplogo} alt="d4" />
      <img className="w-96 mobile:w-56" src={lmclogo} alt="d4" />
      <img className="w-80 mobile:w-52" src={d4logo} alt="d4" />
    </div>
  );
};

export default Home;
