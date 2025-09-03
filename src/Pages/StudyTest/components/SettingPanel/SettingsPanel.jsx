import React from 'react';
import BatchAndChapterSelector from '../BatchAndChapterSelector/BatchAndChapterSelector';

const SettingsPanel = ({ setSelectChapter,setSelectedChapter,batchQuestions,setSelectedBatch,additionalTask }) => {
    return (
        <div>
            
            <BatchAndChapterSelector
                setSelectChapter={setSelectChapter}
                setSelectedChapter={setSelectedChapter}
                batchQuestions={batchQuestions}
                setSelectedBatch={setSelectedBatch}
                additionalTask={additionalTask}

            />
        </div>
    );
};

export default SettingsPanel;