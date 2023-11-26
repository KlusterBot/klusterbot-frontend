import "./App.css";

import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "react-hot-toast";

import { AppRoutes } from "./components";
import { useLocation } from "react-router";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function App() {
  const { pathname } = useLocation();
  return (
    <>
      <motion.main
        id="main"
        key={pathname}
        initial="hidden"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ type: "linear" }}
      >
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <AppRoutes />
        </AnimatePresence>
        <Toaster />
      </motion.main>
    </>
  );
}

export default App;
