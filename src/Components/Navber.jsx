import React, { use } from "react";
import { NavLink, useNavigate } from "react-router";
import { authcontext } from "../Contenxt/Authcontext";
import { toast } from "react-toastify";

const Navber = () => {
  const { User, signout, setUser } = use(authcontext);
  const navigate = useNavigate();
  const handlesignout = () => {
    return signout().then(() => {
      navigate("/");
      toast.success("Your are sign out");
      setUser(null);
    });
  };
  return (
    <nav className="flex justify-between m-5">
      <div className="flex justify-center ">
        <img src="icon.jpg" className="w-8 h-8" alt="LOGO" />
        <strong className="text-blue-500">CRUD</strong>
      </div>
      <div>
        <NavLink to="/" className="  hover:text-blue-500 hover:underline">
          Home
        </NavLink>
        {User && (
          <>
            <NavLink
              to="/MyApplication"
              className=" ml-5 hover:text-blue-500 hover:underline"
            >
              My Application
            </NavLink>
          </>
        )}
      </div>
      <div>
        {User ? (
          <div>
            <button className="btn " onClick={() => handlesignout()}>
              LogOut
            </button>
            <span className="text-blue-500 font-bold ml-4">
              {User?.displayName || "No Name Found"}
            </span>
          </div>
        ) : (
          <>
            <div className="flex justify-center gap-2">
              <NavLink
                className="border p-1 hover:text-blue-500 hover:underline"
                to="/login"
              >
                Login
              </NavLink>
              <NavLink
                className="border p-1 hover:text-blue-500  hover:underline"
                to="/Register"
              >
                Register
              </NavLink>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navber;
