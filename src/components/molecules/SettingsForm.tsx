import { Input } from "../atoms";

export const SettingsForm = () => {
  return (
    <form action="" className="my-8 w-full mx-auto grid gap-4 p-4 relative z-0">
      <Input label="Enter Company Name" placeholder="Klustermann" />
      <Input label="Enter Company Name" placeholder="Klustermann" />
      <Input
        label="About Company"
        rows={4}
        isTextArea
        placeholder="Klustermann"
      />
      <Input placeholder="Upload company's info document" />
      <Input label="Bot Token" placeholder="1" />

      <div className="flex w-full py-4 items-center gap-12 max-w-[292px]">
        <p>Enable support agent</p>
        <input type="checkbox"  className=""/>
      </div>

      <button
        type="submit"
        className="flex w-full mt-12 rounded-3xl text-white text-center bg-dark-blue-color justify-center items-center outline-none gap-x-4 px-4 py-3 wc-56  hover:bg-primary duration-500 abdsolute bottom-16"
      >
        {/* <Image src={logoutIcon} alt="Dashboard Icon" /> */}
        <span>Save</span>
      </button>
    </form>
  );
};
