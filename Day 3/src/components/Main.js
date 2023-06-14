export { default as Header } from "./Header/Header.js";
export { default as Footer } from "./Footer/Footer.js";
import Login from "./Login/Login.js";
import Logout from "./Logout/Logout.js";
import Register from "./Register/Register.js";
import Movies from "./Movie/Movie.js";
import MovieDetails from "./MovieDetails/MovieDetails.js";
import Favorite from "./Favorite/Favorite.js";
import NotFound from "./NotFound/NotFound.js";
import ProtectedRoute from "./ProtectedRoute.js";
import { Routes, Route } from "react-router-dom";
import React from "react";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="/movies/:page" element={<Movies />} /> */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/favorite" element={<Favorite />} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}
