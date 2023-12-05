import SetupForm from "../components/templates/SetupForm";
import Button from "../UI/Button";
import { ImAttachment } from "react-icons/im";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import { ChangeEvent, useState } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router";
import { getToken } from "@/lib/services/localStorageServices";
import { useSetupBotMutation } from "@/store/services/api/setup";
import { ClipLoader } from "react-spinners";
import toast from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

export const Setup = () => {
  const formDetailsInitState = {
    document: "",
    company: "",
    website: "",
  };

  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [setupBot, { isLoading }] = useSetupBotMutation();
  const [formDetails, setFormDetails] = useState(formDetailsInitState);

  const inputClass =
    "border-solid rounded-lg border-[1px] border-dark-blue-color p-2 outline-none";
  const inputContainerClass =
    "flex flex-col gap-2.5 text-gray-500 w-[68%] max-sm:w-[90%]";

  const token = getToken();

  const user = token && jwtDecode(token);
  // @ts-ignore
  const user_id = user?.["id"];
  // @ts-ignore
  const isVerified = user?.["verified"];

  const goToNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const goToPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const goToDashboard = () => {
    navigate("/dashboard");
  };

  const formInputHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    event.preventDefault();
    const input = event.target.name;
    const value = event.target.value;
    // @ts-ignore
    setFormDetails((prev) => ({ ...prev, [input]: value }));
  };

  const submitFormHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formDetails || isLoading) return;
    try {
      const data = await setupBot(formDetails).unwrap();
      setFormDetails(formDetailsInitState);
      toast.success(data.message);
      goToNextStep();
    } catch (error: any) {}
  };

  const copyToClipboard = () => {
    const code = document.getElementById("code");
    if (code) navigator.clipboard.writeText(code.textContent || "");
    toast.success("Copied to clipboard");
  };

  const scanDocument = async (event: ChangeEvent<HTMLInputElement>) => {
    const texttype = /text.*/;
    const file = event?.target?.files?.[0];
    const reader = new FileReader();
    if (file) {
      if (!file.type.match(texttype)) {
        toast.error("File type not allowed");
        return;
      }
      reader.onloadend = async (res) => {
        const data = res?.target?.result?.toString();
        const string = data?.replace(/^\s*[\r\n]/gm, "");
        const array = string?.split(new RegExp(/[\r\n]/gm));
        const document = array?.join("\n");
        if (document) setFormDetails((prev) => ({ ...prev, document }));
      };
      reader.readAsText(file);
    }
  };

  return token && isVerified ? (
    <Navigate to="/dashboard" replace />
  ) : !token ? (
    <Navigate to="/login" replace />
  ) : (
    <div className="w-screen h-screen overflow-hidden bg-white">
      <motion.div
        className="flex h-full w-full "
        animate={{ x: `${-(step - 1) * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        <SetupForm className="inline-block">
          <div className="flex flex-col items-center justify-center md:w-[70%] w-full mx-auto pt-12 gap-12 h-full bg-white z-10 relative">
            <div className="flex items-center justify-center gap-1 font-semibold">
              <p className="px-3">Step {step} of 2 </p>
              <span className="w-3 h-3 bg-dark-blue-color rounded-full"></span>
              <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
            </div>
            <form
              onSubmit={submitFormHandler}
              className="flex flex-col items-center gap-7 w-full overflow-y-scroll flex-1 z-10 pb-7"
            >
              <h1 className="text-xl text-dark-blue-color text-center mt-4">
                Set-up your Bot
              </h1>
              <div className={`${inputContainerClass}`}>
                <label htmlFor="company" className="">
                  Enter Company name
                </label>
                <input
                  type="text"
                  name="company"
                  required
                  onChange={formInputHandler}
                  value={formDetails?.company}
                  placeholder="Example company"
                  className={`${inputClass}`}
                />
              </div>
              <div className={`${inputContainerClass}`}>
                <label htmlFor="website">Enter Company Website</label>
                <input
                  type="url"
                  name="website"
                  onChange={formInputHandler}
                  value={formDetails?.website}
                  placeholder="https://www.example.com"
                  required
                  className={`${inputClass}`}
                />
              </div>
              <div className={`${inputContainerClass} relative`}>
                <label htmlFor="about">About Company</label>
                <p className="text-sm">
                  (Kluster AI will use this information to reply to your
                  customers)
                </p>
                <textarea
                  placeholder="Please provide as much information as possible about your business, you can also upload a text file"
                  required
                  name="document"
                  minLength={100}
                  rows={4}
                  value={formDetails?.document}
                  onChange={formInputHandler}
                  className={`${inputClass} min-h-[5rem] pr-9`}
                ></textarea>
                <button
                  type="button"
                  className="absolute right-[2.2rem]  max-[864px]:top-[5.3rem] min-[864px]:top-[4rem]  lg:top-[4rem] cursor-none"
                >
                  <span className="absolute p-2 scale-[1.1] rounded-lg">
                    <ImAttachment />
                  </span>
                  <input
                    type="file"
                    accept="*/txt"
                    className="absolute opacity-0 w-8 !cursor-pointer"
                    onChange={scanDocument}
                  />
                </button>
                <p className="font-bold text-[.7rem] text-center">
                  You can only submit txt files
                </p>
              </div>

              {isLoading ? (
                <button className="w-44 border-[.1rem] border-black flex items-center justify-center gap-2 rounded-[5rem] border-solid p-2.5 cursor-pointer text-lg bg-dark-blue-color">
                  <ClipLoader color="#fff" />
                </button>
              ) : (
                <Button className="mt-10" buttonText={"Continue"} />
              )}
            </form>
          </div>
        </SetupForm>
        <SetupForm className="inline-block">
          <div className="flex flex-col items-center justify-center md:w-[70%] w-full mx-auto pt-12 gap-12 h-full bg-white z-10 relative">
            <div className="flex items-center justify-center gap-1 font-semibold">
              <p className="px-3">Step {step} of 2 </p>
              <span className="w-3 h-3 bg-dark-blue-color rounded-full"></span>
              <span className="w-3 h-3 bg-dark-blue-color rounded-full"></span>
            </div>
            <div className="flex flex-col items-center gap-10 w-full overflow-y-scroll flex-1 z-10">
              <div>
                <h1 className="text-xl text-dark-blue-color text-center">
                  Quickly respond to customer's needs in your absence
                </h1>
                <p className="text-sm mt-2">
                  Provide customers the swift response they seek to improve
                  their business
                </p>
              </div>
              <p className="text-sm">
                Paste this code just in the {"</head>"} tag of your site code
              </p>
              <div className={`${inputContainerClass}`}>
                <label htmlFor="name" className="">
                  Code
                </label>
                <code
                  placeholder="Klustermann"
                  className={`${inputClass} h-max font-bold text-black`}
                  id="code"
                >
                  {`<script
                    src="https://api.kluster-ai.online/api/me/embed/${user_id}/kluster.js"></script>`}
                </code>
              </div>
              <button
                className="bg-[#dce1f5] p-2 px-4 rounded-[2rem] text-dark-blue-color flex items-center justify-center gap-4"
                onClick={copyToClipboard}
              >
                <IoCopyOutline />
                Copy to clipboard
              </button>
            </div>
            <div className="flex gap-10 py-8">
              <Button
                onClick={goToPrevStep}
                buttonText="Return"
                bordered
                className="!py-[.5rem] w-44"
              />
              <Button
                onClick={goToDashboard}
                buttonText="Continue"
                className="!py-[.2rem] w-44"
              />
            </div>
          </div>
        </SetupForm>
      </motion.div>
    </div>
  );
};
