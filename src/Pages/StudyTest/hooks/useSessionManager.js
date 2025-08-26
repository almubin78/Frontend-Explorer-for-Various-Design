import { useEffect, useState } from "react";
import { allStudentsData } from "../data/allStudentsData";
import { allQuestionsData } from "../data/allQuestionsData";

export const useSessionManager = () => {
  // Batch and Chapter state
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");
// data state
  const [batchQuestions, setBatchQuestions] = useState([]);
  const [fullBatchStudent, setFullBatchStudent] = useState([]);
// for randomSelect Students
  const [answeredStudents, setAnsweredStudents] = useState([]);
  const [currentStudents, setCurrentStudents] = useState([]);
  // useEffect
  useEffect(() => {
    if (selectedBatch && selectedChapter) {
      const batch = allStudentsData[selectedBatch];
      const questions = allQuestionsData[selectedChapter];
      setFullBatchStudent(batch.map((s)=>({...s,present:true})));
      setBatchQuestions(questions);
    }
  }, [selectedBatch, selectedChapter]);

  // console.log(fullBatchStudent, "fullBatchStudent");
  // console.log(batchQuestions, "batchQuestions");

 const selectRandomStudent = () =>{
  const availableStudents = fullBatchStudent
  .filter((s)=>s.present)
  .filter((p)=>console.log(p));
  const randomStudents = fullBatchStudent[Math.floor(Math.random()*availableStudents.length)]
  setCurrentStudents(randomStudents)
  console.log(randomStudents);
 }
 if(currentStudents){
  selectRandomStudent()
 }
  return {
    // state
    selectedBatch,
    setSelectedBatch,
    // selectChapter,
    selectedChapter,
    setSelectedChapter,
    batchQuestions,
    fullBatchStudent,
    selectRandomStudent,
    currentStudents
    
  };
};
