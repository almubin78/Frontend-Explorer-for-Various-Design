import React from "react";

const BatchAndChapterSelector = ({ setSelectedBatch, setSelectChapter }) => {

 const handleChapter = (e) => {
    e.preventDefault();
    console.log('Chapter=',e.target.value);
    
    setSelectChapter(e.target.value)
 }; 
 const handleBatch = (e) => {
    e.preventDefault();
    console.log('batch',e.target.value);
    setSelectedBatch(e.target.value)
 }; 
  return (
    <div>
      <div className="batchSelection">
        <select onChange={handleBatch} name="" id="">
          <option value="Ten">দশম শ্রেণি</option>
          <option value="Nine">নবম শ্রেণি</option>
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
