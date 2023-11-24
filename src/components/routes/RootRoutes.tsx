import { Route, Routes } from "react-router";
import { Home, NotFound } from "../../pages";

const RootRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default RootRoutes;
