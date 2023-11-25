import { Link, NavLink } from "react-router-dom";
import Container from "./Container";
import Logo from "./Logo";
import Button from "../UI/Button";

const Navbar = () => {
  // const activeNavLinkStyle = "font-bold text-dark-blue-color";
  
  return (
    <Container className="shadow-md shadow-secondary-cream sticky top-0 bg-white z-40">
      <div className="flex justify-between py-4 items-center text-lighter-color">
        <Logo />
        <nav className="flex gap-8 items-center">
          <a href="/">Home</a>
          <a href="/#services">Services</a>
          <a href="/#about-us">About us</a>
          <a href="/#contact-us">Contact us</a>
        </nav>
        <div className="flex gap-6 items-center">
          <NavLink to="/login">Login</NavLink>
          <Link to="/signup">
            <Button buttonText="Get Started" />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
