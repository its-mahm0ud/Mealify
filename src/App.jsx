import Chefs from '../Components/Chefs';
import Gallary from '../Components/Gallary';
import Home from '../Components/Home';
import Contact from '../Components/Contact';
import FeedBack from '../Components/FeedBack';
import Loading from '../Components/Loading';
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from '../Components/Layout';
import Notfound from '../Components/Notfound';
import { useEffect,  useState } from 'react';

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const router = createBrowserRouter([
    {
      path: "", element: <Layout />, children: [
        { path: "/", element: <Navigate to="/home" /> },
        { path: "/home", element: <Home /> },
        { path: "/chefs", element: <Chefs /> },
        { path: "/gallary", element: <Gallary /> },
        { path: "/contact", element: <Contact /> },
        { path: "/feedback", element: <FeedBack /> },
        { path: "*", element: <Notfound /> }



      ]
    }
  ])

    useEffect(()=>{
      setTimeout(()=>setIsLoading(false),1700)

    },[])

  return (
    <>

      {
        isLoading? <Loading/>:<RouterProvider router={router} />
      }



    </>
  )
}
