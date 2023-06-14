export { default as Header } from "./Header/Header.js";
export { default as Footer } from "./Footer/Footer.js";
import Login from "./Login/Login.js";
import Register from "./Register/Register.js";
import ToDo from "./ToDo/ToDo.js";
import { Routes, Route } from "react-router-dom";
import React from "react";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </>
  );
}
