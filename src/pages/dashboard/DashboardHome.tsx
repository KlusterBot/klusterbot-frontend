import DashboardStatCard from "@/UI/DashboardStatCard";
import ConversationsChart from "@/components/ConversationsChart";
import empty from "../../assets/empty.png";
import { ClipLoader } from "react-spinners";
import { useGetStatsQuery } from "@/store/services/api/dashboard";
import toast from "react-hot-toast";

export const DashboardHome = () => {
  const {
    currentData: statsData,
    isLoading,
    isError,
    error,
  } = useGetStatsQuery(null);
  if (!isLoading && isError)
    // @ts-ignore
    toast.error(error?.data?.message || "Something went wrong");
  return !isLoading ? (
    <div className="flex jusify-center flex-col gap-10">
      <div className="flex flex-col gap-8">
        <div className="flex gap-8 items-center flex-wrap">
          <DashboardStatCard
            title="Total Visitors"
            statValue={statsData?.data?.visitors}
          />
          <DashboardStatCard
            title="Total Messages"
            statValue={statsData?.data?.messages}
          />
          <DashboardStatCard
            title="Avg. Messages Per Visitor "
            statValue={statsData?.data?.average}
          />
        </div>
      </div>
      <div className="flex gap-20 justify-center flex-wrap">
        <div className="p-5 md:w-[45%] grow-1 w-full rounded-lg border-gray-300 border-[.1rem]">
          <ConversationsChart />
        </div>
        <div className="p-5 md:w-[45%] grow-1 flex-1 w-full rounded-lg border-gray-300 border-[.1rem] flex flex-col justify-center items-center gap-4 text-center">
          <img src={empty} alt="" className="w-[70%]" />
          <p className="text-lg font-semibold">You've not been rated</p>
          <p className="text-sm text-gray-400">
            Your customers haven't shared feedback on your conversations
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-[70vh] ">
      <ClipLoader />
    </div>
  );
};
