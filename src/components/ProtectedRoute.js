import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ isAuth }) => {
  return isAuth === false ? <Navigate to="/" /> : <Outlet />;
};
export default ProtectedRoute;
