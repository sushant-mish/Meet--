import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoginPage from "./authpages/LoginPage/LoginPage";
import RegisterPage from "./authpages/RegisterPage/RegisterPage";
import Dashboard from "./Dashboard/Dashboard";

import "./App.css";
import AlertNotification from "./Shared/components/AlertNotification";

function App() {
  return (
    <>
      <React.Fragment>
        <Router>
          <Routes>
            <Route exact path='/login' element={<LoginPage />} />
            <Route exact path='/register' element={<RegisterPage />} />
            <Route exact path='/dashboard' element={<Dashboard />} />
            <Route exact path='/' element={<Dashboard />} />
          </Routes>
        </Router>
      </React.Fragment>
      <AlertNotification />
    </>
  );
}

export default App;
