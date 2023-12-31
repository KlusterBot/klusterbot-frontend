import clsx from "clsx";
import { Link } from "react-router-dom";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link to='/' className={clsx(`w-14 ${className}`)}>
      <img src="/logo.png" alt="" className="w-full" />
    </Link>
  );
};

export default Logo;
