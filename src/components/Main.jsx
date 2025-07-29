import { NavLink, Outlet } from "react-router-dom";


const Main = () => {
  

  return (
    <div>
      
      {/* Nav Aria */}
      <div>
        {[
          { path: "/practiceOne", label: "Navbars" },
          { path: "/practiceTwo", label: "Practice Area 2" },
          { path: "/studyTest", label: "home work test" },
          { path: "/dynamicPages", label: "Dynamic Card" },
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
