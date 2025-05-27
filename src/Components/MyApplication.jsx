import React, { use } from "react";

import { authcontext } from "../Contenxt/Authcontext";
import Applicationlist from "./Applicationlist";

const MyApplication = () => {
  const { User } = use(authcontext);
  console.log(User?.email);
  return (
    <div>
      <Applicationlist email={User?.email}></Applicationlist>
    </div>
  );
};

export default MyApplication;
