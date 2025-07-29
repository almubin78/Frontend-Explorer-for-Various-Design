import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/router.jsx'

// import { GlobalContext } from './AuthContext/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <GlobalContext>
    <App />
    </GlobalContext> */}
    {/* <ContextFunction>
      <App/>
    </ContextFunction> */}
    <>
    <App/>
    <RouterProvider router={router}></RouterProvider>
    
    </>
  </React.StrictMode>,
)
