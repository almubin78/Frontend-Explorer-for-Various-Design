import React, { useState } from "react";



import AnsweredStudents from "./components/AnswerdStudents/AnsweredStudents";
import QuestionsList from "./components/Qusetions/QuestionsList";
import SettingsPanel from "./components/SettingPanel/SettingsPanel";
import NewTasks from "./components/ExtraTasks/NewTasks";
import AttendanceList from "./components/AttendanceList/AttendanceList";
import StudentTimerPanel from "./components/StudentTimerPanel/StudentTimerPanel";
import { useSessionManager } from "./hooks/useSessionManager";

const StudyTestRoot = () => {
  const {
    selectedBatch,selectChapter, setSelectedBatch,batchStudents,
    presentStudents, currentQuestions,
    currentStudent, answeredStudents,
    newTasks, sessionStatus, setSessionStatus,
    studentTimeLimit, setStudentTimeLimit,
    toggleStudentAttendance, confirmAttendanceAndStart,
    handleTimeUp,setSelectChapter
  } = useSessionManager();
  //   console.log("selectChapter===", selectChapter);
  // console.log("selectedBatch===", selectedBatch);
  // console.log("newTasks===", newTasks);
  // console.log("answeredStudents===", answeredStudents);
  // console.log("currentStudent===", currentStudent);
  // console.log("presentStudents===", presentStudents);
  // console.log("batchStudents===", batchStudents);
  // console.log("currentQuestions===", currentQuestions);

  const [isPaused, setIsPaused] = useState(false);
  const [showBatchSelector, setShowBatchSelector] = useState(false);

  const presentCount = presentStudents.filter((s) => s.present).length;
  const answeredCount = answeredStudents.length;

  return (
    <div className="relative min-h-screen bg-gray-50">
      {/* Settings Toggle */}
      <button
        onClick={() => setShowBatchSelector(!showBatchSelector)}
        className="fixed left-0 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-r-lg z-20"
      >
        {showBatchSelector ? "◄" : "⚙️"}
      </button>

      {/* Settings Sidebar */}
      {showBatchSelector && (
        <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg z-10 p-4">
          <SettingsPanel
            selectedBatch={selectedBatch}
            setSelectChapter={setSelectChapter}
            setSelectedBatch={setSelectedBatch}
            studentTimeLimit={studentTimeLimit}
            setStudentTimeLimit={setStudentTimeLimit}
            onConfirm={() => {
              setShowBatchSelector(false);
              setSessionStatus("attendance");
            }}
            buttonText="Confirm Attendance"
          />
        </div>
      )}

      {/* Main Area */}
      <div className={`transition-all ${showBatchSelector ? "ml-64" : "ml-0"}`}>
        {sessionStatus === "setup" && (
          <div className="max-w-md mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Student Assessment Setup
            </h1>
            <SettingsPanel
              selectedBatch={selectedBatch}
              setSelectedBatch={setSelectedBatch}
              studentTimeLimit={studentTimeLimit}
              setStudentTimeLimit={setStudentTimeLimit}
              onConfirm={() => setSessionStatus("attendance")}
              buttonText="Confirm Attendance"
            />
          </div>
        )}

        {sessionStatus === "attendance" && (
          <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">
              Mark Present Students
            </h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-lg font-semibold mb-2">
                {selectedBatch} Batch ({presentCount}/{presentStudents.length} present)
              </h2>
              <AttendanceList students={presentStudents} onToggle={toggleStudentAttendance} />
              <button
                onClick={confirmAttendanceAndStart}
                className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded mt-4"
              >
                Start Test
              </button>
            </div>
          </div>
        )}

        {sessionStatus === "active" && (
          <div className="max-w-6xl mx-auto p-4">
            {currentStudent && (
              <StudentTimerPanel
                student={currentStudent}
                batch={selectedBatch}
                timeLimit={studentTimeLimit}
                isPaused={isPaused}
                onTimeUp={handleTimeUp}
                onTogglePause={() => setIsPaused(!isPaused)}
              />
            )}

            {currentStudent && (
              <div className="mt-4 max-w-3xl mx-auto">
                <QuestionsList questions={currentQuestions} />
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              <AnsweredStudents answeredStudents={answeredStudents} presentCount={presentCount} />
              <NewTasks newTasks={newTasks} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudyTestRoot;
