import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";

export const DashboardHeader = () => {
  return (
    <div className="w-full shadow-lg p-8 px-[MIN(100px,5%)] flex items-center border-b border-dark-blue-color">
      <div className="sm:ml-auto self-end flex gap-4 items-center justify-between">
        <div className="flex items-center gap-1 relative h-fit">
          <span className="h-[7px] w-[7px] rounded-[50%] bg-red-500 absolute top-[6.5px] left-[16.3px]"></span>
          <IoMdNotificationsOutline className="text-[#000] text-[1.6rem] font-semibold" />
        </div>
        <Link to={"/dashboard/settings"} className="flex items-center gap-3">
          {/* <Image
            height={32}
            width={32}
            src={session?.user.avatar || ProfilePic}
            alt="Profile Pic"
            className={`${
              session?.user.avatar ? "rounded-[50%]" : ""
            } object-contain  aspect-square rounded-full overflow-hidden h-auto w-[32px] `}
          /> */}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-8 aspect-square object-cover rounded-full border" />

          {/* <span className="capitalize">Hi {"User" || <small>...</small>}</span> */}
        </Link>
      </div>
    </div>
  );
};
