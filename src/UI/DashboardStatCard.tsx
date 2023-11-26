const DashboardStatCard = ({
  title,
  statValue,
}: {
  title: string;
  statValue: number;
}) => {
  return (
    <div className="flex flex-col gap-2 justify-between p-2.5 px-4 border-gray-300 border-[.1rem] border-solid md:min-w-[16rem]  min-w-full min-h-[6.5rem] rounded-lg flex-1 ">
      <p>{title}</p>
      <p className="text-3xl font-semibold">{statValue || 0}</p>
    </div>
  );
};

export default DashboardStatCard;
