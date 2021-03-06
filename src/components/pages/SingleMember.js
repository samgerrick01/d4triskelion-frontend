import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getSingleMember } from "../../actions/members";
import d4logo from "../../images/d4logo.png";
import lmclogo from "../../images/lmclogo.png";
import tgplogo from "../../images/tgpph.png";

const SingleMember = () => {
  const [state, setState] = useState({
    fullName: "",
    allias: "",
    age: "",
    birthDate: "",
    tBirth: "",
    gtDuringIR: "",
    mwwIntDuringIR: "",
    mwwExtDuringIR: "",
    rootChapter: "",
    chapter: "",
    tStatus: "",
    selectedFile: "",
  });

  const dispatch = useDispatch();
  const member = useSelector((state) => state.members);
  let { id } = useParams();
  //USE EFFECT
  useEffect(() => {
    dispatch(getSingleMember(id));
  });

  useEffect(() => {
    if (member) {
      setState({ ...member });
    }
  }, [member]);
  const val = member.fullName;
  return !state.fullName ? (
    <div className="flex flex-col justify-center items-center mt-5 mobile:h-screen">
      <CircularProgress />
      <label className="text-white text-5xl text-center">
        Please Wait!, Data is Loading!
      </label>
    </div>
  ) : (
    <div
      className="grid mt-20 grid-cols-2 grid-rows-2 gap-2 laptop:w-4/5
      tablet:flex tablet:flex-col tablet:justify-center tablet:items-center tablet:ml-5 tablet:mr-5 tablet:h-screen 
      mobile:flex mobile:flex-col mobile:justify-center mobile:items-center mobile:ml-2 mobile:mr-2 mobile:h-screen"
    >
      <div className="box row-span-0 col-start-1 border-2 laptop:h-96 tablet:h-96 mobile:h-64">
        <img
          className="rounded-tl-lg rounded-lg h-full w-full"
          src={state.selectedFile}
          alt="member"
        />
      </div>
      <div
        className="box w-full col-start-2 pr-8 flex justify-center ml-10 items-start flex-col text-2xl font-bold border-2 pl-8 
      laptop:text-lg laptop:h-96 laptop:pr-8 
      tablet:pl-5 tablet:pr-5 tablet:ml-0 tablet:h-96 tablet:text-lg 
      mobile:pl-5 mobile:pr-5 mobile:ml-0 mobile:h-64 mobile:text-xs"
      >
        <label
          className="flex justify-between w-full uppercase 
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>Name :</p>
          <p> {state.fullName}</p>
        </label>
        <label
          className="flex justify-between w-full uppercase
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>Alias :</p>
          <p> {state.allias}</p>
        </label>
        <label
          className="flex justify-between w-full uppercase
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>Age :</p>
          <p> {state.age}</p>
        </label>
        <label
          className="flex justify-between w-full 
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>T-Birth :</p>
          <p> {state.tBirth}</p>
        </label>
        <label
          className="flex justify-between w-full 
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>GT(IR) :</p>
          <p> {state.gtDuringIR}</p>
        </label>
        <label
          className="flex justify-between w-full uppercase
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>MWW Int(IR) :</p>
          <p> {state.mwwIntDuringIR}</p>
        </label>
        <label
          className="flex justify-between w-full uppercase
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>MWW Ext(IR) :</p>
          <p> {state.mwwExtDuringIR}</p>
        </label>
        <label
          className="flex justify-between w-full uppercase
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>Root Chapter :</p>
          <p> {state.rootChapter}</p>
        </label>
        <label
          className="flex justify-between w-full uppercase
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>Present Chapter :</p>
          <p> {state.chapter}</p>
        </label>
        <label
          className="flex justify-between w-full uppercase
        mobile:flex mobile:justify-between mobile:w-full 
        tablet:flex tablet:justify-between tablet:w-full 
        laptop:flex laptop:justify-between laptop:w-full"
        >
          <p>Status :</p>
          <p> {state.tStatus}</p>
        </label>
        {val === "EARL KELVIN SANGALANG" ? (
          <label className="flex justify-center w-full uppercase tablet:text-lg mobile:text-sm laptop:text-lg">
            <p>DISTRICT IV FOUNDER / ORGANIZER</p>
          </label>
        ) : null}
      </div>
      <div className="box1 row-span-5 col-span-2 gap-3 flex-col cursor-pointer flex items-center">
        <label
          className="font-serif text-5xl 
        laptop:text-4xl laptop:text-center
        tablet:text-2xl tablet:text-center 
        mobile:text-2xl mobile:text-center"
        >
          "District IV Chapter is my Community Chapter"
        </label>
        {/* <div className="border mb-5 rounded-full p-3 bg-blue-500">
          <button
            className="text-2xl font-bold"
            onClick={() => navigate("/members")}
          >
            Back
          </button>
        </div> */}
        <div className=" flex flex-row justify-center items-center gap-5">
          <img className="w-32 mobile:w-20" src={tgplogo} alt="tgp" />
          <img className="w-32 mobile:w-20" src={lmclogo} alt="lmc" />
          <img className="w-32 mobile:w-20" src={d4logo} alt="d4" />
        </div>
      </div>
    </div>
  );
};

export default SingleMember;
