import { SettingsForm } from "@/components/molecules";
import { baseUrl, getError } from "@/lib/utils";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Settings = () => {
    const [form, setForm] = useState({
        company: "",
        website: "",
        about: "",
        callable: "",
        theme: "",
        token: "",
        name: "",
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

    useEffect(() => {
        fetchData();
    }, []);

    const uploadFile = () => {
        let file = document.createElement("input");
        file.type = "file";
        file.onchange = async () => {
            if (file.files[0]) {
                let photo = file.files[0];
                let formData = new FormData();

                formData.append("logo", photo);
                const token = localStorage.getItem("token") || "";
                try {
                    let response = await fetch(api + "/api/upload", {
                        method: "POST",
                        body: formData,
                        headers: { Authorization: "Bearer " + token },
                    });
                    let result = await response.json();

                    setLogo(result.data.filename + "?cache=" + Math.random());
                    setLoading(false);
                    setModalType("success");
                    setModalMessage(result.message);
                    setOpen(true);
                } catch (error) {
                    setLoading(false);
                    setModalType("error");
                    setModalMessage(error.message);
                    setOpen(true);
                }
            } else {
                console.log(file.files);
            }
        };
        file.click();
    };

    return (
        <section className="w-full relative z-0 max-w-[MIN(100%,488px)] flex flex-col items-center mx-auto h-full px-[MIN(2em,5%)] p2-4 pb-[MIN(100px,10%)]">
            <h2 className="font-bold text-dark-blue-color my-4">Update info</h2>

            <div className="grid place-content-center text-center">
                <img className="block mx-auto aspect-square rounded-full overflow-hidden w-[100px] h-auto justify-center items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></img>

                <p className="text-xl mt-2">{form.company}</p>
                <p className="">{form.name}</p>
            </div>

            <SettingsForm />
        </section>
    );
};
