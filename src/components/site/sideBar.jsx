"use client";

import { navLink } from "@/constants/headerNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-white border-r border-slate-200 overflow-y-auto hidden lg:block">
      <nav className="p-4 space-y-1">
        {navLink?.mainLinks.map((item, index) => {
          const isActive = item?.link === pathname;
          return (
            <Link
              key={index}
              href={item?.link}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg 
                ${isActive ? "bg-gold-50 text-gold-700 font-medium" : "text-slate-600 hover:bg-slate-50"}
                `}
            >
              {item?.icon}
              {item?.label}
            </Link>
          );
        })}

        {/* <!-- Analytics Dropdown --> */}
        <div className="pt-4">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Analytics
          </p>
          {navLink?.analyticsLinks.map((item, index) => {
            const isActive = item?.link === pathname;
            return (
              <Link
                key={index}
                href={item?.link}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm
                ${isActive ? "bg-gold-50 text-gold-700 font-medium" : "text-slate-600 hover:bg-slate-50"}
                `}
              >
                {item?.icon}
                {item?.label}
              </Link>
            );
          })}
        </div>

        {/* <!-- Admin Section --> */}
        <div className="pt-4">
          <p className="px-4 text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Admin
          </p>
          {navLink?.adminLinks.map((item, index) => {
            const isActive = item?.link === pathname;
            return (
              <Link
                key={index}
                href={item?.link}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm
                ${isActive ? "bg-gold-50 text-gold-700 font-medium" : "text-slate-600 hover:bg-slate-50"}
                `}
              >
                {item?.icon}
                {item?.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </aside>
  );
}
