export const METAL_COLORS = {
    Gold: {
        hex: "#D4AF37",
        bg: "bg-yellow-100",
        text: "text-yellow-800",
    },
    Silver: {
        hex: "#9CA3AF",
        bg: "bg-gray-100",
        text: "text-gray-800",
    },
    Diamond: {
        hex: "#60A5FA",
        bg: "bg-blue-100",
        text: "text-blue-800",
    },
    Platinum: {
        hex: "#94A3B8",
        bg: "bg-blue-100",
        text: "text-blue-800",
    },
    "Rose Gold": {
        hex: "#F43F5E",
        bg: "bg-rose-100",
        text: "text-rose-800",
    },
    "White Gold": {
        hex: "#E5E7EB",
        bg: "bg-gray-50",
        text: "text-gray-700",
    },
    "Sterling Silver": {
        hex: "#CBD5F5",
        bg: "bg-indigo-100",
        text: "text-indigo-800",
    },
    Gemstone: {
        hex: "#8B5CF6",
        bg: "bg-purple-100",
        text: "text-purple-800",
    },
};

const DEFAULT_METAL_COLOR = {
    hex: "#6B7280",
    bg: "bg-gray-100",
    text: "text-gray-800",
};

export const getMetalBgColor = (metalName) => {
    return METAL_COLORS[metalName]
        ? `${METAL_COLORS[metalName].bg}`
        : `${DEFAULT_METAL_COLOR.bg}`;
};

export const getMetalTextColor = (metalName) => {
    return METAL_COLORS[metalName]
        ? `${METAL_COLORS[metalName].text}`
        : `${DEFAULT_METAL_COLOR.text}`;
};

export const getMetalChip = (metalName) => {
    return METAL_COLORS[metalName]
        ? `${METAL_COLORS[metalName].text} ${METAL_COLORS[metalName].bg}`
        : `${DEFAULT_METAL_COLOR.text} ${DEFAULT_METAL_COLOR.bg}`;
};

export const getMetalHex = (metalName) =>
    getMetalColor(metalName).hex;