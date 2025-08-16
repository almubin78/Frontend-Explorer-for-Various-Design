import { useEffect, useState } from "react";

import NavbarForStudyTest from "./NavbarForStudyTest";
import { Outlet } from "react-router-dom";

const StudyTestHome = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  

  //set student when batch changes
  useEffect(()=>{

  },[selectedBatch])

  console.log('koire vai');
 
  return (
    <div>
      <NavbarForStudyTest/>
      <Outlet/>     
    </div>
  );
};

export default StudyTestHome;
