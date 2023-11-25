import { useEffect, useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Input, Button } from "../../components/atoms";
import { baseUrl, getError } from "../../lib/utils";
import toast from "react-hot-toast";

export const Playground = () => {
    const user = JSON.parse((localStorage.getItem("user") as string) || "{}");
    const API = import.meta.env.VITE_REACT_APP_REAL_BASE_URL;
    const CHATBOT = import.meta.env.VITE_REACT_APP_CHATBOT_URL;

    // Random string generator
    const randomString = (length: number) => {
        const chars =
            "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let result = "";
        for (let i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };

    const [visitor, setVisitor] = useState(randomString(10));

    const frameUrl = `${CHATBOT}/support/${user.id}/${visitor}`;

    useEffect(() => {
        const scriptUrl = `${API}/api/me/embed/${user.id}/kluster.js`;
        const script = document.createElement("script");
        script.src = scriptUrl;
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        company: "",
        website: "",
        document: "",
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

    useEffect(() => {
        fetchData();
    }, []);

    const updateBot = async () => {
        try {
            setLoading(true);

            const response = await baseUrl.post("/ai/add", {
                website: form.website,
                company: form.company,
                document: form.document,
            });

            const data = response?.data;

            console.log(data);

            toast.success(data.message);

            setLoading(false);
        } catch (error) {
            toast.error(getError(error));
        }
    };

    return (
        <div>
            <h1>Playground</h1>
            <div className="flex items-center">
                <div className="kluster-chatbot">
                    <DeviceFrameset zoom={0.7} device="iPhone 8" color="black">
                        <iframe
                            id="kluster_iframe"
                            title="chatbot"
                            src={frameUrl}
                            className="w-full h-full"
                        ></iframe>
                    </DeviceFrameset>
                </div>
                <div>
                    <Input
                        rows={15}
                        className="w-[300px]"
                        isTextArea
                        placeholder="Company Info"
                        onChange={(e) => {
                            setForm({ ...form, document: e.target.value });
                        }}
                    />
                    <Button
                        className="m-5 w-full"
                        onClick={updateBot}
                        disabled={loading}
                    >
                        Update Bot
                    </Button>
                </div>
            </div>
        </div>
    );
};
