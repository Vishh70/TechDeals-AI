"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Tag, Tags, Cpu } from "lucide-react";

export function BottomNav() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/deals", label: "Deals", icon: Tag },
    { href: "/coupons", label: "Coupons", icon: Tags },
    { href: "/compare", label: "Compare", icon: Cpu },
  ];

  return (
    <nav
      className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/80 backdrop-blur-2xl border-t border-white/50 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_30px_rgba(0,0,0,0.04)]"
      style={{ touchAction: "none" }}
    >
      <div className="flex items-center justify-around h-[72px] px-2 max-w-md mx-auto">
        {links.map((link) => {
          const isActive =
            pathname === link.href ||
            (link.href !== "/" && pathname?.startsWith(link.href));
          const Icon = link.icon;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center w-full h-full space-y-1 transition-all duration-300 ${
                isActive
                  ? "text-blue-600 scale-110"
                  : "text-gray-400 hover:text-gray-900"
              }`}
            >
              <div
                className={`relative p-2 rounded-2xl ${isActive ? "bg-blue-50" : ""}`}
              >
                <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span
                className={`text-[10px] ${isActive ? "font-bold text-blue-600" : "font-medium text-gray-500"}`}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
