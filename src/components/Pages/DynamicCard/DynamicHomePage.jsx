import React from 'react';
import ByJavascript from './ByJavascript';

const DynamicHomePage = () => {
    const students = [
        {name:'Jamil',age:30},
        {name:'Hamil',age:20},
    ]
    return (
        <div>
            <div className="divider">This is from Pure Js</div>
            <ByJavascript students={students}/>
        </div>
    );
};

export default DynamicHomePage;