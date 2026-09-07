"use client";

import Link from "next/link";
import { DemoAction } from "@/components/DemoAction";
import { useDemoUser } from "@/components/useDemoUser";

export function TrustMeta({ rating, reviews }: { rating: number; reviews: number }) {
  const { isLoggedIn } = useDemoUser();
  if (!isLoggedIn) {
    return <p className="text-xs text-muted">Рейтинг и статусы — после регистрации</p>;
  }
  return (
    <p className="text-xs font-semibold text-primary">
      {rating.toFixed(1)} · {reviews} отзывов · демо
    </p>
  );
}

export function WriteCta() {
  const { isLoggedIn } = useDemoUser();
  if (!isLoggedIn) {
    return (
      <Link
        href="/register"
        className="inline-flex rounded-full bg-bg px-4 py-2 text-sm font-semibold text-ink hover:bg-line"
      >
        Написать — после регистрации
      </Link>
    );
  }
  return <DemoAction label="Написать (демо)" done="Черновик в кабинете, без отправки." />;
}
