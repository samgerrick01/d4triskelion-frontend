import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signup } from "../../actions/auth";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //STATE
  const [formData, setFormData] = useState({
    userName: "",
    userPass: "",
    userType: "user",
  });
  //EVENTS
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(signup(formData, navigate));
    navigate("/auth");
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const clear = () => {
    setFormData({ userName: "", userPass: "" });
  };
  return (
    <div className="flex items-center h-80vh">
      <div className="container bg-zinc-800 rounded-lg h-52 flex flex-col items-center justify-center gap-5 p-5 text-white">
        <h1 className="text-2xl">Registration</h1>
        <label>
          Username&nbsp;:
          <input
            type="text"
            name="userName"
            value={formData.userName}
            onChange={handleInput}
            autoFocus
            className="text-black outline-none rounded pl-1 w-48"
            autoComplete="off"
          />
        </label>
        <label>
          Password&nbsp;&nbsp;&nbsp;:
          <input
            type="password"
            name="userPass"
            onChange={handleInput}
            value={formData.userPass}
            className="text-black outline-none rounded pl-1 w-48"
            autoComplete="off"
          />
        </label>
        <div onClick={handleSubmit} className="flex gap-3">
          <button className="border rounded-lg pl-2 pr-2 text-white">
            Sign-in
          </button>
          <button
            onClick={clear}
            className="border rounded-lg pl-2 pr-2 text-white"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
