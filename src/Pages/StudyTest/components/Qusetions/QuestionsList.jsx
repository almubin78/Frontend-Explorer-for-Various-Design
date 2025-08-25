import React, { useState } from "react";

const QuestionsList = ({ questions }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleShowAnswer = (answer) => {
    setSelectedAnswer(answer);
  };

  const closeModal = () => {
    setSelectedAnswer(null);
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="p-4 text-gray-500 italic">
        No questions available for this chapter.
      </div>
    );
  }

  return (
    <div className="mt-6 p-4 bg-white shadow rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Questions</h2>
      <ul className="space-y-4">
        {questions.map((q, index) => (
          <li
            key={index}
            className="p-3 border border-gray-200 rounded-lg shadow-sm"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium text-gray-700">{index + 1}.</span>{" "}
                <span className="ml-2 text-gray-800">{q.question}</span>
              </div>
              <button
                onClick={() => handleShowAnswer(q.answer)}
                className="ml-4 px-3 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                Show Answer
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Answer Modal */}
      {selectedAnswer && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-md w-full">
            <h3 className="text-lg font-bold text-gray-800 mb-4">
              Answer
            </h3>
            <p className="text-gray-700">{selectedAnswer}</p>
            <div className="flex justify-end mt-6">
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuestionsList;
