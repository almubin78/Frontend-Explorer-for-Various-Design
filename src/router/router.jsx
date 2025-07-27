import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../componets/ErrorPage";
import Main from "../componets/Main";





const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/practiceOne ',
                
            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;