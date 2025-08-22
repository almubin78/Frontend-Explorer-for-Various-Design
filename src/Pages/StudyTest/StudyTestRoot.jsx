import { useEffect, useState } from "react";
import { StudentInfoData } from "./datas/StudentInfoData/StudentsInfo";


const StudyTestRoot = () => {
    const [selectedBatch, setSelectedBatch] = useState('Nine');
    const [batchStudents,setBatchStudents]=useState([]);
    const [presentStudents, setPresentStudents] = useState([]);
    
    useEffect(()=>{
        if(selectedBatch && StudentInfoData[selectedBatch]){
            const batchStudents = StudentInfoData[selectedBatch];
            setBatchStudents(batchStudents);
            setPresentStudents(
                batchStudents.map((student)=>({...student,present:true}))
            )

        }
    },[selectedBatch])
    console.log('batchStudents',batchStudents,'selectedBatch',selectedBatch,'presentStudents',presentStudents)
    //selectRandomStudent
    const selectRandomStudent = ()=>{

    }
    //selectRandomQuestions
    const selectRandomQuestions = ()=>{

    }
    //additional task 
    const assignRandomTask = ()=>{

    }
    // time up for current student
    const handleTimeUp = ()=>{

    }
    //toggle student attendance
    const toggleStudentAttendance = ()=>{

    }
    // confirm attendance students
    const confirmAttendanceAndStart = ()=>{

    }
    //filter out duplicate students
    

    return (
        <div>
            This is StudyTest root file
        </div>
    );
};

export default StudyTestRoot;