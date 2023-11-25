import clsx from "clsx";
import { IoArrowForward } from "react-icons/io5";

const Button = ({
  className,
  bordered,
  buttonText,
  type,
  icon,
  onClick,
}: {
  type?: "reset" | "submit" | "button";
  buttonText: string;
  className?: string;
  bordered?: boolean;
  icon?: boolean;
  onClick?: () => void;
}) => {
  return bordered ? (
    <button
      onClick={onClick}
      type={type}
      className={`w-40 border-[.1rem] border-black flex items-center justify-center gap-2 rounded-[5rem] border-solid p-3 cursor-pointer text-lg ${className}`}
    >
      {buttonText}
      {icon && <IoArrowForward />}
    </button>
  ) : (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        `rounded-[5rem] p-3 bg-primary-dark-blue w-40 text-white ${className}`
      )}
    >
      {buttonText}
    </button>
  );
};

export default Button;
