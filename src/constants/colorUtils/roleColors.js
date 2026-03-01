export const ROLE_COLORS = {
  "super admin": {
    hex: "#F59E0B",
    bg: "bg-amber-100",
    text: "text-amber-800",
  },
  admin: {
    hex: "#3B82F6",
    bg: "bg-blue-100",
    text: "text-blue-800",
  },
  manager: {
    hex: "#10B981",
    bg: "bg-emerald-100",
    text: "text-emerald-800",
  },
  "sales staff": {
    hex: "#8B5CF6",
    bg: "bg-purple-100",
    text: "text-purple-800",
  },
  "staff": {
    hex: "#8B5CF6",
    bg: "bg-purple-100",
    text: "text-purple-800",
  },
  accountant: {
    hex: "#94A3B8",
    bg: "bg-slate-100",
    text: "text-slate-800",
  },
  "inventory manager": {
    hex: "#EF4444",
    bg: "bg-red-100",
    text: "text-red-800",
  },
  auditor: {
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

export const getRoleBgColor = (roleName) => {
  return ROLE_COLORS[roleName]
    ? `${ROLE_COLORS[roleName].text}`
    : `${DEFAULT_COLOR.text}`;
};

export const getRoleChip = (roleName) => {
  roleName = roleName.toLowerCase();
  return ROLE_COLORS[roleName]
    ? `${ROLE_COLORS[roleName].text} ${ROLE_COLORS[roleName].bg}`
    : `${DEFAULT_COLOR.text} ${DEFAULT_COLOR.bg}`;
};

export const getRoleHex = (roleName) => getRoleColor(roleName).hex;
