import { NavLink } from "react-router-dom";


const Main = () => {
    return (
        <div>
            {
                [
                    {path:'/practiceOne',label:'Practice Area'},
                    {path:'/practiceTwo',label:'Practice Area 2'},
                ].map((item)=>(
                    <NavLink
                    key={item.path}
                    to={item.path}
                    className={({isActive})=>`text-red-300 mx-3 border-x-amber-300 bottom-1 ${isActive?"":""}`}

                    >{item.label}</NavLink>
                ))
            }
        </div>
    );
};

export default Main;