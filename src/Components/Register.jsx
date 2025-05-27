import React, { use } from "react";
import { authcontext } from "../Contenxt/Authcontext";
import { toast } from "react-toastify";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router";
import { FaGoogle } from "react-icons/fa6";
const Register = () => {
  const { User, googlesignIn, setUser, userWithEmail } = use(authcontext);
  const Navigate = useNavigate();
  const handleSignUP = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const password = from.password.value;
    const userValue = { name, email };
    console.log("btn clicked", name, email, password);

    userWithEmail(email, password)
      .then((userCredential) => {
        console.log(userCredential);
        const user = userCredential.user;

        return updateProfile(user, {
          displayName: name,
          email: email,
        }).then(() => {
          toast.success("Sucssefully Creat Your Account");
          setUser(user);
          Navigate("/");
        });
      })
      .catch((error) => {
        toast.error("!Somethign Is Problem Please Wait ");
      });
  };
  const googleLogin = () => {
    googlesignIn()
      .then((result) => {
        const user = result.user;
        setUser(user);
        Navigate("/");
        toast.success("you have successfully Signup ");
      })
      .catch((error) => {
        toast.error("error.message");
        console.log(error);
      });
  };
  return (
    <div className="h-full mx-auto bg-gray-300 flex justify-center items-center ">
      <div className="bg-white p-10 rounded-2xl shadow-md w-full max-w-md">
        <div className="text-center text-4xl capitalize font-bold">
          <h1>Login Here</h1>
        </div>
        <form
          onSubmit={handleSignUP}
          className="flex flex-col justify-cente items-centerr gap-4 mt-10 w-full bg-white"
        >
          <div>
            <label className="block font-semibold mb-2"> Name</label>
            <input
              className="
            
            border border-gray-300 rounded-md w-full p-3 outline-gray-100
            "
              name="name"
              type="text"
              placeholder="name"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2"> Email</label>
            <input
              name="email"
              className=" border border-gray-300 rounded-md w-full p-3 outline-gray-100
            "
              type="Email"
              placeholder="Email"
            />
          </div>
          <div>
            <label className="block font-semibold mb-2"> password</label>
            <input
              className="
            
            border border-gray-300 rounded-md w-full p-3 outline-gray-100
            "
              name="password"
              type="password"
              placeholder="password"
            />
          </div>
          <button
            type="submit"
            className="p-3 rounded-3xl border border-gray-300 bg-blue-600 text-white"
          >
            Submit
          </button>
        </form>
        {/* <!-- Google --> */}
        <button
          onClick={googleLogin}
          className="btn w-full border-2 bg-white text-black border-[#e5e5e5]"
        >
          <FaGoogle className="text-yellow-400" />
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
