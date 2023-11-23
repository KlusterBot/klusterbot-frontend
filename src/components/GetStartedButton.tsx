import clsx from "clsx";
import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const GetStartedButton = ({
  className,
  bordered,
}: {
  className?: string;
  bordered?: boolean;
}) => {
  return (
    <Link to="/signup">
      {bordered ? (
        <button
          className={`w-48 border-[.1rem] border-black flex items-center justify-center gap-2 rounded-[5rem] border-solid p-3 cursor-pointer text-lg ${className}`}
        >
          Get started
          <IoArrowForward />
        </button>
      ) : (
        <button
          className={clsx(
            `rounded-[5rem] p-3 bg-primary-dark-blue w-40 text-white ${className}`
          )}
        >
          Get Started
        </button>
      )}
    </Link>
  );
};

export default GetStartedButton;
