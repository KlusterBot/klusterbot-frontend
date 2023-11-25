import React from "react";
import { DashboardHeader, DashboardSidebar } from "../molecules";
import { NavProvider } from "@/context/nav_context";

export const DashboardLayout = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <NavProvider>
            <main className="bg-white min-h-full flex !oveflow-hidden">
                <DashboardSidebar />

                <section className="w-full h-full grid gap-6 relative overf">
                    <DashboardHeader />

                    <section className="py-6 px-[MIN(100px,5%)]">
                        {children}
                    </section>
                </section>
            </main>
        </NavProvider>
    );
};
