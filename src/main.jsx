import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import ErrorPage from './Pages/ErrorPage.jsx';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import SignIn from './Pages/SignIn.jsx';
import SignUp from './Pages/SignUp.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
    errorElement:<ErrorPage/>,
    children:[
      {
        path: "/",
        element:<Home/>
      },
      {
        path: "/about",
        element:<About/>
      },
      {
        path: "/signin",
        element:<SignIn/>
      },
      {
        path: "/signup",
        element:<SignUp/>
      }
    ] 
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
