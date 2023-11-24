import { SettingsForm } from "@/components/molecules";

export const Settings = () => {
  return (
    <section className="w-full relative z-0 max-w-[MIN(100%,488px)] flex flex-col items-center mx-auto h-full px-[MIN(2em,5%)] p2-4 pb-[MIN(100px,10%)]">

      <h2 className="font-bold text-dark-blue-color my-4">Update info</h2>

      <div className="grid place-content-center text-center">
        <span className="block mx-auto aspect-square rounded-full overflow-hidden w-[100px] h-auto justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></span>

        <p className="text-xl mt-2">Klustermann Ltd</p>
        <p className="">Klusterman Murife</p>
      </div>

      <SettingsForm />
    </section>
  );
};
