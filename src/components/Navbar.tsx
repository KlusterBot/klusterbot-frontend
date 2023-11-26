import { useState } from "react";
import { motion } from "framer-motion";
import { createPortal } from "react-dom";
import { FaBars } from "react-icons/fa6";
import { CgClose } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";

import Button from "../UI/Button";
import Container from "./Container";
import Logo from "./Logo";
import { useAppSelector } from "@/store/hooks/hooks";
import { getToken } from "@/lib/services/localStorageServices";

const MobileNav = ({ closeFunc }: { closeFunc: () => void }) => {
    const token = getToken();
    const [navIsOpen, setNavIsOpen] = useState(true);
    const isVerified = useAppSelector((state) => state.isVerified);
    const closeNav = () => {
        setNavIsOpen(false);
        setTimeout(() => closeFunc(), 500);
    };
    return createPortal(
        <motion.div
            className="mobile-nav h-[100svh] w-screen fixed top-0 z-40 bg-opacity-50 backdrop-blur-lg"
            initial={{ x: "-100%" }}
            animate={{ x: navIsOpen ? 0 : "-100%" }}
        >
            <motion.header
                className="flex items-center justify-between p-4 px-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: navIsOpen ? 1 : 0 }}
                transition={{ delay: 0.1 }}
            >
                <Logo />{" "}
                <button className="scale-[1.5]" title="btn" onClick={closeNav}>
                    <CgClose />
                </button>
            </motion.header>
            <div className="flex flex-col h-[70%] items-center justify-center gap-4  mt-6">
                <Link to="/" onClick={closeNav}>
                    Home
                </Link>
                <a href="/#services" onClick={closeNav}>
                    Services
                </a>
                <a href="/#about-us" onClick={closeNav}>
                    About us
                </a>
                <a href="/#contact-us" onClick={closeNav}>
                    Contact us
                </a>
                <div className="gap-6 items-center flex flex-wrap mt-20 justify-center">
                    {token && isVerified ? (
                        <Link to="/dashboard" onClick={closeNav}>
                            <Button buttonText="Go to dashboard" />
                        </Link>
                    ) : (
                        <>
                            <Link to="/signup" onClick={closeNav}>
                                <Button
                                    buttonText="Get Started"
                                    bordered
                                    icon
                                    className="py-2.5"
                                />
                            </Link>
                            <Link to="/login" onClick={closeNav}>
                                <Button buttonText="Login" />
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </motion.div>,
        document.body
    );
};

const Navbar = () => {
    const token = getToken();
    const isVerified = useAppSelector((state) => state.isVerified);
    const [showMobileNav, setShowMobileNav] = useState(false);

    const openMobileNav = () => setShowMobileNav(true);
    const closeMobileNav = () => setShowMobileNav(false);

    return (
        <>
            <Container className="shadow-md shadow-secondary-cream sticky top-0 bg-white z-40">
                <div className="flex justify-between py-4 items-center text-lighter-color">
                    <Logo />
                    <nav className="hidden gap-8 items-center md:flex">
                        <Link to="/">Home</Link>
                        <a href="/#services">Services</a>
                        <a href="/#about-us">About us</a>
                        <a href="/#contact-us">Contact us</a>
                    </nav>
                    <div className="hidden gap-6 items-center md:flex">
                        {token && isVerified ? (
                            <Link to="/dashboard">
                                <Button buttonText="Go to dashboard" />
                            </Link>
                        ) : (
                            <>
                                <NavLink to="/login">Login</NavLink>
                                <Link to="/signup">
                                    <Button buttonText="Get Started" />
                                </Link>
                            </>
                        )}
                    </div>
                    <button
                        className="md:hidden scale-[1.5]"
                        title="btn"
                        onClick={openMobileNav}
                    >
                        <FaBars />
                    </button>
                </div>
            </Container>

            {showMobileNav && <MobileNav closeFunc={closeMobileNav} />}
        </>
    );
};

export default Navbar;
