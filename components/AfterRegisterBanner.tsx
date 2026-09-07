"use client";

import Link from "next/link";
import { useDemoUser } from "@/components/useDemoUser";
import { hasTariffCabinets, roleLabels } from "@/lib/demo-session";

export function AfterRegisterBanner() {
  const { user, isLoggedIn } = useDemoUser();

  if (!isLoggedIn || !user) {
    return (
      <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
        Сейчас вы как гость.{" "}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Зарегистрируйтесь
        </Link>{" "}
        или{" "}
        <Link href="/login" className="font-semibold text-primary hover:underline">
          войдите
        </Link>
        , чтобы шапка и витрина переключились на кабинетный контур.
      </p>
    );
  }

  return (
    <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
      Демо-сессия: <strong>{user.name}</strong> · {roleLabels[user.role]}
      {user.inn ? ` · ИНН ${user.inn}` : ""}.
      {hasTariffCabinets(user.role)
        ? " Для бизнеса и специалиста в кабинете показаны заглушки лидов и доски заказов (как при активном тарифе)."
        : " Лиды и доска заказов остаются за тарифом бизнеса/специалиста."}{" "}
      <Link href="/cabinet" className="font-semibold text-primary hover:underline">
        Открыть кабинет
      </Link>
    </p>
  );
}
