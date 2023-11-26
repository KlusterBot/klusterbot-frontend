import clsx from "clsx";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
    return (
        <div className={clsx(`main-container w-full ${className} md:px-10 px-6`)}>{children}</div>
  );
};

export default Container;
