import { useEffect, useState } from "react";
import { allStudentsData } from "../data/allStudentsData";
import { allQuestionsData } from "../data/allQuestionsData";
import { allAdditionalTasks } from "../data/allAdditionalTasks";


export const useSessionManager = () => {
  const [selectedBatch, setSelectedBatch] = useState('');
  const [selectedChapter, setSelectedChapter] = useState('');
  const [markAsTrueForAllStudents, setMarkAsTrueForAllStudents] = useState([]);
  const [chapterQuestions, setChapterQuestions] = useState([]);
  const [additionalTask, setAdditionalTask] = useState([]);
  
  useEffect(()=>{
    if(selectedBatch && selectedChapter && allStudentsData[selectedBatch]){ 
      const students = allStudentsData[selectedBatch];
      setMarkAsTrueForAllStudents(students.map((s)=>({...s,mark:true})));
      setChapterQuestions(allQuestionsData[selectedChapter]);
      setAdditionalTask(allAdditionalTasks[selectedChapter])

    }
  },[selectedBatch,selectedChapter]);



  // console.log(markAsTrueForAllStudents,chapterQuestions);
  return {
    //////// from useEffect
    setSelectedBatch,
    setSelectedChapter,
    //data's from here directly
    selectedBatch,
    chapterQuestions,
    additionalTask,
    ////  random students

  };
};
