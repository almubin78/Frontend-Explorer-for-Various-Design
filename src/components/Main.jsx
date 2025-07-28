import { NavLink, Outlet } from "react-router-dom";

import { useEffect, useState } from "react";
import { Socket } from "socket.io-client";

const Main = () => {
  // Socket Io
//   const [message, setMessage] = useState("");
//   const [chat, setChat] = useState([]);

//   useEffect(() => {
//     Socket.on("message", (msg) => {
//       setChat((prev) => [...prev, msg]);
//     });

//     return () => Socket.off("message");
//   }, []);

//   const sendMessage = () => {
//     Socket.emit("message", message);
//     setMessage("");
//   };
  //Socket.io end

  return (
    <div>
      {/* Socket Io */}
      {/* <div>
        <h1>Socket.IO Chat</h1>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />
        <button onClick={sendMessage}>Send</button>
        <div>
          {chat.map((msg, i) => (
            <p key={i}>{msg}</p>
          ))}
        </div>
      </div> */}
      {/* Nav Aria */}
      <div>
        {[
          { path: "/practiceOne", label: "Navbars" },
          { path: "/practiceTwo", label: "Practice Area 2" },
          { path: "/studyTest", label: "home work test" },
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
