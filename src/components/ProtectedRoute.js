import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
  return isAuth === "admin" || "user" ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
