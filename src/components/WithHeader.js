import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const WithHeader = ({ setIsAuth }) => {
  return (
    <>
      <Header setIsAuth={setIsAuth} />
      <Outlet />
    </>
  );
};

export default WithHeader;
