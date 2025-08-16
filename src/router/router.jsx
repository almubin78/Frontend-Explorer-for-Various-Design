import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import StudyTestHome from "../components/Pages/StudyTestWithTimer/StudyTestHome";
import Chatting from "../components/Pages/StudyTestWithTimer/ChildComponents/Chatting/Chatting";
import TestHome from "../components/Pages/StudyTestWithTimer/ChildComponents/Test/TestHome";

// Navbar

const router = createBrowserRouter([
    {
        path:'/',
        element:<StudyTestHome/>,
        // element:<Main/>,
        children:[
            {path:'/test',element:<TestHome/>},
            {path:'/chat',element:<Chatting/>},
            {path:'/register',element:<></>},
            {path:'/feedback',element:<></>},
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;