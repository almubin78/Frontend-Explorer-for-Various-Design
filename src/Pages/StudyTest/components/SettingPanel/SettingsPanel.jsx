import React from 'react';
import BatchAndChapterSelector from '../BatchAndChapterSelector/BatchAndChapterSelector';

const SettingsPanel = ({ setSelectChapter,setSelectedChapter,batchQuestions,setSelectedBatch }) => {
    return (
        <div>
            
            <BatchAndChapterSelector
                setSelectChapter={setSelectChapter}
                setSelectedChapter={setSelectedChapter}
                batchQuestions={batchQuestions}
                setSelectedBatch={setSelectedBatch}
            />
        </div>
    );
};

export default SettingsPanel;