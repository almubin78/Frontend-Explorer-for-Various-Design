// import { useState, useEffect } from "react";
// import { studentsData } from "../data/allStudentsData";

// import { additionalTasks } from "../data/additionalTasks";
// import { allClassesQuestionsData } from "../data/allQuestionsData";

// export const useSessionManager = () => {
//   const [selectedBatch, setSelectedBatch] = useState("");
//   const [batchStudents, setBatchStudents] = useState([]);
//   const [selectChapter, setSelectChapter] = useState("ChapterTen");
//   const [presentStudents, setPresentStudents] = useState([]);
//   const [currentQuestions, setCurrentQuestions] = useState([]);
//   const [currentStudent, setCurrentStudent] = useState(null);
//   const [answeredStudents, setAnsweredStudents] = useState([]);
//   const [newTasks, setNewTasks] = useState([]);

//   // session state
//   const [sessionStatus, setSessionStatus] = useState("setup"); // 'setup','attendance','active'
//   const [studentTimeLimit, setStudentTimeLimit] = useState(15);

//   // update students when batch changes
//   useEffect(() => {
//     if (selectedBatch && studentsData[selectedBatch]) {
//       const batch = studentsData[selectedBatch];
//       setBatchStudents(batch);
//       setPresentStudents(batch.map((s) => ({ ...s, present: true })));
//       setCurrentQuestions(allClassesQuestionsData[selectChapter])
//     }
//   }, [selectedBatch,selectChapter]);
//  

//   const selectRandomStudent = () => {
//     const available = presentStudents
//       .filter((s) => s.present)
//       .filter((s) => !answeredStudents.some((a) => a.id === s.id));

//     if (available.length === 0) {
//       setCurrentStudent(null);
//       return;
//     }
//     const random = available[Math.floor(Math.random() * available.length)];
//     setCurrentStudent(random);
//   };

//   const selectRandomQuestions = () => {
//     if (!selectedBatch || !allClassesQuestionsData[selectChapter]) return;
//     const shuffled = [...allClassesQuestionsData[selectChapter]].sort(
//       () => 0.5 - Math.random()
//     );
//     setCurrentQuestions(shuffled.slice(0, 5));
//   };

//   const assignRandomTasks = () => {
//     const batchTasks = additionalTasks[selectChapter] || [];
//     return [...batchTasks].sort(() => 0.5 - Math.random()).slice(0, 5);
//   };

//   const handleTimeUp = () => {
//     if (!currentStudent) return;
//     setAnsweredStudents((prev) => {
//       if (!prev.some((s) => s.id === currentStudent.id)) {
//         setNewTasks((prevTasks) => [
//           ...prevTasks,
//           { student: currentStudent.name, tasks: assignRandomTasks() },
//         ]);
//         return [...prev, currentStudent];
//       }
//       return prev;
//     });

//     selectRandomStudent();
//     selectRandomQuestions();
//   };

//   const toggleStudentAttendance = (id) => {
//     setPresentStudents((prev) =>
//       prev.map((s) => (s.id === id ? { ...s, present: !s.present } : s))
//     );
//   };

//   const confirmAttendanceAndStart = () => {
//     if (presentStudents.filter((s) => s.present).length === 0) {
//       alert("Please mark at least one student present");
//       return;
//     }
//     setSessionStatus("active");
//     selectRandomStudent();
//     selectRandomQuestions();
//   };

//   return {
//     // state
//     selectedBatch,
//     selectChapter,
//     setSelectedBatch,
//     batchStudents,
//     presentStudents,
//     currentQuestions,
//     currentStudent,
//     answeredStudents,
//     newTasks,
//     sessionStatus,
//     setSessionStatus,
//     studentTimeLimit,
//     setStudentTimeLimit,
//     setSelectChapter,
//     // actions
//     selectRandomStudent,
//     selectRandomQuestions,
//     handleTimeUp,
//     toggleStudentAttendance,
//     confirmAttendanceAndStart,
//   };
// };
