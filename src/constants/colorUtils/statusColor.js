export const STATUS_COLORS = {
    Active: {
        hex: "#10B981",
        bg: "bg-emerald-100",
        text: "text-emerald-800",
    },
    Inactive: {
        hex: "#EF4444",
        bg: "bg-red-100",
        text: "text-red-800",
    },
    Pending: {
        hex: "#F59E0B",
        bg: "bg-amber-100",
        text: "text-amber-800",
    },
    Complete: {
        hex: "#10B981",
        bg: "bg-emerald-100",
        text: "text-emerald-800",
    },
    Completed: {
        hex: "#10B981",
        bg: "bg-emerald-100",
        text: "text-emerald-800",
    },
    Failed: {
        hex: "#EF4444",
        bg: "bg-red-100",
        text: "text-red-800",
    },
    Cancelled: {
        hex: "#6B7280",
        bg: "bg-gray-100",
        text: "text-gray-800",
    },
    Processing: {
        hex: "#3B82F6",
        bg: "bg-blue-100",
        text: "text-blue-800",
    },
};

const DEFAULT_STATUS_COLOR = {
    hex: "#6B7280",
    bg: "bg-gray-100",
    text: "text-gray-800",
};

export const getStatusColor = (status) =>
    STATUS_COLORS[status] || DEFAULT_STATUS_COLOR;

export const getStatusChipColor = (status) => {
    return STATUS_COLORS[status]
        ? `${STATUS_COLORS[status].text}`
        : `${DEFAULT_STATUS_COLOR[status].text}`;
}

export const getStatusChip = (status) => {
    console.log('status: ', STATUS_COLORS[status].bg);
    return STATUS_COLORS[status]
        ? `${STATUS_COLORS[status].bg} ${STATUS_COLORS[status].text}`
        : `${DEFAULT_STATUS_COLOR[status].bg} ${DEFAULT_STATUS_COLOR[status].text}`;
}

export const getStatusHex = (status) =>
    getStatusColor(status).hex;