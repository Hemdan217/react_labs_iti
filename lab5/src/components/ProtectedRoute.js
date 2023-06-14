import { useContext } from "react";
import { authContext } from "./../contextAPI/context.js";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { auth } = useContext(authContext);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoute;
