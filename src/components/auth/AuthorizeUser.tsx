import { Navigate, Outlet } from "react-router-dom";
import { DashboardLayout } from "../layouts";
import { getToken } from "@/lib/services/localStorageServices";

const AuthorizeUser = () => {
  const token = getToken();
  return token ? (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  ) : (
    <Navigate replace to="/" />
  );
};

export default AuthorizeUser;
