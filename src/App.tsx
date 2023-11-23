import { Route, Routes } from "react-router";
import "./App.css";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact-us" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
