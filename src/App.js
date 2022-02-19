import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleMember from "./components/pages/SingleMember";
import Home from "./components/pages/Home";
import Auth from "./components/auth/Auth";
import Register from "./components/auth/Register";
import HomePage from "./components/pages/HomePage";
import AddForm from "./components/pages/AddForm";
import ViewMembers from "./components/pages/ViewMembers";
import UpdateMember from "./components/pages/UpdateMember";
import WithHeader from "./components/WithHeader";
import WithOutHEader from "./components/WithOutHEader";
import ProtectedRoute from "./components/ProtectedRoute";
import useLocalStorage from "./components/useLocalStorage";

const App = () => {
  const [isAuth, setIsAuth] = useLocalStorage("isAuth", false);
  return (
    <div className="flex justify-center items-center flex-col">
      <Router>
        <Routes>
          <Route element={<WithHeader setIsAuth={setIsAuth} />}>
            <Route path="/" exact element={<Home />} />
          </Route>
          <Route element={<ProtectedRoute isAuth={isAuth} />}>
            <Route element={<WithHeader setIsAuth={setIsAuth} />}>
              <Route path="/home" exact element={<HomePage />} />
              <Route path="/add" element={<AddForm />} />
              <Route path="/members" exact element={<ViewMembers />} />
              <Route path="/members/update/:id" element={<UpdateMember />} />
            </Route>
          </Route>
          <Route element={<WithOutHEader />}>
            <Route
              path="/auth"
              exact
              element={<Auth setIsAuth={setIsAuth} />}
            />
            <Route path="/auth/register" exact element={<Register />} />
            <Route path="/members/viewmember/:id" element={<SingleMember />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
