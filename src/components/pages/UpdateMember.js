import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { updateMember, getSingleMember } from "../../actions/members";
import logo from "../../images/d4logo.png";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const UpdateMember = () => {
  const dispatch = useDispatch();
  const member = useSelector((state) => state.members);
  let { id } = useParams();
  const [error, setError] = useState("");
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
    rootChapter: "",
    chapter: "",
    tStatus: "",
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
        !postData.tStatus ||
        !postData.chapter ||
        !postData.gtDuringIR ||
        !postData.mwwExtDuringIR ||
        !postData.mwwIntDuringIR ||
        !postData.rootChapter
      ) {
        setError("Don't Leave any field Blanks!");
      } else {
        dispatch(updateMember(id, postData));
        window.alert("Member has been Update!");
        navigate("/members");
      }
    } else {
      window.alert(
        "You dont have administrator permission to Update a member!"
      );
    }
  };

  //USE EFFECT
  useEffect(() => {
    dispatch(getSingleMember(id));
  }, []);

  useEffect(() => {
    if (member) {
      setPostData({ ...member });
    }
  }, [member]);
  return (
    <div className="container flex justify-center items-center p-5 gap-10 rounded bg-slate-500 bg-opacity-50 mobile:flex mobile:flex-col tablet:gap-0">
      <img
        className="flex justify-center items-center max-w-xs mobile:w-32 tablet:w-48 tablet:ml-8"
        src={logo}
        alt="patrinus"
      />
      <form
        autoComplete="off"
        noValidate
        className="flex justify-start items-start flex-col gap-5 mobile:items-center mobile:justify-center tablet:items-center tablet:justify-center"
      >
        <h1 className="text-center text-3xl font-bold tablet:text-xl text-white">
          Update a Member
        </h1>
        {error && <span style={{ color: "red" }}>{error}</span>}
        {/* Full Name */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Name"
            className="h-8 w-60 tablet:w-40 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.fullName || ""}
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
            className="h-8 w-60 tablet:w-40 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.allias || ""}
            onChange={(e) =>
              setPostData({ ...postData, allias: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            Alias
          </span>
        </label>
        {/* Age */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Age"
            className="h-8 w-60 tablet:w-40 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.age || ""}
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
            className="h-8 w-60 tablet:w-40 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.birthDate || ""}
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
            className="h-8 w-60 tablet:w-40 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.tBirth || ""}
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
            value={postData.gtDuringIR || ""}
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
            value={postData.mwwIntDuringIR || ""}
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
            placeholder="mwwExtDuringIR"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.mwwExtDuringIR || ""}
            onChange={(e) =>
              setPostData({ ...postData, mwwExtDuringIR: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            MWW Ext During IR
          </span>
        </label>
        {/* Root Chapter */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Root Chapter"
            className="h-8 mobile:w-64 w-80 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.rootChapter || ""}
            onChange={(e) =>
              setPostData({ ...postData, rootChapter: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            Root Chapter
          </span>
        </label>
        {/* Current Chapter */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Current Chapter"
            className="h-8 w-60 tablet:w-40 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.chapter || ""}
            onChange={(e) =>
              setPostData({ ...postData, chapter: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            Current Chapter
          </span>
        </label>
        {/* Status */}
        <label className="relative cursor-text">
          <input
            type="text"
            placeholder="Status"
            className="h-8 w-60 tablet:w-40 px-2 text-xl text-white bg-transparent border-white border-b-2 outline-none focus:border-blue-600 placeholder-gray-300 placeholder-opacity-0 transition duration-500"
            value={postData.tStatus || ""}
            onChange={(e) =>
              setPostData({ ...postData, tStatus: e.target.value })
            }
          />
          <span className="text-xl text-white text-opacity-50 bg-transparent absolute left-0 top-1 transition duration-500 input-text">
            Status
          </span>
        </label>
        {/* Photo */}
        <div className="h-8 w-60 tablet:w-40 text-white mobile:w-60 text">
          <FileBase
            type="file"
            multiple={false}
            value={setPostData.selectedFile || ""}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <div className="flex justify-center items-center gap-4 tablet:gap-2">
          <button
            onClick={
              localStorage.length === 0 ? navigate("/auth") : handleSubmit
            }
            className="border rounded text-xl p-3 bg-green-500 mobile:p-1"
          >
            Update
          </button>
          {/* <button
            onClick={clear}
            className="border rounded text-xl p-3 bg-red-500 mobile:p-1"
          >
            Reset
          </button> */}
          <button
            onClick={() => navigate("/members")}
            className="border rounded text-xl p-3 bg-blue-500 mobile:p-1"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateMember;
