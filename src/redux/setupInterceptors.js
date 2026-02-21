import apiClient from "./apiClient";
import { tokenService } from "./tokenService";

apiClient.interceptors.request.use(
    (config) => {
        const token = tokenService.getAccessToken();

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);