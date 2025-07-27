import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router'
// import Converting from './Experimental/Converting'
// import NumberConverter from './Experimental/NumberConverter'
// import HumidityCalculator from './Experimental/HumidityCalculator'


function App() {

  return (
    <>
      {/* <h1>fhhdf</h1> */}
      {/* <Converting/> */}
      {/* <NumberConverter/> */}
      <RouterProvider router={router}></RouterProvider>
      {/* <HumidityCalculator /> */}
    </>
  )
}

export default App
