import React from "react";
import QuestionsList from "../Qusetions/QuestionsList";

const BatchAndChapterSelector = ({ setSelectedBatch, setSelectedChapter, batchQuestions }) => {
  const handleChapter = (e) => {
    e.preventDefault();
    console.log("Chapter=", e.target.value);
    setSelectedChapter(e.target.value);
  };

  const handleBatch = (e) => {
    e.preventDefault();
    console.log("Batch=", e.target.value);
    setSelectedBatch(e.target.value);
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg border border-gray-200">
      <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">📘 Select Batch & Chapter</h1>

      {/* Dropdowns */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Batch Selector */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Batch</label>
          <select
            onChange={handleBatch}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          >
            <option value="">--Select Batch--</option>
            <option value="Ten">দশম শ্রেণি</option>
            <option value="Nine">নবম শ্রেণি</option>
          </select>
        </div>

        {/* Chapter Selector */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">Select Chapter</label>
          <select
            onChange={handleChapter}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-800 focus:ring-2 focus:ring-green-400 focus:border-green-400 transition"
          >
            <option value="">--Select Chapter--</option>
            <option value="ChapterTen">স্থির তড়িৎ</option>
            <option value="SoundAndWave">শব্দ ও তরঙ্গ</option>
          </select>
        </div>
      </div>

      {/* Questions Section */}
      {batchQuestions && (
        <div className="mt-8">
          <QuestionsList questions={batchQuestions} />
        </div>
      )}
    </div>
  );
};

export default BatchAndChapterSelector;
