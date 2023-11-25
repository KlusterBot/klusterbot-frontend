import { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

const Switch = ({className}:{className:string}) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => setIsOn(prev => !prev);

  const spring = {
    type: "spring",
    stiffness: 700,
    damping: 30,
    };
    
    const buttonPos = isOn ?'items-start' : "items-end"

  return (
    <div className={clsx(`${buttonPos} h-5 w-10 px-1 bg-white flex flex-col rounded-[3rem] justify-center ${className}`)} onClick={toggleSwitch}>
      <motion.div className="bg-dark-blue-color w-[50%] h-[70%] rounded-full" layout transition={spring} />
    </div>
  );
};

export default Switch;
