import React from "react";
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

const App = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <Router>
        <Routes>
          <Route element={<WithHeader />}>
            <Route path="/" exact element={<Home />} />
            <Route
              path="/home"
              exact
              element={localStorage.length === 0 ? <Auth /> : <HomePage />}
            />
            <Route
              path="/add"
              element={localStorage.length === 0 ? <Auth /> : <AddForm />}
            />
            <Route
              path="/members"
              exact
              element={localStorage.length === 0 ? <Auth /> : <ViewMembers />}
            />
            <Route
              path="/members/update/:id"
              element={localStorage.length === 0 ? <Auth /> : <UpdateMember />}
            />
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
