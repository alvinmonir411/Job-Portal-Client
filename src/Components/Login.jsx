import { use, useContext } from "react";
import { authcontext } from "../Contenxt/Authcontext";
import Lottie from "lottie-react";
import animation from "../assets/lotti/animation.json";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router";

const Login = () => {
  const { User, googlesignIn, setUser, userWithEmail } = use(authcontext);
  const Navigate = useNavigate();
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
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <Lottie animationData={animation} loop={true}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>{" "}
            {/* <!-- Google --> */}
            <button
              onClick={googleLogin}
              className="btn w-full border-2 bg-white text-black border-[#e5e5e5]"
            >
              <FaGoogle className="text-yellow-400" />
              Login with Google
            </button>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default Login;
