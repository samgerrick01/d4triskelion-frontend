import React, { useState, useEffect } from "react";
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

const App = () => {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    if (localStorage.length === 0) {
      setIsAuth(null);
    } else {
      var result = JSON.parse(localStorage.getItem("profile")).result.userType;
      setIsAuth(result);
    }
    console.log(isAuth);
  });
  return (
    <div className="flex justify-center items-center flex-col">
      <Router>
        <Routes>
          <Route element={<WithHeader />}>
            <Route path="/" exact element={<Home />} />
          </Route>
          <Route element={<ProtectedRoute isAuth={isAuth} />}>
            <Route element={<WithHeader />}>
              <Route
                path="/home"
                exact
                element={<HomePage isAuth={isAuth} />}
              />
              <Route path="/add" element={<AddForm isAuth={isAuth} />} />
              <Route
                path="/members"
                exact
                element={<ViewMembers isAuth={isAuth} />}
              />
              <Route
                path="/members/update/:id"
                element={<UpdateMember isAuth={isAuth} />}
              />
            </Route>
          </Route>
          <Route element={<WithOutHEader />}>
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/auth/register" exact element={<Register />} />
            <Route path="/members/viewmember/:id" element={<SingleMember />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
