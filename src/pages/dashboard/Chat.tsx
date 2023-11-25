import Switch from "@/components/Switch";
import UserChat from "@/components/UserChat";
import { LuSendHorizonal } from "react-icons/lu";
import { PiCaretDownBold, PiDotsThreeVerticalBold } from "react-icons/pi";

import user from "../../assets/guy_pointing.png";

export const Chat = () => {
  return (
    <div className="flex flex-col gap-6">
      <h2>Chats</h2>
      <div className="flex-1 flex gap-10">
        <div className="h-max max-h-[45rem] overflow-scroll w-[45%] shadow-md border-[.1rem] rounded-lg p-2 border-gray-300">
          <UserChat />
          <UserChat />
          <UserChat />
        </div>
        <div className="flex flex-col rounded-lg self-start h-max overflow-hidden w-[28rem] self-start">
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
              <div className="resize-none bg-gray-500 block px-4 py-2 rounded-[1rem] h-max max-w-[90%] w-max">
                Hello 👋 Would you like to take a closer look at our offer?{" "}
              </div>
              <div className="bg-dark-blue-color  bg-d block px-4 py-2 rounded-[1rem] h-max max-w-[90%] w-max self-end">
                yes please
              </div>
              <div className="bg-gray-500 block px-4 py-2 rounded-[1rem] h-max outline-none max-w-[90%] w-max">
                Amazing! Well, kindly provide us with your details
              </div>
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
      </div>
    </div>
  );
};
