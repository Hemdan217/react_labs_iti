import { useContext } from "react";
import { authContext } from "./../contextAPI/context.js";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useContext(authContext);
  console.log(auth);
  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
