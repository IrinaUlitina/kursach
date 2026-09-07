import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Специалистам",
  description: "Тариф 5–15 тыс. ₽, регистрация по ИНН, лиды и доска заказов в Центре услуг.",
};

export default function ForSpecialistsPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Подрядчикам и экспертам"
        title="Стать участником"
        lead="Витрина в Ульяновске, цепочка юрист / кадастр / проект / стройка. Лиды и доска — после регистрации и тарифа. Не оферта."
        actions={
          <Link
            href="/register"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
          >
            Регистрация как компания
          </Link>
        }
      />

      <section className="grid gap-4 md:grid-cols-3">
        {included.map((item) => (
          <article key={item.title} className="rounded-[18px] bg-surface p-6">
            <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="rounded-[28px] bg-surface p-6 sm:p-10">
        <h2 className="text-2xl font-bold tracking-tight text-ink">Тариф входа</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
          Ориентир 5–15 тыс. ₽ за вход на витрину и кабинет лидов. Точная цифра
          — после модерации, не банковский тариф. Комиссия со сделок упоминается
          мягко: платформа зарабатывает на замкнутом контуре, без обещания % в
          этом демо.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <article className="rounded-[18px] bg-bg p-5">
            <p className="text-sm font-medium text-primary">Старт</p>
            <p className="mt-1 text-3xl font-extrabold text-ink">5 тыс. ₽</p>
            <p className="mt-2 text-sm text-muted">Ориентир для узкого специалиста: карточка, отклики.</p>
          </article>
          <article className="rounded-[18px] bg-bg p-5">
            <p className="text-sm font-medium text-primary">Контур</p>
            <p className="mt-1 text-3xl font-extrabold text-ink">15 тыс. ₽</p>
            <p className="mt-2 text-sm text-muted">Ориентир для генподряда и нескольких направлений.</p>
          </article>
        </div>
      </section>

      <section className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Регистрация по ИНН</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted">
          {innSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <Link
        href="/register"
        className="inline-flex self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
      >
        Зарегистрироваться как бизнес / специалист
      </Link>
    </div>
  );
}

const included = [
  {
    title: "Профиль-витрина",
    text: "Гости видят имя, город, направление. Рейтинг после сделок — у зарегистрированных.",
  },
  {
    title: "Лиды и доска",
    text: "После тарифа: входящие заявки и доска подрядов. В демо — виджеты кабинета.",
  },
  {
    title: "Цепочка сделок",
    text: "Юрист, кадастр, проект, стройка рядом — не десять разрозненных чатов.",
  },
];

const innSteps = [
  "Выберите тип «Бизнес» или «Специалист (компания)» в форме регистрации.",
  "Укажите название и ИНН — в продукте по нему идёт модерация, в демо поле необязательно.",
  "Карточка проходит модерацию до публикации. ЧС и переписка не светятся гостю.",
  "После подтверждения тарифа открываются лиды и доска заказов.",
];
