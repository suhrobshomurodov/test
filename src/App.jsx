
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import {  Desktop, Home, Team} from './pages'

function App() {
    const route = createBrowserRouter ([
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/team",
        element: <Team/>
      },
      {
        path:"/Desktop",
        element: <Desktop/>
      }


    ])

  return (
   <RouterProvider router={route} />
  )
}

export default App
