"use client";

import Link from "next/link";
import { useDemoUser } from "@/components/useDemoUser";
import { roleLabels } from "@/lib/demo-session";

export function SessionHomeNote() {
  const { user, isLoggedIn } = useDemoUser();

  if (!isLoggedIn || !user) return null;

  return (
    <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
      Вы в демо-сессии как {roleLabels[user.role].toLowerCase()} ({user.name}).
      Открыты статусы доверия, ЧС, заявки и справки.{" "}
      <Link href="/after-register" className="font-semibold text-primary hover:underline">
        Что изменилось
      </Link>
      {" · "}
      <Link href="/cabinet" className="font-semibold text-primary hover:underline">
        Кабинет
      </Link>
    </p>
  );
}
