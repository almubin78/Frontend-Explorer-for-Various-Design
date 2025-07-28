// src/App.js
import React, { useEffect, useState } from 'react';
import { socket } from './socket';

function App() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Listen for new messages
    socket.on('new_message', (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => {
      socket.off('new_message');
    };
  }, []);

  const handleSend = () => {
    if (message.trim() !== '') {
      socket.emit('send_message', message);
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl mb-2">Real-time Chat</h1>
      <div className="space-y-1 mb-4">
        {chat.map((msg, i) => (
          <div key={i} className="bg-gray-200 p-2 rounded">{msg}</div>
        ))}
      </div>
      <input
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type message..."
        className="border p-2 mr-2"
      />
      <button onClick={handleSend} className="bg-blue-500 text-white px-4 py-2 rounded">Send</button>
    </div>
  );
}

export default App;
