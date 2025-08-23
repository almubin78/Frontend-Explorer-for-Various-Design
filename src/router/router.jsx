

// Navbar

import { createBrowserRouter } from "react-router-dom";
import StudyTestRoot from "../Pages/StudyTest/StudyTestRoot";
import ErrorPage from "../Pages/ErrorPage";
import JustPractice from "../PracticeComponent/justPractice";

const router = createBrowserRouter([
    {
        path:'/',
        element:<StudyTestRoot/>,
        children:[
            {path:'/practice',element:<JustPractice/>},
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;