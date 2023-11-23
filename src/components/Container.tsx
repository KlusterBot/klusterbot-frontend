import clsx from "clsx";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
    return (
        <div className={clsx(`main-container w-full ${className}`)}>{children}</div>
  );
};

export default Container;
