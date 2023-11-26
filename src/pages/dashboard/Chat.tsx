import { getToken } from "@/lib/services/localStorageServices";

export const Chat = () => {
    const CHATBOT = import.meta.env.VITE_REACT_APP_CHATBOT_URL as string;
    const token = getToken();
    return (
        <div className="flex flex-col gap-6 h-full">
            <h2>Chats</h2>
            <iframe
                className="w-full h-[70vh]"
                title="chat"
                src={CHATBOT + "/?token=" + token}
            ></iframe>
        </div>
    );
};
