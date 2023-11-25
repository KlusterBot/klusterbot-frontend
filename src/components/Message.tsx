import clsx from "clsx";

const Message = ({ owner, msgValue }: { owner?: boolean, msgValue:string }) => {
  return (
    <div
      className={clsx(
        `px-4 py-2 rounded-[1rem] h-max max-w-[90%] w-max ${
          owner ? "self-end bg-dark-blue-color" : "bg-gray-500 "
        }`
      )}
    >
      {msgValue}
    </div>
  );
};

export default Message;
