import { NavLink } from "react-router-dom";
import GetStartedButton from "./GetStartedButton";
import Container from "./Container";
import Logo from "./Logo";

const Navbar = () => {
  const activeNavLinkStyle = "font-semibold text-dark-blue-color";

  const navlinkStyle = (isActive: boolean) =>`${isActive ? activeNavLinkStyle : ""} `;

  return (
    <Container className="shadow-md shadow-secondary-cream sticky top-0 bg-white z-40">
      <div className="flex justify-between py-4 items-center text-lighter-color">
        <Logo/>
        <nav className="flex gap-4 items-center">
          <NavLink
            to="/"
            className={({ isActive }) => navlinkStyle(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => navlinkStyle(isActive)}
          >
            Services
          </NavLink>
          <NavLink
            to="/about-us"
            className={({ isActive }) => navlinkStyle(isActive)}
          >
            About us
          </NavLink>
          <NavLink
            to="/contact-us"
            className={({ isActive }) => navlinkStyle(isActive)}
          >
            Contact us
          </NavLink>
        </nav>
        <div className="flex gap-6 items-center">
          <NavLink
            to="/login"
            className={({ isActive }) => navlinkStyle(isActive)}
          >
            Login
          </NavLink>
          <GetStartedButton />
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
