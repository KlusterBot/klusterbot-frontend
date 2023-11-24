import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

interface Props
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  href?: string;
  small?: boolean;
  large?: boolean;
  scroll?: boolean;
  outline?: boolean;
  loading?: boolean;
}

const antIcon = <LoadingOutlined style={{ fontSize: 16 }} spin />;

const Button: React.FC<Props> = ({
  href,
  className,
  // scroll = true,
  outline,
  loading,
  ...props
}) => {
  const buttonClasses = `${
    outline
      ? "bg-[transparent] text-secondary border border-dark-blue-color"
      : "bg-dark-blue-color text-[#FCFCFC]"
  } 
    ${!props.disabled ? "hover:scale-[1.02] active:scale-[0.95]" : ""}
  font-body rounded-[30px] transition-all duration-500 max-w-[264px] shadow-sm flex justify-center items-center place-items-center gap-4 py-3 px-4`;

  return href ? (
    <Link className={twMerge(buttonClasses, className)} to={href}>
      {loading ? (
        <Spin className="min-w-[42px]" indicator={antIcon} />
      ) : (
        <>{props.children}</>
      )}
    </Link>
  ) : (
    <button {...props} className={twMerge(buttonClasses, className, loading?'bg-transparent outline-dark-blue-color border outline':'')}>
      {loading ? (
        <Spin className="min-w-[42px]" indicator={antIcon} />
      ) : (
        <>{props.children}</>
      )}
    </button>
  );
};

export default Button;
