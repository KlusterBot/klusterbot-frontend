import { useState, useEffect } from "react";
import { Input } from "../atoms";
import { baseUrl, getError } from "../../lib/utils";
import toast from "react-hot-toast";

export const SettingsForm = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        company: "",
        website: "",
        about: "",
        callable: "",
        theme: "",
        token: "",
    });

    const fetchData = async () => {
        try {
            const response = await baseUrl.get("/me");
            const data = response?.data;

            if (data.success) {
                setForm(data.data);
            }

            console.log(data);
        } catch (error) {
            toast.error(getError(error));
        }
    };

    const submitData = async () => {
        try {
            setLoading(true);
            const response = await baseUrl.post("/me/update", form);
            const data = response?.data;

            console.log(data);

            toast.success(data.message);

            setLoading(false);
        } catch (error) {
            console.log({ error: getError(error) });
            return { error: getError(error) };
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <form
            action=""
            className="my-8 w-full mx-auto grid gap-4 p-4 relative z-0"
        >
            <Input
                label="Enter Company Name"
                placeholder="Klustermann"
                value={form.company}
                onChange={(e) => {
                    setForm({ ...form, company: e.target.value });
                }}
            />
            <Input
                label="Enter Company Website"
                placeholder="www.example.com"
                value={form.website}
                onChange={(e) => {
                    setForm({ ...form, website: e.target.value });
                }}
            />
            <Input
                label="About Company"
                rows={4}
                isTextArea
                placeholder="Klustermann"
                value={form.about}
                onChange={(e) => {
                    setForm({ ...form, about: e.target.value });
                }}
            />
            {/* <Input placeholder="Upload company's info document" /> */}
            <Input
                label="Bot Token"
                placeholder="1"
                value={form.token}
                onChange={(e) => {
                    setForm({ ...form, token: e.target.value });
                }}
            />

            <Input
                label="Bot Theme Color"
                placeholder="1"
                value={form.theme}
                type="color"
                onChange={(e) => {
                    setForm({ ...form, theme: e.target.value });
                }}
                className=""
            />

            {/* <div className="flex w-full py-4 items-center gap-12 max-w-[292px]">
                <p>Enable support agent</p>
                <input type="checkbox" className="" />
            </div> */}

            <button
                type="submit"
                disabled={loading}
                onClick={submitData}
                className="flex w-full mt-12 rounded-3xl text-white text-center bg-dark-blue-color justify-center items-center outline-none gap-x-4 px-4 py-3 wc-56  hover:bg-primary duration-500 abdsolute bottom-16"
            >
                {/* <Image src={logoutIcon} alt="Dashboard Icon" /> */}
                <span>Save</span>
            </button>
        </form>
    );
};
