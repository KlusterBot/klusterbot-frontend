import { Route, Routes } from "react-router";
import { About, Contact, Home, NotFound, Services } from "../../pages";

const RootRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/*" element={<NotFound />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact-us" element={<Contact />} />
    </Routes>
  );
};

export default RootRoutes;
