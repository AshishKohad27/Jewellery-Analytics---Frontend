export const ROLE_COLORS = {
  "Super Admin": {
    hex: "#F59E0B",
    bg: "bg-amber-100",
    text: "text-amber-800",
  },
  Admin: {
    hex: "#3B82F6",
    bg: "bg-blue-100",
    text: "text-blue-800",
  },
  Manager: {
    hex: "#10B981",
    bg: "bg-emerald-100",
    text: "text-emerald-800",
  },
  "Sales Staff": {
    hex: "#8B5CF6",
    bg: "bg-purple-100",
    text: "text-purple-800",
  },
  Accountant: {
    hex: "#94A3B8",
    bg: "bg-slate-100",
    text: "text-slate-800",
  },
  "Inventory Manager": {
    hex: "#EF4444",
    bg: "bg-red-100",
    text: "text-red-800",
  },
  Auditor: {
    hex: "#EC4899",
    bg: "bg-pink-100",
    text: "text-pink-800",
  },
};

const DEFAULT_COLOR = {
  hex: "#6B7280",
  bg: "bg-gray-100",
  text: "text-gray-800",
};

export const getRoleColor = (roleName) => ROLE_COLORS[roleName] || DEFAULT_COLOR;

export const getRoleHex = (roleName) => getRoleColor(roleName).hex;
