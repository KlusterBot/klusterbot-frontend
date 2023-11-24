import { FiHome } from "react-icons/fi";
import { LuMessageSquare, LuSettings } from "react-icons/lu";
import { RiRobot2Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { Logo } from "../atoms";

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


  const handleLogOut = () => {};
  return (
    <aside>
      <div
        className={`hidden border-r border-dark-blue-color md:flex flex-col gap-y-16 gap-8 w-[MIN(100%,244px)] md:min-w-[244px] bg-dark h-[MIN(100vh,1080px)] p-[MIN(100px,10%)] shadow-sm`}
      >
        <Logo />
        <div className="grid gap-8 overflow-y-scroll items-start h-full">
          <div className="grid gap-2 pb-[10%] w-full">
            {NavLinks.map(({ path, icon, label }, index) => (
              // render other nav links
              <NavLink
                key={index}
                to={path}
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
      </div>
    </aside>
  );
};
