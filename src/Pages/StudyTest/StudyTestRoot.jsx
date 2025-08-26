import SettingsPanel from "./components/SettingPanel/SettingsPanel";
import { useSessionManager } from "./hooks/useSessionManager";

const StudyTestRoot = () => {
  const {
    // state
    selectedBatch,
    setSelectedBatch,
    // selectChapter,
    selectedChapter,
    setSelectedChapter,
    batchQuestions,
    currentQuestions,
   fullBatchStudent,
   selectRandomStudent,
   currentStudents
  } = useSessionManager();


// console.log(
//     selectedBatch,
//     setSelectedBatch,
//     selectedChapter,
//     setSelectedChapter,
//     batchQuestions,
//     currentQuestions,
//    fullBatchStudent);
console.log(currentStudents);
  return (
    <div className="relative min-h-screen bg-gray-50 text-blue-600">
       home page /root page
       <SettingsPanel 
       selectedBatch={selectedBatch} 
       batchQuestions={batchQuestions}
       setSelectedBatch={setSelectedBatch}
       setSelectedChapter={setSelectedChapter}
       
       />
    </div>
  );
};

export default StudyTestRoot;
