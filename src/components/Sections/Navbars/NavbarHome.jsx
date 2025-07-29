import { Link, Outlet } from "react-router-dom";


const NavbarHome = () => {
    return (
        <div>
            this is navbar one
            <p className="text-gray-100">hey</p>
            <div>
                {
                    [{path:'navbarOne',name:'design-one'}].map((item)=>(
                        <Link key={item.path}  to={item.path}>{item.name}</Link>
                    ))
                }
                {
                    <Outlet/>
                }
            </div>
        </div>
    );
};

export default NavbarHome;