import { Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";
// import { getCurrentUser } from "../../utils/getCurrentUser";

const AuthenticateUser = () => {
  const response = null //getCurrentUser();
  if (response) {
    createBrowserHistory().replace("/dashboard");
    createBrowserHistory().go(0);
    return null;
  }
  return <Outlet />;
};

export default AuthenticateUser;
