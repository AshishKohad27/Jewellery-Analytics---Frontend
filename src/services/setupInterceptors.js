import apiClient from "./apiClient";
import { tokenService } from "./tokenService";

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
    console.log("processQueue")
    failedQueue.forEach(prom => {
        if (error) prom.reject(error);
        else prom.resolve(token);
    });
    failedQueue = [];
};

apiClient.interceptors.request.use((config) => {
    const token = tokenService.getAccessToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    response => response,
    async error => {
        console.log('error: ', error);

        const originalRequest = error.config;

        if (error.response?.status === 401 && !originalRequest._retry) {

            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                }).then(token => {
                    originalRequest.headers.Authorization = `Bearer ${token}`;
                    return apiClient(originalRequest);
                });
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {

                const refreshToken = tokenService.getRefreshToken();

                const res = await apiClient.post("/auth/refresh", { refreshToken });

                const newAccessToken = res.data.tokens.accessToken;

                tokenService.setAccessToken(newAccessToken);

                processQueue(null, newAccessToken);

                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return apiClient(originalRequest);

            } catch (err) {

                processQueue(err, null);
                tokenService.clearTokens();
                window.location.href = "/login";

                return Promise.reject(err);

            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default apiClient;


// Login
//  ↓
// Redux saves tokens using tokenService
//  ↓
// apiClient automatically attaches token
//  ↓
// User calls any API
//  ↓
// If token expired → interceptor calls refresh
//  ↓
// New token saved
//  ↓
// Original request retries