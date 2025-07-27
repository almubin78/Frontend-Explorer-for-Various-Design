import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// import { GlobalContext } from './AuthContext/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GlobalContext>
    <App />
    </GlobalContext> */}
    {/* <ContextFunction>
      <App/>
    </ContextFunction> */}
    <App/>
  </React.StrictMode>,
)
