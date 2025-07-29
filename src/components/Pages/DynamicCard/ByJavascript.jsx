import React, { useEffect, useState } from 'react';

const ByJavascript = () => {
    const [students , setStudents ] = useState(0);
    // console.log(students.length);
    // useEffect(()=>{
    //     const updateCardPerPage = () =>{
    //         if(window.matchMedia("(max-width:700px)").matches){
    //             console.log('(max-width:700px)');
    //             setStudents(1)
    //         }
    //         else if(window.matchMedia("(max-width:900px)").matches){
    //             console.log('max-width:900px');
    //             setStudents(2)
    //         }
    //         else{
    //             console.log('No Logs');
    //             setStudents(3)
    //         }
    //     }

    //     //
    //     updateCardPerPage();
    //     window.addEventListener('nameOfListener',updateCardPerPage)
    //     return ()=>{window.removeEventListener('nameOfListener',updateCardPerPage)}
    // },[])
    useEffect(()=>{
        const updateStudent = () =>{
            if(window.matchMedia("(min-width:700px)").matches){
                console.log('min-w:700')
                
            }
        }
        //
        updateStudent()

        window.addEventListener('nameOf',updateStudent);
        return ()=>window.removeEventListener('nameOf',updateStudent)

    },[])
    return (
        <div>
            Dynamic page for card
            now student show {students}
        </div>
    );
};

export default ByJavascript;