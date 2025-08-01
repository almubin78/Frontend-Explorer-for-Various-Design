import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//এখানে কিছু ইম্পোর্ট করে রেখে যদি ব্যবহার নাও করি তবুও রেন্ডার হতে থাকে। 

import StudyTestHome from './components/Pages/StudyTestWithTimer/StudyTestHome.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <>
    
   
    <StudyTestHome/>
   
    
    </>
  </React.StrictMode>,
)
