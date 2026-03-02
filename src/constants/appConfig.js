export const currency = {
    symbol: "₹",
    code: "INR",
    locale: "en-IN",
};

export const dateFormat = {
    short: "DD MMM YYYY",
    long: "DD MMMM YYYY",
    time: "hh:mm A",
};

export const pagination = {
    defaultPageSize: 10,
    pageSizeOptions: [10, 20, 50, 100],
};

export const apiConfig = {
    timeout: 30000,
};

export const appInfo = {
    name: "My App",
    version: "1.0.0",
};

export const uiConfig = {
    animationDuration: 300,
};

export const validation = {
    passwordMinLength: 8,
};

export const statusLabels = {
    active: "Active",
    inactive: "Inactive",
    pending: "Pending",
};

export const formatCurrencyCompact = (amount) => {
    if (amount === null || amount === undefined) return "₹0";

    const absAmount = Math.abs(amount);

    if (absAmount >= 10000000) {
        return `₹${(amount / 10000000).toFixed(1).replace(/\.0$/, "")}Cr`;
    }

    if (absAmount >= 100000) {
        return `₹${(amount / 100000).toFixed(1).replace(/\.0$/, "")}L`;
    }

    if (absAmount >= 1000) {
        return `₹${(amount / 1000).toFixed(1).replace(/\.0$/, "")}K`;
    }

    return `₹${amount}`;
};

export const formatNumberWithComma = (amount) => {
    if (amount === null || amount === undefined) return "0";

    return new Intl.NumberFormat("en-IN").format(amount);
};

export const formatCurrencyWithComma = (amount) => {
    if (amount === null || amount === undefined || isNaN(amount)) {
        return "₹0";
    }

    return new Intl.NumberFormat("en-IN", {
        maximumFractionDigits: 2,
    }).format(amount)
        ? `₹${new Intl.NumberFormat("en-IN", {
            maximumFractionDigits: 2,
        }).format(amount)}`
        : "₹0";
};

export const formatDateTime = (isoString) => {
    if (!isoString) return "-";

    const date = new Date(isoString);

    if (isNaN(date)) return "-";

    return date.toLocaleString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};

export const formatDate = (isoString) => {
    if (!isoString) return "-";

    const date = new Date(isoString);
    if (isNaN(date)) return "-";

    return date.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
    });
};

export const formatTime = (isoString) => {
    if (!isoString) return "-";

    const date = new Date(isoString);
    if (isNaN(date)) return "-";

    return date.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    });
};