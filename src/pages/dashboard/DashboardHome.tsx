import DashboardStatCard from "@/UI/DashboardStatCard";
import ConversationsChart from "@/components/ConversationsChart";
import empty from "../../assets/empty.png"

export const DashboardHome = () => {
  return (
    <div className="flex jusify-center flex-col gap-10">
      <div className="flex flex-col gap-8">
        <div></div>
        <div className="flex gap-8 items-center">
          <DashboardStatCard title="Total conversations" statValue={0} />
          <DashboardStatCard title="Bot handled conversations" statValue={0} />
          <DashboardStatCard
            title="Agent handled conversations"
            statValue={0}
          />
        </div>
      </div>
      <div className="flex gap-20 justify-center">
        <div className="p-5 w-[40%] rounded-lg border-gray-300 border-[.1rem]">
          <ConversationsChart />
        </div>
        <div className="p-5 w-[40%] rounded-lg border-gray-300 border-[.1rem] flex flex-col justify-center items-center gap-4 text-center">
          <img src={empty} alt="" className="w-[70%]" />
          <p className="text-lg font-semibold">You've not been rated</p>
          <p  className="text-sm text-gray-400">Your customers haven't shared feedback on your conversations</p>
        </div>
      </div>
    </div>
  );
};
