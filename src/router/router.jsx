

// Navbar

import { createBrowserRouter } from "react-router-dom";
import StudyTestRoot from "../Pages/StudyTest/StudyTestRoot";
import ErrorPage from "../Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<StudyTestRoot/>,
        children:[
            {},
           
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;