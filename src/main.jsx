import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./Components/Router.jsx";
import Authprovider from "./Contenxt/Authprovider.jsx";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Authprovider>
      <ToastContainer />
      <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </StrictMode>
);
