
// src/socket.js
import { io } from 'socket.io-client';

// Connect to backend server (change to your actual backend URL)
export const socket = io('http://localhost:5000');
