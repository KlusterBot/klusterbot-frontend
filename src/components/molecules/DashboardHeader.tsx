import { Link } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Hamburger } from "../atoms";
import { useEffect, useState } from "react";
import { baseUrl, getError } from "@/lib/utils";
import toast from "react-hot-toast";

export const DashboardHeader = () => {
    const API = import.meta.env.VITE_REACT_APP_REAL_BASE_URL;
    const [form, setForm] = useState({
        logo: "",
        name: "",
        status: "offline",
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
    return (
        <div className="w-full bg-white z-10 sticky top-0 left-0 shadow-lg py-5 px-[MIN(100px,5%)] flex items-center border-b border-dark-blue-color">
            <div className="md:flex-row-reverse md:ml-auto my-auto flex gap-4 items-center justify-between">
                <Link
                    to={"/dashboard/settings"}
                    className="flex items-center gap-3"
                >
                    <div className="flex items-center gap-1 relative h-fit">
                        <img
                            alt="logo"
                            src={API + "/files/" + form.logo}
                            className="h-[40px] w-[40px] rounded-[50%]"
                        />
                        <span
                            className={`h-[10px] w-[10px] rounded-[50%] ${
                                form.status === "offline"
                                    ? "bg-red-500"
                                    : "bg-green-500"
                            } absolute top-[26.5px] left-[30.5px]`}
                        ></span>
                    </div>

                    <span className="capitalize">
                        Hi, <small>{form.name || "User"}</small>
                    </span>
                </Link>
                <div className="flex items-center gap-1 relative h-fit">
                    <span
                        className={`h-[7px] w-[7px] rounded-[50%] bg-red-500 absolute top-[6.5px] left-[16.3px]`}
                    ></span>
                    <IoMdNotificationsOutline className="text-[#000] text-[1.6rem] font-semibold" />
                </div>
            </div>

            <Hamburger />
        </div>
    );
};
