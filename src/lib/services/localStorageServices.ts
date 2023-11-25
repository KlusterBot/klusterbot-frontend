const TOKEN = "@token";
const USER = "@user";

export const getToken = () => localStorage.getItem(TOKEN);

export const setToken = (token: string) => localStorage.setItem(TOKEN, token);

export const logOut = () => {
    localStorage.removeItem(TOKEN);
    localStorage.removeItem(USER);
};

export const clearStorage = () => localStorage.clear();
