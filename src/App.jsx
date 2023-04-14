import { ToastContainer } from "react-toastify";
import Index from "./Authentication/Index";
import { Route, Routes } from "react-router-dom";
import Layout from "../src/Layout/Layout";
import Dashboard from "../src/pages/Dashboard";
import { useEffect, useState } from "react";


import './App.css'

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const user = false;

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
    {user ? (
      <Layout width={width}>
        <ToastContainer />

        {/* Route to another page */}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
        </Routes>
      </Layout>
    ) : (
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    )}
    <ToastContainer />
  </>
  )
}

export default App
