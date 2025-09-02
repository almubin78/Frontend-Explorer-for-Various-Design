import React from 'react';
import BatchAndChapterSelector from '../BatchAndChapterSelector/BatchAndChapterSelector';

const SettingsPanel = ({ setSelectChapter,setSelectedChapter,batchQuestions }) => {
    return (
        <div>
            
            <BatchAndChapterSelector
                setSelectChapter={setSelectChapter}
                setSelectedChapter={setSelectedChapter}
                batchQuestions={batchQuestions}
            />
        </div>
    );
};

export default SettingsPanel;