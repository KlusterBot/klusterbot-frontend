import Container from "./Container";
import GetStartedButton from "./GetStartedButton";
import PointerImage from "./PointerImage";

const HeroSection = () => {
  return (
    <Container>
      <div className="hero-section flex gap-4 items-center justify-between">
        <div className="w-1/2 my-auto">
          <h1 className="font-bold text-[3rem] text-darker-color">
            Enhance your customer support using our impactful solution
          </h1>
          <p>
            Transform customer support through our AI-driven solution, providing
            unmatched efficiency and seamless assistance.
          </p>
          <GetStartedButton className="mt-6" />
        </div>
        <PointerImage className="scale-[.85]" />
      </div>
    </Container>
  );
};

export default HeroSection;
