import React, { useState } from "react";
import SettingForStudyTest from "./SettingForStudyTest";

const TestHome = () => {
  const [showBatchSelector, setShowBatchSelector] = useState(false);
  const [selectedBatch, setSelectedBatch] = useState(null);
  const [timeLimit, setTimeLimit] = useState(null);

  console.log(selectedBatch);
  return (
    <div className="relative min-h-screen bg-gray-50">
      <button
        className="rounded-r-lg z-20 fixed bg-blue-600"
        onClick={() => setShowBatchSelector(!showBatchSelector)}
      >
        {showBatchSelector ? "◄" : "⚙️"}
      </button>
      {/* Main Content */}
      <div className={`transition-all ${showBatchSelector ? "ml-64" : "ml-0"}`}>
        <h1>test home for student</h1>
        <SettingForStudyTest 
            selectedBatch={selectedBatch}
            setSelectedBatch={setSelectedBatch}
            buttonText = 'Confirm Attendance'
        />
      </div>
    </div>
  );
};

export default TestHome;
