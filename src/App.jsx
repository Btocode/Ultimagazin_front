import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Dashboard from "../src/pages/Dashboard";
import Index from "./Authentication/Index";
import Leads from "./pages/Leads";
import Reflinks from "./pages/Reflinks";

import "./App.css";
import Networkers from "./pages/Networkers";
import PrivateRoutes from "./utils/PrivateRoutes";

const App = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <ToastContainer />

      {/* Route to another page */}
      <Routes>
        <Route element={<PrivateRoutes width={width} />}>
          <Route
            path="/*"
            element={<Dashboard />}
          />
          <Route
            path="/reflinks"
            element={<Reflinks />}
          />
          <Route
            path="/leads"
            element={<Leads />}
          />
          <Route
            path="/networkers"
            element={<Networkers />}
          />
        </Route>
        <Route
          path="/login"
          element={<Index />}
        />
      </Routes>

      <ToastContainer />
    </>
  );
};

export default App;
