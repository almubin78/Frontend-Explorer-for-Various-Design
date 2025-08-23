import { useEffect, useState } from "react";
import { StudentInfoData } from "./datas/StudentInfoData/StudentsInfo";
import { Outlet } from "react-router-dom";

const StudyTestRoot = () => {
  const [selectedBatch, setSelectedBatch] = useState("Nine");
  const [batchStudents, setBatchStudents] = useState([]);
  const [presentStudents, setPresentStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  //

  useEffect(() => {
    if (selectedBatch && StudentInfoData[selectedBatch]) {
      const batchStudent = StudentInfoData[selectedBatch];
      setBatchStudents(batchStudent);
      //add present:true to each students
      setPresentStudents(() => {
        batchStudent.map((student) => ({ ...student, present: true }));
      });
    }
  }, [selectedBatch]);

  const [answeredStudents, setAnsweredStudents] = useState(null);

  const selectRandomStudent = () => {
    const presentAndUnanswered = presentStudents
      .filter((student) => student.present)
      .filter((student) => !answeredStudents.some((s) => s.id === student.id));

    if (presentAndUnanswered.length === 0) {
      setCurrentStudent(null);
      return;
    }
    const randomIndex = Math.floor(Math.random() * presentAndUnanswered.length);
    setCurrentStudent(presentAndUnanswered[randomIndex]);
  };

  setAnsweredStudents((prev) => {
    
  });

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
