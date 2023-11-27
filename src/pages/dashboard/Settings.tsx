import { SettingsForm } from "@/components/molecules";
import { baseUrl, getError } from "@/lib/utils";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getToken } from "@/lib/services/localStorageServices";

export const Settings = () => {
    const API = import.meta.env.VITE_REACT_APP_REAL_BASE_URL;
    const [form, setForm] = useState({
        company: "",
        website: "",
        about: "",
        callable: "",
        theme: "",
        token: "",
        name: "",
        logo: "",
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

    const uploadFile = () => {
        const file = document.createElement("input");
        file.type = "file";
        file.onchange = async () => {
            if (!file || !file.files || file.files.length === 0) return;

            if (file.files[0]) {
                const photo = file.files[0];
                const formData = new FormData();

                formData.append("logo", photo);
                try {
                    const token = getToken();
                    const response = await fetch(API + "/api/upload", {
                        method: "POST",
                        body: formData,
                        headers: { Authorization: "Bearer " + token },
                    });
                    const result = await response.json();

                    setForm({
                        ...form,
                        logo: result.data.filename + "?cache=" + Math.random(),
                    });
                } catch (error) {
                    toast.error(getError(error));
                }
            }
        };
        file.click();
    };

    return (
        <section className="w-full relative z-0 max-w-[MIN(100%,488px)] flex flex-col items-center mx-auto h-full px-[MIN(2em,5%)] p2-4 pb-[MIN(100px,10%)]">
            <h2 className="font-bold text-dark-blue-color my-4">Update info</h2>

            <div className="grid place-content-center text-center">
                <img
                    alt="Logo"
                    onClick={uploadFile}
                    src={API + "/files/" + form.logo}
                    className="block mx-auto aspect-square object-contain rounded-full overflow-hidden w-[100px] h-auto justify-center items-center cursor-pointer"
                />

                <p className="text-xl mt-2">{form.company}</p>
                <p className="">{form.name}</p>
            </div>

            <SettingsForm />
        </section>
    );
};
