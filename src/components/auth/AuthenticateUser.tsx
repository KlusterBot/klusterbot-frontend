import { Navigate, Outlet } from "react-router-dom";
import { AuthLayout } from "../layouts";

const AuthenticateUser = () => {
  const response = "yes"; //getCurrentUser();
  return response ? (
    <Navigate to="/dashboard" replace />
  ) : (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default AuthenticateUser;
