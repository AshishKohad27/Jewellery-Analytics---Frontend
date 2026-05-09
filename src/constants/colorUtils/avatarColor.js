function getInitials(name = "") {
    return name
        .split(" ")
        .slice(0, 2)
        .map((word) => word[0])
        .join("")
        .toUpperCase();
}

function getColorByName(name = "") {
    const colors = [
        {
            bg: "bg-red-100",
            text: "text-red-700",
        },
        {
            bg: "bg-blue-100",
            text: "text-blue-700",
        },
        {
            bg: "bg-emerald-100",
            text: "text-emerald-700",
        },
        {
            bg: "bg-purple-100",
            text: "text-purple-700",
        },
        {
            bg: "bg-gold-100",
            text: "text-gold-700",
        },
    ];

    // generate stable index from name
    const index =
        name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0) %
        colors.length;

    return colors[index];
}

export function Avatar({ name }) {
    const initials = getInitials(name);
    const color = getColorByName(name);

    return (
        <div
            className={`w-8 h-8 ${color.bg} rounded-full flex items-center justify-center`}
        >
            <span className={`${color.text} font-semibold text-xs`}>
                {initials}
            </span>
        </div>
    );
}