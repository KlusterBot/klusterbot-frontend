import {
  FaSquareXTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  const headerClass = "font-semibold text-lg";
  const footerItemClass = "flex flex-col gap-4 flex-1 min-w-[8rem]";
  return (
    <div
      className="text-[#5c5c5c] flex items-center gap-10 md:px-20 px-6 py-14 justify-between flex-wrap"
      id="contact-us"
    >
      <Logo className="w-[7rem]" />
      <div className="flex md:justify-between w-[80%] flex-wrap gap-10 max-lg:w-full">
        <div className={footerItemClass}>
          <h3 className={headerClass}>Home</h3>
          <a href="#about-us">About</a>
          <p>Privacy policy</p>
          <p>Terms of service</p>
        </div>

        <div className={footerItemClass}>
          <h3 className={headerClass}>Services</h3>
          <p>Business</p>
        </div>

        <div className={footerItemClass}>
          <h3 className={headerClass}>About us</h3>
          <p>Blog</p>
        </div>

        <div className={footerItemClass}>
          <h3 className={headerClass}>Contact us</h3>
          <p>+234709000000</p>
          <a href="mailto:someone@example.com">kluster-ai.online</a>
          <div className="flex gap-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
            <FaSquareXTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
