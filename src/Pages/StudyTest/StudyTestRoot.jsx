import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { allClassesQuestionsData } from "../../data/questionsData";
import { studentsData } from "../../data/allStudentsData";

const StudyTestRoot = () => {
  const [selectedBatch, setSelectedBatch] = useState("Ten");
  const [selectChapter, setselectChapter] = useState("SoundAndWave");
  const [chapterQuestions, setChapterQuestions] = useState([]);
  const [batchStudents, setBatchStudents] = useState([]);
  const [addPresentStudents, setAddPresentStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  //

  useEffect(() => {
    if (selectedBatch && studentsData[selectedBatch]) {
      const batchStudent = studentsData[selectedBatch];
      const batchQuestions = allClassesQuestionsData[selectChapter]
      setBatchStudents(batchStudent);
      setChapterQuestions(batchQuestions)
      //add present:true to each students
      setAddPresentStudents(
        batchStudent.map((student)=>({...student,present:true}))
      )
    }
  }, [selectedBatch,selectChapter]);
// console.log(batchStudents,'==batchStudents');
console.log(chapterQuestions,'==chapterQuestions');
// console.log(addPresentStudents,'==addPresentStudents');

  

  

  //selectRandomQuestions

  const selectRandomQuestions = () => {};
  //additional task
  const assignRandomTask = () => {};
  // time up for current student
  const handleTimeUp = () => {};
  //toggle student attendance
  const toggleStudentAttendance = () => {};
  // confirm attendance students
  const confirmAttendanceAndStart = () => {};
  //filter out duplicate students

  return (
    <div>
      <h1>This is StudyTest root file</h1>
      <Outlet />
    </div>
  );
};

export default StudyTestRoot;
