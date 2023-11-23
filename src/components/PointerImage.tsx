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
        <img src={updates} alt="" className="absolute bottom-0 left-[-4rem]" />
        <img src={guy} alt="" />
        <img
          src={users}
          alt=""
          className="absolute top-[7rem] right-[-2rem] z-[-3]"
        />
      </div>
    </div>
  );
};

export default PointerImage;
