import { useState } from "react";

const StudyTestHome = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [batchQuestions, setBatchQuestions] = useState([]);
  const [newTasks, setNewTasks] = useState([]);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [answeredStudent, setansweredStudent] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [presentStudents, setPresentStudents] = useState([]);

  console.log({
    selectedBatch,
    batchQuestions,
    newTasks,
    currentQuestions,
    answeredStudent,
    currentStudent,
    presentStudents,
  });

  //

  return (
    <div>
      <h2>This is Study Test Home</h2>
    </div>
  );
};

export default StudyTestHome;
