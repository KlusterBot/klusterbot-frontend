import ChatBox from "@/components/ChatBox";
import UserChat from "@/components/UserChat";

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
        <ChatBox />
      </div>
    </div>
  );
};
