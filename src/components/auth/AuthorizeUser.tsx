import { Outlet } from "react-router-dom";
import { createBrowserHistory } from "history";
// import { getUserToken } from "../../utils/getUserToken";
// import { getUserRole } from "../../utils/getUserRole";
// import { USER } from "../../const/constants";

const AuthorizeUser = () => {
  const response = ""; //getUserToken();
  if (response) {
    return <Outlet />;
  } else {
    createBrowserHistory().replace("/login/");
    createBrowserHistory().go(0);
    return null;
  }
};

export default AuthorizeUser;
