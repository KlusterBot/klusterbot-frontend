import { useEffect, useState } from "react";
import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";
import { Input, Button } from "../../components/atoms";
import { baseUrl, getError } from "../../lib/utils";
import toast from "react-hot-toast";
import axios from "axios";

export const Playground = () => {
    const user = JSON.parse((localStorage.getItem("user") as string) || "{}");
    const PLAYGROUND = import.meta.env.VITE_REACT_APP_PLAYGROUND_URL;
    const AI = import.meta.env.VITE_REACT_APP_AI_URL;

    const frameUrl = `${PLAYGROUND}/?id=${user.id}`;

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

            toast.success(data.message);

            setLoading(false);
            await axios.get(AI + "/clean");
        } catch (error) {
            toast.error(getError(error));
            setLoading(false);
        }
    };

    // const startBot = async () => {
    //     try {
    //         setLoading(true);

    //         const response = await baseUrl.post("/ai/start");
    //         const data = response?.data;
    //         toast.success(data.message);
    //         setLoading(false);
    //     } catch (error) {
    //         toast.error(getError(error));
    //         setLoading(false);
    //     }
    // };

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
            <div className="flex items-center flex-col md:flex-row">
                <DeviceFrameset zoom={0.9} device="iPhone 5c" color="white">
                    <iframe
                        title="chatbot"
                        src={frameUrl}
                        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                        className="w-full h-full"
                    ></iframe>
                </DeviceFrameset>

                <div>
                    <Input
                        rows={12}
                        className="w-[300px]"
                        isTextArea
                        placeholder="Company Info"
                        defaultValue={form.document}
                        onChange={(e) => {
                            setForm({ ...form, document: e.target.value });
                        }}
                    />
                    <Button
                        className="m-5 w-full bg-[green]"
                        onClick={updateBot}
                        disabled={loading}
                    >
                        Restart Bot
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
