export const TRANSACTION_TYPE_COLORS = {
    PURCHASE: {
        hex: "#10B981",
        bg: "bg-emerald-100",
        text: "text-emerald-800",
        icon:
            (
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 11l5-5m0 0l5 5m-5-5v12"></path>
                </svg>
            )
    },
    SALE: {
        hex: "#EF4444",
        bg: "bg-red-100",
        text: "text-red-800",
        icon: (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13l-5 5m0 0l-5-5m5 5V6"></path>
            </svg>
        )
    },
    ADJUSTMENT: {
        hex: "#F59E0B",
        bg: "bg-amber-100",
        text: "text-amber-800",
        icon: (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path>
            </svg>
        )
    },
    RETURN: {
        hex: "#8B5CF6",
        bg: "bg-purple-100",
        text: "text-purple-800",
        icon: (
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"></path>
            </svg>
        )
    },
};

const DEFAULT_COLOR = {
    hex: "#6B7280",
    bg: "bg-gray-100",
    text: "text-gray-800",
    icon: null
};

export const getTransactionTypeBgColor = (transactionType) => {
    return TRANSACTION_TYPE_COLORS[transactionType]
        ? `${TRANSACTION_TYPE_COLORS[transactionType].bg}`
        : `${DEFAULT_COLOR.bg}`;
};

export const getTransactionTypeTextColor = (transactionType) => {
    return TRANSACTION_TYPE_COLORS[transactionType]
        ? `${TRANSACTION_TYPE_COLORS[transactionType].text}`
        : `${DEFAULT_COLOR.text}`;
};

export const getTransactionTypeChip = (transactionType) => {
    return TRANSACTION_TYPE_COLORS[transactionType]
        ? `${TRANSACTION_TYPE_COLORS[transactionType].text} ${TRANSACTION_TYPE_COLORS[transactionType].bg}`
        : `${DEFAULT_COLOR.text} ${DEFAULT_COLOR.bg}`;
};

export const getTransactionTypeIcon = (transactionType) => {
    return TRANSACTION_TYPE_COLORS[transactionType] ? TRANSACTION_TYPE_COLORS[transactionType].icon
        : DEFAULT_COLOR[transactionType].icon
}

export const getTransactionTypeHex = (transactionType) => getTransactionTypeColor(transactionType).hex;
