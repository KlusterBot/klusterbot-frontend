import {
  FaSquareXTwitter,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa6";
import Logo from "./Logo";

const Footer = () => {
  const headerClass = "font-semibold text-lg";
  const footerItemClass = "flex flex-col gap-4";
  return (
    <div
      className="text-[#5c5c5c] flex items-center gap-40 px-20 py-14"
      id="contact-us"
    >
      <Logo className="scale-[2.2]" />
      <div className="flex justify-between flex-auto">
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
          <a href="mailto:someone@example.com">contact@kluster.com</a>
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
