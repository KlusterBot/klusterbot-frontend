import React from "react";
import { DashboardHeader, DashboardSidebar } from "../molecules";

export const DashboardLayout = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <main className="bg-white min-h-full relative flex">
      <DashboardSidebar />

      <section className="w-full h-full grid gap-6">
        <DashboardHeader />

        <section className="py-[MIN(5%,50px)] px-[MIN(100px,5%)]">{children}</section>
      </section>
    </main>
  );
};
