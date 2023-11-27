import { useState, useEffect } from "react";
import { Input } from "../atoms";
import { baseUrl, getError } from "../../lib/utils";
import toast from "react-hot-toast";
import { getToken } from "@/lib/services/localStorageServices";
import { jwtDecode } from "jwt-decode";
import { IoCheckmarkDone, IoCopyOutline } from "react-icons/io5";

export const SettingsForm = () => {
    const token = getToken();
    const user = token && jwtDecode(token);
    // @ts-ignore
    const user_id = user?.["id"];
    const [isCopied, setIsCopied] = useState(false);
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
        } catch (error) {
            toast.error(getError(error));
        }
    };

    const submitData = async () => {
        try {
            setLoading(true);
            const response = await baseUrl.post("/me/update", form);
            const data = response?.data;

            toast.success(data.message);

            setLoading(false);
        } catch (error) {
            toast.error(getError(error));
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const copyToClipboard = () => {
        if (isCopied) return;
        const code = document.getElementById("code") as HTMLInputElement;
        navigator.clipboard.writeText(code.value);
        toast.success("Copied to clipboard");
        setIsCopied(true);
    };

    useEffect(() => {
        if (isCopied) setTimeout(() => setIsCopied(false), 2000);
    }, [isCopied]);

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
                label="Bot Tagline"
                rows={4}
                isTextArea
                placeholder="We are a company that provides..."
                value={form.about}
                onChange={(e) => {
                    setForm({ ...form, about: e.target.value });
                }}
            />
            {/* <Input placeholder="Upload company's info document" /> */}
            <Input
                label="Bot Token"
                placeholder="1"
                disabled
                value={form.token}
                onChange={(e) => {
                    setForm({ ...form, token: e.target.value });
                }}
            />
            <div className="flex items-center">
                <Input
                    id="code"
                    label="Code"
                    placeholder="1"
                    disabled
                    value={`<script src="https://api.kluster-ai.online/api/me/embed/${user_id}/kluster.js"></script>`}
                    className="border-r-0 rounded-r-none"
                    onChange={(e) => {
                        setForm({ ...form, token: e.target.value });
                    }}
                />
                <button
                    type="button"
                    className="mt-8 bg-[#EFEFEF]/40  py-4 rounded-r-xl border-r border-b border-t border-[#ccc] pr-2"
                    onClick={copyToClipboard}
                >
                    {!isCopied ? <IoCopyOutline /> : <IoCheckmarkDone />}
                </button>
            </div>

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
