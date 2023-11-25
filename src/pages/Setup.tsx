import SetupForm from "../components/templates/SetupForm";
import Button from "../UI/Button";
import { motion } from "framer-motion";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import React from "react";
import { Navigate, useNavigate } from "react-router";
import { getToken } from "@/lib/services/localStorageServices";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import { setNewUserToFalse } from "@/store/features/newUserSlice";

const Setup = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [step, setStep] = useState(1);
  const isNewUser = useAppSelector((state) => state.isNewUser);

  console.log(isNewUser);

  const inputClass =
    "border-solid rounded-lg border-[1px] border-dark-blue-color p-2 outline-none";
  const inputContainerClass = "flex flex-col gap-2.5 text-gray-500 w-[60%]";

  const token = getToken();

  const goToNextStep = () => {
    setStep((prev) => prev + 1);
  };
  const goToPrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const goToDashboard = () => {
    navigate("/dashboard");
    dispatch(setNewUserToFalse());
  };

  const submitFormHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    goToNextStep();
  };

  return token && !isNewUser ? (
    <Navigate to="/dashboard/settings" replace />
  ) : !token ? (
    <Navigate to="/signup" replace />
  ) : (
    <div className="w-screen h-screen overflow-hidden">
      <motion.div
        className="flex h-full w-full"
        animate={{ x: `${-(step - 1) * 100}%` }}
        transition={{ duration: 0.5 }}
      >
        <SetupForm className="inline-block">
          <div className="flex flex-col items-center justify-center md:w-[70%] w-full mx-auto pt-12 gap-12 h-full">
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
                <label htmlFor="name" className="">
                  Enter Company name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Example company"
                  className={`${inputClass}`}
                />
              </div>
              <div className={`${inputContainerClass}`}>
                <label htmlFor="website">Enter Company Website</label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://www.example.com"
                  required
                  className={`${inputClass}`}
                />
              </div>
              <div className={`${inputContainerClass}`}>
                <label htmlFor="about">About Company</label>
                <textarea
                  placeholder="Tell us about your company to enable us serve you better."
                  required
                  name="about"
                  minLength={50}
                  rows={4}
                  className={`${inputClass} min-h-[5rem]`}
                ></textarea>
              </div>
              <Button className="mt-10" buttonText="Continue" />
            </form>
          </div>
        </SetupForm>
        <SetupForm className="inline-block">
          <div className="flex flex-col items-center justify-center md:w-[70%] w-full mx-auto pt-12 gap-12 h-full">
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
                Paste this code just before the {"</body>"} tag of your site
                code
              </p>
              <div className={`${inputContainerClass}`}>
                <label htmlFor="name" className="">
                  Code
                </label>
                <p
                  placeholder="Klustermann"
                  className={`${inputClass} h-10`}
                ></p>
              </div>
              <button className="bg-[#dce1f5] p-2 px-4 rounded-[2rem] text-dark-blue-color flex items-center justify-center gap-4">
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

export default Setup;
