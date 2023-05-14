import { Navigate, Outlet } from "react-router-dom";
import Layout from "../Layout/Layout";

const PrivateRoutes = ({width}) => {

  let auth = localStorage.getItem("authenticated");

  return auth ? (
    <Layout width={width}>
    <Outlet />
    </Layout>
  )
   : <Navigate to="/login" />;
};

export default PrivateRoutes;
