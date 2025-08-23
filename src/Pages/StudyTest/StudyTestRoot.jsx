import { useEffect, useState } from "react";
import { StudentInfoData } from "./datas/StudentInfoData/StudentsInfo";
import { Outlet } from "react-router-dom";

const StudyTestRoot = () => {
  const [selectedBatch, setSelectedBatch] = useState("Nine");
  const [batchStudents, setBatchStudents] = useState([]);
  const [presentStudents, setPresentStudents] = useState([]);
  //
  
  useEffect(() => {
    if (selectedBatch && StudentInfoData[selectedBatch]) {
      const batchStudents = StudentInfoData[selectedBatch];
      setBatchStudents(batchStudents);
      setPresentStudents(
        batchStudents.map((student) => ({ ...student, present: true }))
      );
    }
  }, [selectedBatch]);
  

  //selectRandomStudent
  const [answeredStudents, setAnsweredStudents] = useState([]);

  const selectRandomStudent = () => {
    const presentAndUnanswered = presentStudents
      .filter((student) => student.present)
      .filter((student) => !answeredStudents.some((s) => s.id === student.id));
    // console.log("presentAndUnanswered==", presentAndUnanswered);
  };
  
//   selectRandomStudent()

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

  return <div>
    <h1>This is StudyTest root file</h1>
    <Outlet/>
  </div>;
};

export default StudyTestRoot;
