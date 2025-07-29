import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Main from "../components/Main";
import NavbarHome from "../components/Sections/Navbars/NavbarHome";
import StyleOneNav from "../components/Sections/Navbars/StyleOneNav";
import DynamicHomePage from "../components/Pages/DynamicCard/DynamicHomePage";
import ByJavascript from "../components/Pages/DynamicCard/ByJavascript";
// Navbar






const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/dynamicPages',
                element:<DynamicHomePage/>,
                

            },
            {
                path:'/practiceOne',
                element:<NavbarHome/>,
                children:[
                    {path:'/practiceOne/navbarOne',element:<StyleOneNav/>}
                ]

            },
            // {
            //     path:'/studyTest',
            //     element:<NavbarHome/>,
            //     children:[
            //         {path:'/practiceOne/navbarOne',element:<StyleOneNav/>}
            //     ]

            // },
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;