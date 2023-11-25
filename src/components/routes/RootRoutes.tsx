import { Home, NotFound } from "@/pages";
import { Route, Routes } from "react-router";

export const RootRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};
