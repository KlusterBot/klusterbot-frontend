import user from "../assets/guy_pointing.png";
const UserChat = () => {
  return (
    <div className="h-20 flex justify-center gap-4 p-2 w-full border-gray-300 border-solid border-b-[.1rem]">
      <img
        src={user}
        alt=""
        className="object-cover rounded-full w-10 h-10 bg-black self-center"
      />
      <div className="flex justify-between flex-1 self-center gap-4">
        <span className="flex-1">
          <p className="text-md font-[450]">User 1</p>
          <p className="text-[.8rem]">typing...</p>
        </span>
        <p className="text-[.6rem] mt-1">Today</p>
      </div>
    </div>
  );
};

export default UserChat;
