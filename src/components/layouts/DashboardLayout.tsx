import React from "react";
import { DashboardHeader, DashboardSidebar } from "../molecules";
import { NavProvider } from "@/context/nav_context";
import { Navigate } from "react-router";

export const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {


  const isSetupComplete = true

  if(!isSetupComplete){
    return <Navigate to='/setup'/>
  }

  return (
    <NavProvider>
      <main className="bg-white min-h-full flex">
        <DashboardSidebar />
        <section className="w-full h-full grid gap-6 relative">
          <DashboardHeader />
          <section className="py-6 px-[MIN(100px,5%)]">{children}</section>
        </section>
      </main>
    </NavProvider>
  );
};
