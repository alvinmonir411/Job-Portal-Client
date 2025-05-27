import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Jobs from "./Jobs";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "Register",
        Component: Register,
      },
      {
        index: true,
        Component: Jobs,
      },
    ],
  },
]);
