import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Hamburger } from "../atoms";

export const DashboardHeader = () => {
  return (
    <div className="w-full bg-white z-10 sticky top-0 left-0 shadow-lg py-5 px-[MIN(100px,5%)] flex items-center border-b border-dark-blue-color">
      <div className="md:flex-row-reverse md:ml-auto my-auto flex gap-4 items-center justify-between">
        <Link to={"/dashboard/settings"} className="flex items-center gap-3">
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 aspect-square object-cover rounded-full border" />

          {/* <span className="capitalize">Hi {"User" || <small>...</small>}</span> */}
        </Link>
        <div className="flex items-center gap-1 relative h-fit">
          <span className="h-[7px] w-[7px] rounded-[50%] bg-red-500 absolute top-[6.5px] left-[16.3px]"></span>
          <IoMdNotificationsOutline className="text-[#000] text-[1.6rem] font-semibold" />
        </div>
      </div>

      <Hamburger />
    </div>
  );
};
