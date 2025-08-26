import React from 'react';
import BatchAndChapterSelector from '../BatchAndChapterSelector/BatchAndChapterSelector';

const SettingsPanel = ({ setSelectedBatch, setSelectChapter,setSelectedChapter,batchQuestions }) => {
    return (
        <div>
            
            <BatchAndChapterSelector
                setSelectedBatch={setSelectedBatch}
                setSelectChapter={setSelectChapter}
                setSelectedChapter={setSelectedChapter}
                batchQuestions={batchQuestions}
            />
        </div>
    );
};

export default SettingsPanel;