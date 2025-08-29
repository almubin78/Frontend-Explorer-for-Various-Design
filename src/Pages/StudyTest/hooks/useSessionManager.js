import { useEffect, useState } from "react";
import { allStudentsData } from "../data/allStudentsData";
import { allQuestionsData } from "../data/allQuestionsData";

export const useSessionManager = () => {
  // Batch and Chapter state
  const [selectedBatch, setSelectedBatch] = useState("");
  const [selectedChapter, setSelectedChapter] = useState("");

  // Data states
  const [batchQuestions, setBatchQuestions] = useState([]);
  const [fullBatchStudent, setFullBatchStudent] = useState([]);

  // Students states
  const [answeredStudents, setAnsweredStudents] = useState([
    // { id: 3, name: "Mehedi", imgLink: "" },
    // { id: 4, name: "Shohel Rana", imgLink: "" },
  ]);
  const [currentStudent, setCurrentStudent] = useState(null);

  // Load students & questions when batch/chapter changes
  useEffect(() => {
    if (selectedBatch && selectedChapter) {
      const batchStudents = allStudentsData[selectedBatch];
      const questions = allQuestionsData[selectedChapter];

      setFullBatchStudent(batchStudents.map((s) => ({ ...s, present: true })));
      setBatchQuestions(questions);
    }
  }, [selectedBatch, selectedChapter]);

  // Select random student (call manually when needed)
  const selectRandomStudent = () => {
    const availableStudents = fullBatchStudent
      .filter((s) => s.present)
      .filter((p) => !answeredStudents.some((a) => a.id === p.id));
    console.log('availableStudents.length==',availableStudents.length);
    if (availableStudents.length === 0) {
      setCurrentStudent(null); // no one left
      return;
    }

    const randomStudent =
      availableStudents[Math.floor(Math.random() * availableStudents.length)];

    setCurrentStudent(randomStudent);
    console.log("Random student:", randomStudent);
  };
  const selectRandomQuestions = () => {
    if (!selectedBatch || !allQuestionsData[selectedChapter]) return;
    const shuffled = [...allQuestionsData[selectedChapter]].sort(
      () => 0.5 - Math.random()
    );
    setBatchQuestions(shuffled.slice(0, 5));
  };



  return {
    // State
    selectedBatch,
    setSelectedBatch,
    selectedChapter,
    setSelectedChapter,
    batchQuestions,
    fullBatchStudent,
    answeredStudents,
    setAnsweredStudents,
    currentStudent,

    // Functions
    selectRandomStudent,
  };
};
