import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Страница не найдена",
};

export default function NotFound() {
  return (
    <div className="mt-5 rounded-[32px] bg-surface px-6 py-16 text-center">
      <p className="text-sm font-medium text-primary">404</p>
      <h1 className="mt-2 text-3xl font-extrabold text-ink">Нет такой страницы</h1>
      <p className="mt-3 text-muted">Вернитесь на витрину или оставьте заявку.</p>
      <div className="mt-6 flex justify-center gap-3">
        <Link
          href="/"
          className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
        >
          На главную
        </Link>
        <Link
          href="/request"
          className="rounded-full bg-bg px-5 py-2.5 text-sm font-semibold text-ink"
        >
          Заявка
        </Link>
      </div>
    </div>
  );
}
