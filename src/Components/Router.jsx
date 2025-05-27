import { createBrowserRouter } from "react-router";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Jobs from "./Jobs";
import Deteils from "./Deteils";
import PrivetRout from "../PrivetRout/PrivetRout";
import Jobapply from "../PrivetRout/Jobapply";
import MyApplication from "./MyApplication";

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
        path: "jobs/:id",
        Component: Deteils,
      },
      {
        path: "MyApplication",
        element: (
          <PrivetRout>
            <MyApplication />
          </PrivetRout>
        ),
      },
      {
        path: "jobapply/:id",
        element: (
          <PrivetRout>
            <Jobapply />
          </PrivetRout>
        ),
      },
      {
        index: true,
        Component: Jobs,
      },
    ],
  },
]);
