import React, { Children, use } from "react";
import { authcontext } from "../Contenxt/Authcontext";
import { Navigate, useLocation } from "react-router";

const PrivetRout = ({ children }) => {
  const { User, Loadign, setLoadign } = use(authcontext);
  const location = useLocation();

  if (Loadign) {
    return <div className="text-center mt-20">Loading...</div>; // 🔄 wait for auth status
  }
  if (!User) {
    return (
      <Navigate to="/Register" state={{ from: location }} replace></Navigate>
    );
  }
  return children;
};

export default PrivetRout;
