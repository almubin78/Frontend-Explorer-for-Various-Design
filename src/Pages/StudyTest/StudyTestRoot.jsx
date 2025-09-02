import SettingsPanel from "./components/SettingPanel/SettingsPanel";
import { useSessionManager } from "./hooks/useSessionManager";

const StudyTestRoot = () => {
  const {
    // state
    
    setSelectedBatch,
    setSelectedChapter,
    chapterQuestions,
    additionalTask,
   selectRandomStudent,
   currentStudent
  } = useSessionManager();

console.log(additionalTask,'additional tasks');
  return (
    <div className="relative min-h-screen bg-gray-50 text-blue-600">
       
       <SettingsPanel 
       batchQuestions={chapterQuestions}
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
