import { useRoutes } from "react-router";
import { AuthLayout, RootLayout } from "./layouts";
import { Login, NotFound, SignUp } from "../pages";
import { RootRoutes } from "./routes";
import { AuthenticateUser, AuthorizeUser } from "./auth";

const AppRoutes = () => {
  // const token = null;
  const routes = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/signup", element: <SignUp /> },
      ],
    },
    {
      element: <RootLayout />,
      children: [{ path: "/*", element: <RootRoutes /> }],
    },

    {
      element: <AuthorizeUser />,
      children: [{ path: "/dashboard/*", element: <Login /> }],
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

export default AppRoutes
