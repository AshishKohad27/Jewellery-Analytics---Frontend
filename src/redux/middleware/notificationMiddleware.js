import { setSuccessMessage, setErrorMessage } from "../notification/notification.slice";

// Action prefixes that should silently succeed (no success toast)
const SILENT_PREFIXES = ["get/", "login", "get/refresh/token"];

const isSilentAction = (actionType) => {
    return SILENT_PREFIXES.some((prefix) => actionType.startsWith(prefix));
};

const notificationMiddleware = (store) => (next) => (action) => {
    const result = next(action);

    if (action.type.endsWith("/fulfilled")) {
        if (!isSilentAction(action.type)) {
            const message = action.payload?.message;
            if (message) {
                store.dispatch(setSuccessMessage(message));
            }
        }
    }

    if (action.type.endsWith("/rejected")) {
        const message = action.payload || action.error?.message || "Something went wrong";
        store.dispatch(setErrorMessage(message));
    }

    return result;
};

export default notificationMiddleware;