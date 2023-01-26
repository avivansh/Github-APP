import React, { useState, useContext } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// react-router
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

// firebase
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// components
import Home from "./Pages/Home";
import SignIn from "./Pages/Signin";
import SignOut from "./Pages/Signup";
import PageNotFound from "./Pages/PageNotFound";
import { UserContext } from "./Context/UserContext";
import Footer from "./layout/footer";
import Header from "./layout/header";
import FirebaseConfig from "./Config/FirebaseConfig";
// init firebase
firebase.initializeApp(FirebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignOut />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
