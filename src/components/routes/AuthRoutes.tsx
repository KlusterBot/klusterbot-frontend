import { Route, Routes } from "react-router";
import { AuthLayout } from "../layouts";

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
       
      </Route>
    </Routes>
  );
};

export default AuthRoutes;
