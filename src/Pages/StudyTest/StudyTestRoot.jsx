import SettingsPanel from "./components/SettingPanel/SettingsPanel";
import { useSessionManager } from "./hooks/useSessionManager";

const StudyTestRoot = () => {
  const {
    // state
    selectedBatch,
    setSelectedBatch,
    setSelectedChapter,
    batchQuestions,
    currentQuestions,
   fullBatchStudent,
   selectRandomStudent,
   currentStudent
  } = useSessionManager();

console.log('current students=',currentStudent,'batchQuestions',batchQuestions);
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
       <h1>Current Students: {currentStudent?.name}</h1>
    </div>
  );
};

export default StudyTestRoot;
