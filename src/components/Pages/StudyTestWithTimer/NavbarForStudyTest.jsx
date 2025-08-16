import React from 'react';
import { Link } from 'react-router-dom';

const NavbarForStudyTest = () => {

    return (
        <div>
            {
                [
                    {path:'test',label:'Test ক , খ '},
                    {path:'chat',label:'Chat কর'},
                    {path:'register',label:'ভর্তি হও'},
                    {path:'feedback',label:'Feedback'},

                ].map((item)=>(<Link 
                className='mx-2 bg-slate-500 p-2 rounded-md'
                key={item.path} to={item.path}>
                 {item?.label}
                </Link>))
               
            }
            <li>jjjdfsd</li>
        </div>
    );
};

export default NavbarForStudyTest;