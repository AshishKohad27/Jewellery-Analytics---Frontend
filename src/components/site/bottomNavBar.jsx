"use client";

import { navLink } from "@/constants/headerNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNavBar() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 px-4 py-2">
      <div className="flex items-center justify-around">
        {navLink?.mainLinks.map((item, index) => {
          const isActive = item?.link === pathname;
          return (
            <Link
              key={index}
              href={item?.link}
              className={`flex flex-col items-center gap-1 rounded-lg 
                ${isActive ? "bg-gold-50 text-gold-700 font-medium" : "text-slate-400 hover:bg-slate-50"}
                `}
            >
              {item?.icon}
              <span className="text-xs">{item?.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
