import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Main from "../components/Main";
import NavbarHome from "../components/Practices/Navbars/NavbarHome";
import StyleOneNav from "../components/Practices/Navbars/StyleOneNav";
// Navbar






const router = createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/practiceOne',
                element:<NavbarHome/>,
                children:[
                    {path:'/practiceOne/navbarOne',element:<StyleOneNav/>}
                ]

            }
        ]
    },
    {
        path:'*',
        element:<ErrorPage/>
    }
])

export default router;