export const tokenService = {

    getAccessToken: () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("accessToken");
        }
        return null;
    },

    getRefreshToken: () => {
        if (typeof window !== "undefined") {
            return localStorage.getItem("refreshToken");
        }
        return null;
    },

    setTokens: (accessToken, refreshToken) => {
        if (accessToken) localStorage.setItem("accessToken", accessToken);
        if (refreshToken) localStorage.setItem("refreshToken", refreshToken);
    },

    setAccessToken: (token) => {
        localStorage.setItem("accessToken", token);
    },

    clearTokens: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
    }

};