import { Navigate, Outlet } from "react-router-dom";
import { AuthLayout } from "../layouts";
import { getToken } from "@/lib/services/localStorageServices";

const AuthenticateUser = () => {
  const token = getToken();
  return token ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthenticateUser;
