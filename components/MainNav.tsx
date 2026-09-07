"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/nav";

export function MainNav({ variant }: { variant: "desktop" | "mobile" }) {
  const pathname = usePathname();

  return (
    <ul
      className={
        variant === "desktop"
          ? "hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-2"
          : "flex flex-col"
      }
    >
      {navLinks.map((item) => {
        const active = pathname === item.href || pathname.startsWith(`${item.href}/`);
        if (variant === "desktop") {
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`rounded-full px-2.5 py-1.5 text-[13px] font-medium xl:px-3 xl:text-sm ${
                  active ? "bg-bg text-ink" : "text-muted hover:bg-bg hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        }
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={`block rounded-xl px-3 py-2.5 text-sm font-medium hover:bg-bg ${
                active ? "bg-bg text-ink" : "text-ink"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
