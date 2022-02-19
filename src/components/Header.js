import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import d4logo from "../images/d4logo.png";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import * as actionType from "../constants/actionTypes";
import { Typography } from "@mui/material";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "./style.css";

const Reload = () => {
  window.location.reload(false);
};

const Header = ({ setIsAuth }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [toggle, setToggle] = useState(false);

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/");
    setUser(null);
    setIsAuth(false);
    Reload();
  };

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) logout();
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  return (
    <div
      className="container p-3 mt-4 mb-4 rounded bg-slate-100 mx-auto text-center font-bold flex items-center justify-between
      desktop:rounded-xl
      laptop:rounded-lg
      tablet:rounded-md
      mobile:rounded-sm "
    >
      <div>
        <img className="w-16 mobile:w-10" src={d4logo} alt="d4" />
      </div>
      <label className="text-5xl mobile:text-xl laptop:text-4xl tablet:text-3xl">
        District IV Chapter
      </label>

      <div className="toolBar">
        {user?.result ? (
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "400px",
              gap: "10px",
            }}
          >
            <Typography
              style={{
                textDecoration: "bold",
                display: "flex",
                alignItems: "center",
              }}
              variant="h6"
            >
              Welcome(<b>{user?.result.userName.toUpperCase()}</b>)
            </Typography>
            <button
              onClick={logout}
              className="border border-black rounded-lg pl-2 pr-2 text-lg bg-red-400"
            >
              Log Out
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate("/auth");
            }}
            className="border border-black rounded-lg pl-2 pr-2 text-lg bg-blue-400"
          >
            Sign In
          </button>
        )}
      </div>

      <div className="hidden tablet:flex mobile:flex">
        {toggle ? (
          <RiCloseLine
            color="#000"
            size={27}
            onClick={() => setToggle(false)}
          />
        ) : (
          <RiMenu3Line color="#000" size={27} onClick={() => setToggle(true)} />
        )}
      </div>
      {toggle && (
        <div
          className="absolute origin-top-right mt-2 top-16 right-16 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opa divide-y divide-gray-100 focus:outline-none 
        tablet:right-44 tablet:top-24"
        >
          <div className="group flex items-center justify-center px-4 py-2 text-sm text-gray-700 hover:bg-indigo-500 hover:text-white">
            <div>
              {user?.result ? (
                <div className="flex flex-col ">
                  <Typography
                    style={{
                      textDecoration: "bold",
                      display: "flex",
                      alignItems: "center",
                    }}
                    variant="h6"
                  >
                    Welcome(<b>{user?.result.userName.toUpperCase()}</b>)
                  </Typography>
                  <button
                    onClick={logout}
                    className="border border-black rounded-lg pl-2 pr-2 text-lg bg-red-400"
                  >
                    Log Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => {
                    navigate("/auth");
                  }}
                  className="border border-black rounded-lg pl-2 pr-2 text-lg bg-blue-400"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
