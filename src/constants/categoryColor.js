export const CATEGORY_COLORS = {
    Necklace: {
        hex: "#F59E0B",
        bg: "bg-amber-100",
        text: "text-amber-800",
    },
    Ring: {
        hex: "#3B82F6",
        bg: "bg-blue-100",
        text: "text-blue-800",
    },
    Earrings: {
        hex: "#EC4899",
        bg: "bg-pink-100",
        text: "text-pink-800",
    },
    Bracelet: {
        hex: "#10B981",
        bg: "bg-emerald-100",
        text: "text-emerald-800",
    },
    Bangle: {
        hex: "#8B5CF6",
        bg: "bg-purple-100",
        text: "text-purple-800",
    },
    Pendant: {
        hex: "#F97316",
        bg: "bg-orange-100",
        text: "text-orange-800",
    },
    Chain: {
        hex: "#06B6D4",
        bg: "bg-cyan-100",
        text: "text-cyan-800",
    },
    Mangalsutra: {
        hex: "#EF4444",
        bg: "bg-red-100",
        text: "text-red-800",
    },
    Anklet: {
        hex: "#14B8A6",
        bg: "bg-teal-100",
        text: "text-teal-800",
    },
    "Nose Pin": {
        hex: "#A855F7",
        bg: "bg-violet-100",
        text: "text-violet-800",
    },
};

const DEFAULT_CATEGORY_COLOR = {
    hex: "#6B7280",
    bg: "bg-gray-100",
    text: "text-gray-800",
};

export const getCategoryColor = (categoryName) =>
    CATEGORY_COLORS[categoryName] || DEFAULT_CATEGORY_COLOR;

export const getCategoryHex = (categoryName) =>
    getCategoryColor(categoryName).hex;