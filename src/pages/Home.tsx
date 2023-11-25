import HeroSection from "../components/HeroSection";
import chat from "../assets/fullchat-1.png";
import interactions from "../assets/interaction-image.png";
import faqChat from "../assets/chat-1.png";
import faqChat2 from "../assets/chat-2.png";
import carouseItem1 from "../assets/carousel-item-1.png";
import carouseItem2 from "../assets/carousel-item-2.png";
import carouseItem3 from "../assets/carousel-item-3.png";
import clsx from "clsx";
import Button from "../UI/Button";
import Container from "../components/Container";
import Carousel from "../components/Carousel";

export const Home = () => {
  const h2Classes = "font-bold sm:text-[2.4rem] text-darker-color text-[1.3rem]";
  const h4Classes = "font-bold sm:text-xl text-darker-color mb-2";

  return (
    <div className="text-lighter-color">
      <HeroSection />

      {/* SOLVE.... */}
      <Container>
        <div
          className="flex gap-8 items-center justify-between md:pt-32 md:pb-16  py-8"
          id="about-us"
        >
          <div className="flex flex-col gap-8 w-[55%] max-md:w-full">
            <h2 className={clsx(`${h2Classes}`)}>
              Solve customer problems instantly using AI
            </h2>
            <div className="flex gap-8 justify-between flex-wrap">
              <div>
                <h4 className={clsx(`${h4Classes}`)}>
                  Reduce your response time
                </h4>
                <p>
                  Respond to customer messages using conversational AI that
                  emulates human language. Kluster can address customer's
                  inquiries through AI-powered conversations.
                </p>
              </div>
              <div>
                <h4 className={clsx(`${h4Classes}`)}>24/7 Support</h4>
                <p>
                  Put personalized support within reach so customers can get
                  fast answers on their queries and problems
                </p>
              </div>
            </div>
            <Button buttonText="Get Started" bordered />
          </div>
          <img src={chat} alt="" className="w-[45%] md:block hidden" />
        </div>
      </Container>

      {/* BANNER */}
      <Container className="bg-primary-light-blue">
        <h1 className="sm:text-3xl text-xl text-center font-bold md:py-32 md:w-[60%] py-8">
          We collaborate with all enterprises (SMEs, MNEs) to facilitate growth
          in Kluster
        </h1>
      </Container>

      {/* INTERACT .... */}
      <Container>
        <div
          className="flex gap-8  py-8 md:py-32 items-center justify-between"
          id="services"
        >
          <div className="w-[45%] max-md:w-full">
            <h2 className={clsx(`${h2Classes} mb-8`)}>
              Interact with visitors on your website through live chat
            </h2>
            <h4 className={clsx(`${h4Classes}`)}>
              Monitor as they navigate your website
            </h4>
            <p>
              Utilize the live chat to actively engage with your visitors,
              providing personalized information tailored to their activities to
              cultivate loyalty and convert them into long-term customers.
            </p>
          </div>
          <img src={interactions} alt="" className="w-[45%] md:block hidden" />
        </div>
      </Container>

      {/* FAQS... */}
      <Container className="">
        <div className="flex flex-col gap-8  py-8 md:pb-32 items-center justify-between">
          <h2 className={clsx(`${h2Classes} text-center`)}>
            Automate frequently asked questions.
          </h2>
          <p className="p-4 text-center">
            Our chatbot can reduce the workload on your team by addressing
            frequently asked questions.
          </p>
          <div className="flex items-center justify-between gap-8 mb-8">
            <img src={faqChat} alt="" className="w-[45%] sm:block hidden" />
            <div>
              <h4 className={clsx(`${h4Classes}`)}>Complete self-service</h4>
              <p>
                Most frequently asked questions by visitors are well attended to
                by our chatbots, so you can focus on more productive task.
              </p>
              <Button buttonText="Get Started" bordered className="mt-8" />
            </div>
          </div>
          <div className="flex items-center flex-row-reverse justify-between gap-8 mb-6">
            <img src={faqChat2} alt="" className="w-[45%] sm:block hidden" />
            <div className="">
              <h4 className={clsx(`${h4Classes}`)}>
                Swift resolution for customers
              </h4>
              <p>
                Unlock premium functionalities. Streamline your customer service
                with Kluster AI. Collaborate with our effective AI to automate
                your business.
              </p>
              <Button buttonText="Get Started" bordered className="mt-8" icon />
            </div>
          </div>
        </div>
      </Container>

      {/* CUSTOM REVIEWS SECTION */}
      <Container className="bg-primary-light-blue">
        <div className=" md:pt-16 md:pb-24 flex flex-col gap-14 py-8">
          <div>
            <h2 className={clsx(`${h2Classes} text-center`)}>
              Why choose us ?
            </h2>
            <p className="p-2 text-center">
              Here are some of our customer's review
            </p>
          </div>
          <Carousel>
            <img src={carouseItem1} alt="" />
            <img src={carouseItem2} alt="" />
            <img src={carouseItem3} alt="" />
          </Carousel>
        </div>
      </Container>
    </div>
  );
};

