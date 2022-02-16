import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import d4logo from "../images/d4logo.png";
import decode from "jwt-decode";
import { useDispatch } from "react-redux";
import * as actionType from "../constants/actionTypes";
import { Avatar, Typography } from "@mui/material";
import "./style.css";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: actionType.LOGOUT });

    navigate("/");

    setUser(null);
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
      className="container p-3 mt-4 mb-4 rounde bg-slate-100 mx-auto text-center font-bold flex items-center justify-between
      desktop:rounded-xl
      laptop:rounded-lg 
      ttablet:rounded-md 
      mobile:rounded-sm "
    >
      <div>
        <img className="w-16" src={d4logo} alt="d4" />
      </div>
      <label className="text-5xl mobile:text-xl">District IV Chapter</label>
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
            <Avatar
              style={{
                color: "#fff",
                backgroundColor: "#000",
              }}
              alt={user?.result.userName}
              src={user?.result.imageUrl}
            >
              {user?.result.name}
            </Avatar>
            <Typography
              style={{
                textDecoration: "bold",
                display: "flex",
                alignItems: "center",
              }}
              variant="h6"
            >
              {user?.result.userName.toUpperCase()}
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
  );
};

export default Header;
