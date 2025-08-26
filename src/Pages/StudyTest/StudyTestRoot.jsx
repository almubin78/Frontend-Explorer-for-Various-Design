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

console.log('current students=',currentStudents);
  return (
    <div className="relative min-h-screen bg-gray-50 text-blue-600">
       
       <SettingsPanel 
       selectedBatch={selectedBatch} 
       batchQuestions={batchQuestions}
       setSelectedBatch={setSelectedBatch}
       setSelectedChapter={setSelectedChapter}
       
       />
        {/* for test purpose */}
       <button className="btn" onClick={selectRandomStudent}>Test Random Students `selectRandomStudent` </button>
    </div>
  );
};

export default StudyTestRoot;
