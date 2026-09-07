import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Как пользоваться",
  description: "Маршрут гостя и зарегистрированного в Центре услуг.",
};

export default function HowItWorksPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Маршрут"
        title="Как пользоваться"
        lead="Витрина открыта сразу. Кабинет, ЧС, статусы, переписка и справки — после регистрации. Лиды и доска — у бизнеса и специалиста с тарифом."
      />
      <ol className="divide-y divide-line rounded-[20px] bg-surface px-5 sm:px-8">
        {steps.map((item, index) => (
          <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
            <span className="text-3xl font-extrabold tabular-nums text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/register"
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
        >
          Регистрация
        </Link>
        <Link href="/after-register" className="rounded-full bg-surface px-5 py-3 text-sm font-semibold text-ink">
          Что откроется
        </Link>
      </div>
    </div>
  );
}

const steps = [
  {
    title: "Смотрите витрину без аккаунта",
    text: "Компании, услуги, лента и кейсы. Рейтинги и ЧС гостю не показываем.",
  },
  {
    title: "Выберите путь",
    text: "Исполнитель из каталога или заявка «под ключ» центру — участок, коттедж, проверка контрагента.",
  },
  {
    title: "Зарегистрируйтесь, когда нужен кабинет",
    text: "Физлицо: статусы, ЧС, переписка, свои заявки, справки. Бизнес и специалист — ещё ИНН и тариф.",
  },
  {
    title: "Компания на тарифе отвечает на поток",
    text: "Входящие лиды и доска подрядов. Админ-панель в этой оболочке не собираем.",
  },
];
