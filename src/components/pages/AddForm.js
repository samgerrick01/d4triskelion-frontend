import React, { useState } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { createMember } from "../../actions/members";
import logo from "../../images/d4logo.png";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [postData, setPostData] = useState({
    fullName: "",
    allias: "",
    age: "",
    birthDate: "",
    tBirth: "",
    gtDuringIR: "",
    mwwIntDuringIR: "",
    mwwExtDuringIR: "",
    chapter: "District IV Chapter",
    tStatus: "Active",
    selectedFile: "",
  });

  //EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();

    if (localStorage.getItem("account") === "admin") {
      if (
        !postData.fullName ||
        !postData.allias ||
        !postData.age ||
        !postData.birthDate ||
        !postData.tBirth ||
        !postData.selectedFile ||
        !postData.gtDuringIR ||
        !postData.mwwExtDuringIR ||
        !postData.mwwIntDuringIR
      ) {
        setError("Don't Leave any field Blanks!");
      } else {
        dispatch(createMember(postData));
        window.alert("Member has been Added!");
        navigate("/home");
        clear();
      }
    } else {
      window.alert("You dont have administrator permission to Add Members!");
    }
  };

  const clear = () => {
    setPostData({
      fullName: "",
      allias: "",
      age: "",
      birthDate: "",
      tBirth: "",
      gtDuringIR: "",
      mwwIntDuringIR: "",
      mwwExtDuringIR: "",
      chapter: "District IV Chapter",
      tStatus: "Active",
      selectedFile: "",
    });
    setError("");
  };

  return (
    <div
      className="container h-screen flex justify-center items-center p-5 gap-10 rounded bg-slate-500 bg-opacity-50 
    mobile:flex mobile:flex-col mobile:h-full
    tablet:gap-0 tablet:flex-col tablet:h-screen 
    laptop:h-full"
    >
      <img
        className="flex justify-center items-center max-w-xs 
        mobile:w-32 
        tablet:w-40 tablet:ml-8 tablet:mb-5"
        src={logo}
        alt="patrinus"
      />
      <form
        autoComplete="off"
        noValidate
        className="flex justify-start items-start flex-col gap-5 
        mobile:items-center 
        mobile:justify-center 
        tablet:items-center tablet:justify-center"
      >
        <h1 className="text-center text-3xl font-bold tablet:text-xl text-white">
          Add New Member
        </h1>
        {error && <span style={{ color: "red" }}>{error}</span>}
        {/* Full Name */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Name"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.fullName}
            onChange={(e) =>
              setPostData({ ...postData, fullName: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            Name
          </span>
        </label>
        {/* Allias */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Allias"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.allias}
            onChange={(e) =>
              setPostData({ ...postData, allias: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            Allias
          </span>
        </label>
        {/* Age */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Age"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.age}
            onChange={(e) => setPostData({ ...postData, age: e.target.value })}
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            Age
          </span>
        </label>
        {/* Birth Date */}
        <label className="relative cursor-text">
          <input
            type="date"
            placeholder="Birth Date"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.birthDate}
            onChange={(e) =>
              setPostData({ ...postData, birthDate: e.target.value })
            }
          />
          <span className="text-sm text-white text-opacity-50 bg-transparent absolute left-0 -top-4 transition duration-500 input-text">
            Birth Date
          </span>
        </label>
        {/* T-Birth */}
        <label className="relative cursor-text">
          <input
            type="date"
            placeholder="T-Birth"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.tBirth}
            onChange={(e) =>
              setPostData({ ...postData, tBirth: e.target.value })
            }
          />
          <span className="text-sm text-white text-opacity-50 bg-transparent absolute left-0 -top-4 transition duration-500 input-text">
            T-Birth
          </span>
        </label>
        {/* GT DURING IR */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="GT During IR"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.gtDuringIR}
            onChange={(e) =>
              setPostData({ ...postData, gtDuringIR: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            GT During IR
          </span>
        </label>
        {/* MWW INT DURING IR */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="MWW Int During IR"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.mwwIntDuringIR}
            onChange={(e) =>
              setPostData({ ...postData, mwwIntDuringIR: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            MWW Int During IR
          </span>
        </label>
        {/* MWW EXT DURING IR */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="MWW Ext During IR"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.mwwExtDuringIR}
            onChange={(e) =>
              setPostData({ ...postData, mwwExtDuringIR: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            MWW Ext During IR
          </span>
        </label>
        {/* Chapter */}
        <input
          className="h-8 mobile:w-64 w-80 bg-transparent text-xl text-white"
          placeholder="Chapter"
          disabled
          value={postData.chapter}
          onChange={(e) =>
            setPostData({ ...postData, chapter: e.target.value })
          }
        />
        {/* Photo */}
        <div className="h-8 mobile:w-64 w-80 text-white">
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="flex justify-center items-center gap-4 tablet:gap-2">
          <button
            onClick={handleSubmit}
            className="border rounded text-xl p-3 bg-green-500 mobile:p-1"
          >
            Submit
          </button>
          <button
            onClick={clear}
            className="border rounded text-xl p-3 bg-red-500 mobile:p-1"
          >
            Reset
          </button>
          <button
            onClick={() => navigate("/home")}
            className="border rounded text-xl p-3 bg-blue-500 mobile:p-1"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
