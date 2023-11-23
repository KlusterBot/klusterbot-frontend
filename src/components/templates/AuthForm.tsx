import { twMerge } from "tailwind-merge";

interface IFormProps
  extends React.DetailedHTMLProps<
    React.FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

const AuthForm = ({ children, ...props }: IFormProps) => {

  return (
    <form
      {...props}
      className={twMerge(
        `p-[2%] bg-white text-darker-color rounded-lg gap-4 grid w-full items-center mx-auto max-w-[MIN(100%,488px)]`,
        props.className
      )}
    >
      {children}
    </form>
  );
};

export default AuthForm;
