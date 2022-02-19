import React from "react";
import patrinus from "../../images/d4logo.png";
import { useNavigate } from "react-router-dom";
import { FaAddressCard } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="flex gap-5 items-center justify-center p-3 mt-4 rounded bg-transparent w-80vw h-80vh text-center font-bold 
    mobile:flex-col mobile:h-screen  mobile:justify-start
    tablet:flex-col tablet:h-screen tablet:justify-start"
    >
      <img
        className="w-2/5 mobile:w-40 tablet:w-52"
        src={patrinus}
        alt="patrinus"
      />
      <div className="flex flex-col gap-5 justify-center items-center tablet:flex-row">
        <button
          className="flex justify-center items-center text-black border-2 text-4xl rounded bg-gray-300 w-96 h-full p-1 
        mobile:w-40 mobile:h-20 mobile:rounded-xl mobile:text-2xl 
        tablet:w-52 tablet:h-32 tablet:text-2xl"
          onClick={() => {
            if (localStorage.getItem("account") === "admin") {
              navigate("/add");
            } else {
              window.alert("You need administrator permission to Add Members!");
            }
          }}
        >
          <FaAddressCard className="w-1/2 h-1/2" />
          Add Member
        </button>
        <button
          className="flex justify-center items-center text-black text-4xl border-2 rounded bg-gray-300 w-96 h-full p-1 
        mobile:w-40 mobile:h-20 mobile:rounded-xl mobile:text-2xl 
        tablet:w-52 tablet:h-32 tablet:text-2xl"
          onClick={() => navigate("/members")}
        >
          <IoPeople className="w-1/2 h-1/2" />
          View Members
        </button>
      </div>
    </div>
  );
};

export default HomePage;
