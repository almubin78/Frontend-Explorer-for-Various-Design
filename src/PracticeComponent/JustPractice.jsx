import React, { useEffect, useState } from "react";
import { studentsData } from "../data/allStudentsData";
import { allClassesQuestionsData } from "../data/questionsData";

const JustPractice = () => {
  const [selectedBatch, setSelectedBatch] = useState("Ten");
  const [batchStudents, setBatchStudents] = useState([]);
  const [batchQuestions, setBatchQuestions] = useState([]);
  const [presentStudents, setPresentStudents] = useState([]);

  useEffect(() => {
    if (selectedBatch && studentsData[selectedBatch]) {
      const batchStudents = studentsData[selectedBatch];
      const batchQuestions = allClassesQuestionsData[selectedBatch];
      setBatchStudents(batchStudents);
      setBatchQuestions(batchQuestions);
      setPresentStudents(
        batchStudents.map((student) => ({ ...student, present: true }))
      );
    }
  }, [selectedBatch]);

  console.log(batchQuestions, batchStudents);
  // Function to select a random student who hasn't answered yet
  

  return <>this is for practice</>;
};

export default JustPractice;
