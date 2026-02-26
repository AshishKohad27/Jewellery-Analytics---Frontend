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