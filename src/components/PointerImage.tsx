import clsx from "clsx";
import PointerBgRoundedCard from "../UI/PointerBgRoundedCard";
import guy from "../assets/guy_pointing.png";
import updates from "../assets/updates.png";
import users from "../assets/users.png";

const PointerImage = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(`relative ${className}`)}>
      <div className="absolute flex flex-col w-full h-[85%] bottom-0">
        <PointerBgRoundedCard />
        <PointerBgRoundedCard />
        <PointerBgRoundedCard />
      </div>
      <div className="relative z-[2]">
        <img
          src={updates}
          alt=""
          className="absolute bottom-0 left-[-15%] w-[40%]"
        />
        <img src={guy} alt="" />
        <img
          src={users}
          alt=""
          className="absolute top-[18%] right-[-7%] z-[-3] w-[40%]"
        />
      </div>
    </div>
  );
};

export default PointerImage;
