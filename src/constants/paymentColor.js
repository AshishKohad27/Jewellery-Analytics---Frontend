export const PAYMENT_MODE_COLORS = {
    CASH: {
        hex: "#10B981",
        bg: "bg-emerald-100",
        text: "text-emerald-800",
    },
    UPI: {
        hex: "#6366F1",
        bg: "bg-indigo-100",
        text: "text-indigo-800",
    },
    CARD: {
        hex: "#3B82F6",
        bg: "bg-blue-100",
        text: "text-blue-800",
    },
    BANK_TRANSFER: {
        hex: "#06B6D4",
        bg: "bg-cyan-100",
        text: "text-cyan-800",
    },
    CHEQUE: {
        hex: "#F59E0B",
        bg: "bg-amber-100",
        text: "text-amber-800",
    },
    WALLET: {
        hex: "#8B5CF6",
        bg: "bg-purple-100",
        text: "text-purple-800",
    },
};

const DEFAULT_PAYMENT_MODE_COLOR = {
    hex: "#6B7280",
    bg: "bg-gray-100",
    text: "text-gray-800",
};

export const getPaymentModeColor = (mode) =>
    PAYMENT_MODE_COLORS[mode] || DEFAULT_PAYMENT_MODE_COLOR;

export const getPaymentModeHex = (mode) =>
    getPaymentModeColor(mode).hex;