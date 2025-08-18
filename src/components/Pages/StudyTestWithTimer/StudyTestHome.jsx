import { useEffect, useState } from "react";

import NavbarForStudyTest from "./NavbarForStudyTest";
import { Outlet } from "react-router-dom";

const StudyTestHome = () => {
 
  return (
    <div>
      <NavbarForStudyTest/>
      <Outlet/>     
    </div>
  );
};

export default StudyTestHome;
