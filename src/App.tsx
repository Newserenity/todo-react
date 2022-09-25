import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./page/Main";
import NotFound from "./page/NotFound";
import Profile from "./page/Profile";
import LocalSignUp from "./page/auth/LocalSignUp";
import LocalSignIn from "./page/auth/LocalSignIn";
import LoginOption from "./page/auth/LoginOption";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login/*" element={<LoginOption />} />
          <Route path="/login/local" element={<LocalSignIn />} />
          <Route path="/login/join" element={<LocalSignUp />} />
          <Route path="/profile/*" element={<Profile />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
