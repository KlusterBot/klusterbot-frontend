import { useEffect, useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Input, Button } from "../../components/atoms";
import { baseUrl, getError } from "../../lib/utils";
import toast from "react-hot-toast";

export const Playground = () => {
    const user = JSON.parse((localStorage.getItem("user") as string) || "{}");
    const PLAYGROUND = import.meta.env.VITE_REACT_APP_PLAYGROUND_URL;

    const frameUrl = `${PLAYGROUND}/?id=${user.id}`;

    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        company: "",
        website: "",
        document: "",
        about: "",
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
            setLoading(false);
        }
    };

    const startBot = async () => {
        try {
            setLoading(true);

            const response = await baseUrl.post("/ai/start");
            const data = response?.data;
            toast.success(data.message);
            setLoading(false);
        } catch (error) {
            toast.error(getError(error));
            setLoading(false);
        }
    };

    const stopBot = async () => {
        try {
            setLoading(true);

            const response = await baseUrl.post("/ai/stop");
            const data = response?.data;
            toast.success(data.message);
            setLoading(false);
        } catch (error) {
            toast.error(getError(error));
            setLoading(false);
        }
    };

    return (
        <div>
            <h1>Playground</h1>
            <div className="flex items-center">
                <div className="kluster-chatbot">
                    <DeviceFrameset zoom={0.7} device="iPhone 8" color="black">
                        <iframe
                            title="chatbot"
                            src={frameUrl}
                            className="w-full h-full"
                        ></iframe>
                    </DeviceFrameset>
                </div>

                <div>
                    <Input
                        rows={12}
                        className="w-[300px]"
                        isTextArea
                        placeholder="Company Info"
                        value={form.about}
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
                    <Button
                        className="m-5 w-full bg-[green]"
                        onClick={startBot}
                        disabled={loading}
                    >
                        Start Bot
                    </Button>
                    <Button
                        className="m-5 w-full bg-[red]"
                        onClick={stopBot}
                        disabled={loading}
                    >
                        Stop Bot
                    </Button>
                </div>
            </div>
        </div>
    );
};
