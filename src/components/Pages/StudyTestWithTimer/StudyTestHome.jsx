import { useEffect, useState } from "react";

const StudyTestHome = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [batchQuestions, setBatchQuestions] = useState([]);
  const [newTasks, setNewTasks] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [answeredStudent, setansweredStudent] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [presentStudents, setPresentStudents] = useState([]);

  console.log({
    selectedBatch ,
    batchQuestions,
    newTasks,
    currentQuestions,
    answeredStudent,
    currentStudent,
    presentStudents,
  });

  //set student when batch changes
  useEffect(()=>{

  },[selectedBatch])

  
  //From Batch Selector
  const handleSelectBatch = (event) => {
    setSelectedBatch(event.target.value);
  };
  return (
    <div>

      {/* From Batch Selector */}
      <div className="batch-selector">
        <label htmlFor="batch">Select Batch:</label>
        <select id="batch" onChange={handleSelectBatch}>
          <option value="">--Select a Batch--</option>
          <option value="Ten">Ten</option>
          <option value="Nine">Nine</option>
          <option value="Eight">Eight</option>
          <option value="Seven">Seven</option>
        </select>
      </div>
    </div>
  );
};

export default StudyTestHome;
