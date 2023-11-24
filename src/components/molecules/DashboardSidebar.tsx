import { FiHome } from "react-icons/fi";
import { LuMessageSquare, LuSettings } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { NavLink, useNavigate } from "react-router-dom";
import { Logo } from "../atoms";
import { logOut } from "@/lib/services/localStorageServices";
import toast from "react-hot-toast";
import { useNav } from "@/context/nav_context";

const NavLinks = [
  { label: "Home", path: "/dashboard/home", icon: <FiHome /> },
  { label: "Chat", path: "/dashboard/chat", icon: <LuMessageSquare /> },
  {
    label: "Playground",
    path: "/dashboard/playground",
    icon: <RiRobot2Line />,
  },
  { label: "Settings", path: "/dashboard/settings", icon: <LuSettings /> },
];

export const DashboardSidebar = () => {
  const navigate = useNavigate();
  const { isOpen, toggleNav, closeNav } = useNav();


  const handleLogOut = () => {
    logOut();
    toast.success("Log out successful!");
    navigate("/login");
  };

  return (
    <>
      {isOpen && (
        <>
          <button
            onClick={toggleNav}
            className={`fixed md:hidden top-0 left-0 w-screen h-screen z-20 backdbrop-blur-[1px] bg-[rgba(0,0,0,0.1)]`}
          ></button>
        </>
      )}
      <aside
        className={`
        ${isOpen ? "translate-x-0" : "-translate-x-[100%]"}
        absolute z-20 bg-white -translate-x-[100%] transition-all duration-300 md:sticky md:translate-x-0 left-0 top-0 border-r border-dark-blue-color flex flex-col gap-y-16 gap-8 w-[MIN(100%,244px)] md:min-w-[244px] bg-dark h-[MIN(100vh,1080px)] p-4 py-6 shadow-sm`}
      >
        {/* <div className="aspect-square max-w-[52px] h-auto"> */}
        <Logo />
        {/* </div> */}

        <div className="w-full  grid gap-8 overflow-y-scroll items-start h-full">
          <div className="grid gap-2 pb-[10%] w-full">
            {NavLinks.map(({ path, icon, label }, index) => (
              // render other nav links
              <NavLink
                key={index}
                to={path}
                onClick={closeNav}
                className={({ isActive, isPending }) =>
                  `flex hover:bg-dark-blue-color/30 hover:text-dark-blue-color duration-300 transition-all w-full items-center gap-x-4 px-4 py-3 mt-2 rounded-sm hover:bg-primary ${
                    isPending
                      ? "bg-dark-blue-color/30"
                      : isActive
                      ? "bg-dark-blue-color/20 border-l-4 border-dark-blue-color text-dark-blue-color  "
                      : ""
                  }`
                }
              >
                <span className="text-inherit">{icon}</span>
                <p>{label}</p>
              </NavLink>
            ))}
          </div>

          <button
            onClick={handleLogOut}
            className="flex w-full rounded-3xl text-white text-center bg-dark-blue-color mt-auto justify-center items-center outline-none gap-x-4 px-4 py-3 wc-56  hover:bg-primary duration-500 abdsolute bottom-16"
          >
            {/* <Image src={logoutIcon} alt="Dashboard Icon" /> */}
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
};
