import Logo from "../Logo";
import PointerImage from "../PointerImage";

const SetupForm = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`relative inline-block  min-h-full min-w-full z-[3] ${className}`}
    >
      <Logo className="absolute top-[2rem] left-[3rem]" />
      {children}
      <PointerImage className="!absolute bottom-0 left-[3.5%] w-[12rem]" />
    </div>
  );
};

export default SetupForm;
