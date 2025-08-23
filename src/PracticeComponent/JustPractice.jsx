    const studentData = {
        Nine:[{name:'Mofiz',age:30}],
        Ten:[{name:'Alif',age:14},{name:'Shihab',age:15}]
    }
import React, { useEffect, useState } from 'react';

const JustPractice = () => {
    

    const [selectedBatch, setSelectedBatch] = useState('Ten');
    const [batchStudent, setBatchStudent] = useState([]);
    const [presentStudents, setPresentStudents] = useState([]);
    useEffect(()=>{
        if(selectedBatch && studentData[selectedBatch]){
            const presentBatchStudents = studentData[selectedBatch];
            setBatchStudent(presentBatchStudents);
            setPresentStudents(
                presentBatchStudents.map((student)=>({
                 ...student,present:true
                }))
            )


        }
    },[selectedBatch])
   
    
    return (<>
        this is for practice
    </>);
};

export default JustPractice;
