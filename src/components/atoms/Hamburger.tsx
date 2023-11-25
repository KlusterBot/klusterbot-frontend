import { useNav } from "@/context/nav_context";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export const Hamburger = () => {
  const { isOpen, toggleNav } = useNav();
  return (
    <button
      onClick={toggleNav}
      className="ml-auto bg-dark-blue-color/50 flex place-content-center bg-secondary-grey-600 place-items-center md:hidden z-50 rounded-full text-base cursor-pointer w-12 h-12 p-3 active:bg-gray-800"
    >
      {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </button>
  );
};
