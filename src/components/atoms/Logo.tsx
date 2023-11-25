import clsx from "clsx";
import { Link } from "react-router-dom";

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to='/' className={clsx(`w-14 ${className} z-[999]`)}>
      <img src="/logo.png" alt="" className="w-full" />
    </Link>
  );
};
