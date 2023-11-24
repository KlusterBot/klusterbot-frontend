import { Navigate, Outlet } from "react-router-dom";
import { DashboardLayout } from "../layouts";

const AuthorizeUser = () => {
  const response = "yes"; //getUserToken();
  if (response) {
    return (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    );
  } else {
    return <Navigate replace to="/" />;
  }
};

export default AuthorizeUser;
