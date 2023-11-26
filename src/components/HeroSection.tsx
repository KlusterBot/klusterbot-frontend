import { getToken } from "@/lib/services/localStorageServices";
import Button from "../UI/Button";
import Container from "./Container";
import PointerImage from "./PointerImage";
import { useAppSelector } from "@/store/hooks/hooks";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const token = getToken();
  const isVerified = useAppSelector((state) => state.isVerified);
  return (
    <Container>
      <div className="hero-section flex gap-4 md:items-center justify-between max-lg:flex-col">
        <div className="w-1/2 my-auto max-lg:w-full">
          <h1 className="font-bold sm:text-[3rem] text-[1.7rem] text-darker-color">
            Enhance your customer support using our impactful solution
          </h1>
          <p>
            Transform customer support through our AI-driven solution, providing
            unmatched efficiency and seamless assistance.
          </p>
          {token && isVerified ? (
            <Link to="/dashboard">
              <Button buttonText="Go to dashboard" className="mt-6" />
            </Link>
          ) : (
            <Button buttonText="Get Started" className="mt-6" />
          )}
        </div>
        <PointerImage className="w-[40%] self-end max-lg:right-[7%] max-lg:translate-y-[-15%] max-lg:scale-[1.2]" />
      </div>
    </Container>
  );
};

export default HeroSection;
