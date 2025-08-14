import { useEffect, useState } from "react";
import AttendantList from "./ChildComponents/AttendantList";
import QuestionPanel from "./ChildComponents/QuestionPanel";
import BatchSelector from "./ChildComponents/BatchSelector";

const StudyTestHome = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  

  //set student when batch changes
  useEffect(()=>{

  },[selectedBatch])

  
 
  return (
    <div>
      <BatchSelector/>
      <div className="attendantListArea">
        <AttendantList />
      </div>
      <div className="QuestionsArea">
        <QuestionPanel />
      </div>

      
      
    </div>
  );
};

export default StudyTestHome;
