
import React, { useEffect, useState } from 'react';
import { studentsData } from '../data/allStudentsData';
import { allClassesQuestionsData } from '../data/questionsData';

const JustPractice = () => {
    const [selectedBatch, setSelectedBatch] = useState('Ten');
    const [batchStudents, setBatchStudents] = useState([]);
    const [batchQuestions, setBatchQuestions] = useState([]);

    useEffect(()=>{
        if(selectedBatch && studentsData[selectedBatch]){
            const batchStudents = studentsData[selectedBatch];
            const batchQuestions = allClassesQuestionsData[selectedBatch];
            setBatchStudents(batchStudents);
            setBatchQuestions(batchQuestions)

        }
    },[])

    console.log(batchQuestions,batchStudents);
    
    
   
    
    return (<>
        this is for practice
    </>);
};

export default JustPractice;
