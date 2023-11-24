
import { Chat, DashboardHome, NotFound, Playground, Settings } from "@/pages";
import { Route, Routes } from "react-router";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/home" element={<DashboardHome />} />
      <Route path="/playground" element={<Playground />} />
    </Routes>
  );
};
