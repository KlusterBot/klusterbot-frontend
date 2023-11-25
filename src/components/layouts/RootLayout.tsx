import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-[100svh]">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
