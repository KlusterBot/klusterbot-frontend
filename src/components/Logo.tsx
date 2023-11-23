import clsx from "clsx";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={clsx(`w-14 ${className}`)}>
      <img src="/logo.png" alt="" className="w-full" />
    </div>
  );
};

export default Logo;
