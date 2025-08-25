import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import { allClassesQuestionsData } from "../../data/questionsData";
import { studentsData } from "../../data/allStudentsData";
import BatchAndChapterSelector from "./components/BatchAndChapterSelector/BatchAndChapterSelector";
import QuestionsList from "./components/Qusetions/QuestionsList";

const StudyTestRoot = () => {
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectChapter, setSelectChapter] = useState("");
  const [chapterQuestions, setChapterQuestions] = useState([]);
  const [batchStudents, setBatchStudents] = useState([]);
  const [addPresentStudents, setAddPresentStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  //

  useEffect(() => {
    if (selectedBatch && studentsData[selectedBatch]) {
      const batchStudent = studentsData[selectedBatch];
      const batchQuestions = allClassesQuestionsData[selectChapter];
      setBatchStudents(batchStudent);
      setChapterQuestions(batchQuestions);
      //add present:true to each students
      setAddPresentStudents(
        batchStudents.map((student) => ({ ...student, present: true }))
      );
    }
  }, [selectedBatch, selectChapter]);
  // console.log(batchStudents,'==batchStudents');
  console.log(chapterQuestions, "==chapterQuestions");
  console.log(selectChapter, "==selectChapter");
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
      <BatchAndChapterSelector
        setSelectedBatch={setSelectedBatch}
        setSelectChapter={setSelectChapter}
      />
      
      <QuestionsList questions={chapterQuestions}/>
      <Outlet />
    </div>
  );
};

export default StudyTestRoot;
