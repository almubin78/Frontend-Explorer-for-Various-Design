import React, { useEffect, useState } from 'react';

const ByJavascript = () => {
    const [students , setStudents ] = useState(0);
    // console.log(students.length);
    useEffect(()=>{
        const updateCardPerPage = () =>{
            if(window.matchMedia("(max-width:700px)").matches){
                console.log('(max-width:700px)');
                setStudents(1)
            }
            else if(window.matchMedia("(max-width:900px)").matches){
                console.log('max-width:900px');
                setStudents(2)
            }
            else{
                console.log('No Logs');
                setStudents(3)
            }
        }

        //
        updateCardPerPage();
        window.addEventListener('nameOfListener',updateCardPerPage)
        return ()=>{window.removeEventListener('nameOfListener',updateCardPerPage)}
    },[])
   
    return (
        <div>
            Dynamic page for card
            now student show {students}
        </div>
    );
};

export default ByJavascript;