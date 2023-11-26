import { Navigate, useRoutes } from "react-router";
import { DashboardRoutes, RootRoutes } from "./routes";
import { AuthenticateUser, AuthorizeUser } from "./auth";
import { Login, NotFound, Setup, SignUp } from "@/pages";
import { RootLayout } from "./layouts";

const AppRoutes = () => {
  const routes = useRoutes([
    {
      element: <RootLayout />,
      children: [
        { path: "/*", element: <RootRoutes /> },
        // { path: "/setup", element: <Setup /> },
      ],
    },
    { path: "/setup", element: <Setup /> },
    {
      element: <AuthorizeUser />,
      children: [
        { path: "/dashboard", element: <Navigate to="/dashboard/home" /> },
        { path: "/dashboard/*", element: <DashboardRoutes /> },
      ],
    },
    {
      element: <AuthenticateUser />,
      children: [
        { path: "/signup", element: <SignUp /> },
        { path: "/login", element: <Login /> },
      ],
    },
    { path: "*", element: <NotFound /> },
  ]);
  return routes;
};

export default AppRoutes;
