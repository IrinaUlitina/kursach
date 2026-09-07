import Link from "next/link";
import { AuthChrome } from "@/components/AuthChrome";
import { BrandMark } from "@/components/BrandMark";
import { cityLabel, navLinks, utilityLinks } from "@/lib/nav";

function PinIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true" className="opacity-70">
      <path
        fill="currentColor"
        d="M8 1.4A4.6 4.6 0 0 0 3.4 6c0 3.4 4.6 8.6 4.6 8.6S12.6 9.4 12.6 6A4.6 4.6 0 0 0 8 1.4Zm0 6.3A1.7 1.7 0 1 1 8 4.3a1.7 1.7 0 0 1 0 3.4Z"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        fill="currentColor"
        d="M3 4.5h12v1.5H3V4.5Zm0 3.75h12v1.5H3V8.25Zm0 3.75h12V13.5H3V12Z"
      />
    </svg>
  );
}

export function Header() {
  return (
    <header>
      <div className="flex items-center justify-end gap-4 px-2 py-2.5 text-[13px] text-muted sm:px-3">
        <span className="mr-auto inline-flex items-center gap-1.5 sm:mr-0">
          <PinIcon />
          {cityLabel}
        </span>
        {utilityLinks.map((item) => (
          <Link key={item.href} href={item.href} className="hover:text-ink">
            {item.label}
          </Link>
        ))}
      </div>

      <div className="sticky top-3 z-50">
        <nav
          className="relative flex items-center gap-2 rounded-full bg-surface px-2 py-2 shadow-[var(--shadow-nav)] sm:gap-3 sm:px-2.5"
          aria-label="Основная навигация"
        >
          <BrandMark />

          <ul className="hidden min-w-0 flex-1 items-center justify-center gap-1 lg:flex xl:gap-2">
            {navLinks.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="rounded-full px-2.5 py-1.5 text-[13px] font-medium text-muted hover:bg-bg hover:text-ink xl:px-3 xl:text-sm"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="ml-auto flex items-center gap-1 sm:gap-2">
            <AuthChrome variant="desktop" />
            <Link
              href="/request"
              className="inline-flex items-center rounded-full bg-primary px-3.5 py-2 text-[13px] font-semibold text-white hover:bg-[#0c667e] sm:px-4 sm:text-sm"
            >
              Оставить заявку
            </Link>

            <details className="nav-menu relative lg:hidden">
              <summary
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-ink hover:bg-bg"
                aria-label="Открыть меню"
              >
                <MenuIcon />
              </summary>
              <div className="absolute right-0 top-[calc(100%+10px)] z-50 w-[min(18rem,calc(100vw-2rem))] rounded-[20px] border border-line bg-surface p-3 shadow-[var(--shadow-nav)]">
                <ul className="flex flex-col">
                  {navLinks.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <AuthChrome variant="mobile" />
              </div>
            </details>
          </div>
        </nav>
      </div>
    </header>
  );
}
