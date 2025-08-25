import React from "react";

const BatchAndChapterSelector = ({ setSelectedBatch, setSelectChapter }) => {

 const handleChapter = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    setSelectChapter(e.target.value)
 }; 
  return (
    <div>
      <div className="batchSelection">
        <select name="" id="">
          <option value="Ten">Ten</option>
        </select>
      </div>
      <div className="ChapterSelection">
        <select name="" id="" onChange={handleChapter}>
          <option value="ChapterTen">স্থির তড়িৎ </option>
          <option value="SoundAndWave">শব্দ ও তরঙ্গ</option>
        </select>
      </div>
    </div>
  );
};

export default BatchAndChapterSelector;
