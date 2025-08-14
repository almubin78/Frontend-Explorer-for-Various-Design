import { NavLink, Outlet } from "react-router-dom";


const Main = () => {
  

  return (
    <div>
      
      {/* Nav Aria */}
      <div>
        {[
          { path: "/test", label: "Study Test" },
          
        ].map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-red-300 mx-3 border-x-amber-300 bottom-1 ${
                isActive ? "" : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
      {/* Outlet */}

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Main;
