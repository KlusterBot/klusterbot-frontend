import Switch from "@/components/Switch";
import { LuSendHorizonal } from "react-icons/lu";
import { PiCaretDownBold, PiDotsThreeVerticalBold } from "react-icons/pi";

import user from "../assets/guy_pointing.png";
import Message from "./Message";
import clsx from "clsx";

const ChatBox = ({ className }: { className?: string }) => {
  return (
    <div
      className={clsx(
        `flex flex-col rounded-lg  h-max overflow-hidden w-[28rem] ${className}`
      )}
    >
      <header className="bg-dark-blue-color rounded-t-[2rem] text-white p-4 h-[8rem] flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-4">
            <img
              src={user}
              alt=""
              className="object-cover rounded-full w-10 h-10 bg-black self-center"
            />
            <p>User 1</p>
          </span>
          <span className="flex items-center gap-4">
            <PiDotsThreeVerticalBold />
            <PiCaretDownBold />
          </span>
        </div>
        <span className="flex items-center text-[.65rem] gap-4 self-center  w-max">
          <p>Switch to support agent</p>{" "}
          <Switch className="w-[1.5rem] h-[.8rem]" />
        </span>
      </header>
      <div className="flex-1 rounded-b-[2rem] p-4 shadow-inner w-full">
        <div className="h-[26rem] overflow-y-scroll flex flex-col gap-4 text-white pb-4 break-words">
          <Message
            owner
            msgValue="Hello 👋 Would you like to take a closer look at our offer?"
          />
          <Message msgValue="Yes please" />
          <Message
            owner
            msgValue="Amazing! Well, kindly provide us with your details"
          />
        </div>
        <hr />
        <div className="flex justify-between gap-4 pt-4 flex-auto">
          <textarea
            name=""
            id=""
            className="flex-1 resize-none px-2 outline-none"
            placeholder="Enter text here..."
          ></textarea>
          <button className="text-white bg-dark-blue-color h-10 w-10 rounded-full flex items-center justify-center text-2xl">
            <LuSendHorizonal />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBox;
