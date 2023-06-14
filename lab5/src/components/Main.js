export { default as Header } from "./Header/Header.js";
export { default as Footer } from "./Footer/Footer.js";

import ProtectedRoute from "./ProtectedRoute.js";
import { Routes, Route } from "react-router-dom";
import React, { lazy, Suspense } from "react";
const Logout = lazy(() => import("./Logout/Logout.js"));
const Login = lazy(() => import("./Login/Login"));
const Register = lazy(() => import("./Register/Register.js"));
const Movies = lazy(() => import("./Movie/Movie.js"));
const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails.js"));
const Favorite = lazy(() => import("./Favorite/Favorite.js"));
const NotFound = lazy(() => import("./NotFound/NotFound.js"));
export default function Main() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/login"
          element={
            <Suspense>
              <Login />
            </Suspense>
          }
        />
        <Route
          path="/logout"
          element={
            <Suspense>
              <Logout />
            </Suspense>
          }
        />
        <Route
          path="/register"
          element={
            <Suspense>
              <Register />
            </Suspense>
          }
        />
        <Route
          path="/movies"
          element={
            <Suspense>
              <Movies />
            </Suspense>
          }
        />
        {/* <Route path="/movies/:page" element={<Movies />} /> */}
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route element={<ProtectedRoute />}>
          <Route
            path="/favorite"
            element={
              <Suspense>
                <Favorite />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="/*"
          element={
            <Suspense>
              <NotFound />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
}
