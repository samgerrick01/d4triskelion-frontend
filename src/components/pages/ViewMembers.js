import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";
import Members from "./Members";
import { useDispatch } from "react-redux";
import { getMembers } from "../../actions/members";
import { useNavigate } from "react-router-dom";

const ViewMembers = ({ isAuth }) => {
  const navigate = useNavigate();
  const members = useSelector((state) => state.members);
  const dispatch = useDispatch();
  //USE EFFECT
  useEffect(() => {
    dispatch(getMembers());
  }, [dispatch]);

  return !members.length ? (
    <div className="flex flex-col justify-center items-center mobile:h-screen">
      <CircularProgress />
      <label className="text-white text-7xl text-center">
        Data is Loading!
      </label>
      <div className="border mt-5 rounded-full p-3 bg-blue-500">
        <button
          className="text-2xl font-bold"
          onClick={() => navigate("/home")}
        >
          Back
        </button>
      </div>
    </div>
  ) : (
    <>
      <label className="text-white text-4xl">
        Total Members : {members.length}
      </label>
      <div className="border mb-5 rounded-full p-3 bg-blue-500">
        <button
          className="text-2xl font-bold"
          onClick={() => navigate("/home")}
        >
          Back
        </button>
      </div>
      <div className="grid gap-5 grid-cols-3 grid-rows-4 tablet:grid-cols-2 mobile:grid-cols-1">
        {members.map((member) => (
          <div key={member._id}>
            <Members isAuth={isAuth} member={member} id={member._id} />
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewMembers;
