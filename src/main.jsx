import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import StudyTestHome from './components/Pages/StudyTestWithTimer/StudyTestHome'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'
//এখানে কিছু ইম্পোর্ট করে রেখে যদি ব্যবহার নাও করি তবুও রেন্ডার হতে থাকে। 



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <StudyTestHome/>
    </RouterProvider>
  </React.StrictMode>,
)
