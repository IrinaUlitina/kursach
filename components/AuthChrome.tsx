"use client";

import Link from "next/link";
import { useDemoUser } from "@/components/useDemoUser";
import { clearDemoUser, roleLabels, shortName } from "@/lib/demo-session";

export function AuthChrome({ variant }: { variant: "desktop" | "mobile" }) {
  const { user, isLoggedIn } = useDemoUser();

  if (!isLoggedIn || !user) {
    if (variant === "mobile") {
      return (
        <div className="mt-1 border-t border-line pt-1">
          <Link
            href="/login"
            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
          >
            Войти
          </Link>
          <Link
            href="/register"
            className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
          >
            Регистрация
          </Link>
        </div>
      );
    }

    return (
      <>
        <Link
          href="/login"
          className="hidden rounded-full px-3 py-2 text-sm font-medium text-ink hover:bg-bg sm:inline-flex"
        >
          Войти
        </Link>
        <Link
          href="/register"
          className="hidden rounded-full px-3 py-2 text-sm font-medium text-muted hover:bg-bg hover:text-ink lg:inline-flex"
        >
          Регистрация
        </Link>
      </>
    );
  }

  if (variant === "mobile") {
    return (
      <div className="mt-1 border-t border-line pt-1">
        <p className="px-3 py-2 text-xs text-muted">
          {shortName(user)} · {roleLabels[user.role]}
        </p>
        <Link
          href="/cabinet"
          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
        >
          Кабинет
        </Link>
        <Link
          href="/cabinet#blacklist"
          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
        >
          Чёрный список
        </Link>
        <Link
          href="/certificates"
          className="block rounded-xl px-3 py-2.5 text-sm font-medium text-ink hover:bg-bg"
        >
          Справки · кабинет
        </Link>
        <button
          type="button"
          className="w-full rounded-xl px-3 py-2.5 text-left text-sm font-medium text-muted hover:bg-bg"
          onClick={() => clearDemoUser()}
        >
          Выйти
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-1 sm:gap-1.5">
      <span
        title="Демо-метка статуса доверия. Боевые статусы — после сделок."
        className="hidden rounded-full bg-primary-soft px-2.5 py-1 text-[11px] font-semibold text-primary xl:inline-flex"
      >
        Доверие
      </span>
      <Link
        href="/cabinet#blacklist"
        className="hidden rounded-full px-2.5 py-2 text-[13px] font-medium text-ink hover:bg-bg xl:inline-flex"
      >
        ЧС
      </Link>
      <Link
        href="/cabinet"
        className="rounded-full bg-primary-soft px-3 py-2 text-[13px] font-semibold text-primary hover:bg-[#d7eef3] sm:text-sm"
      >
        {shortName(user)}
      </Link>
      <button
        type="button"
        className="rounded-full px-3 py-2 text-[13px] font-medium text-ink hover:bg-bg sm:text-sm"
        onClick={() => clearDemoUser()}
      >
        Выйти
      </button>
    </div>
  );
}
