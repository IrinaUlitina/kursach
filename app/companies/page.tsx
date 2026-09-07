import type { Metadata } from "next";
import Link from "next/link";
import { DemoAction } from "@/components/DemoAction";
import { Gated } from "@/components/Gated";
import { GuestNote, PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Компании",
  description: "Открытая витрина компаний Центра услуг в Ульяновске.",
};

export default function CompaniesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Витрина"
        title="Компании"
        lead="Каталог открыт без регистрации. Рейтинг сделок, отзывы после закрытия и статусы доверия — у зарегистрированных."
      />
      <Gated
        guest={<GuestNote />}
        registered={
          <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
            Демо-сессия: ниже витрина как у гостя, плюс учебные статусы доверия и
            кнопка «написать». Это не живые отзывы.
          </p>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((item) => (
          <Card key={item.title} meta={item.meta} title={item.title} text={item.text} />
        ))}
      </div>
      <Gated
        guest={
          <section className="rounded-[20px] bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Закрыто для гостя</h2>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              <li>Статусы доверия и отзывы после сделок</li>
              <li>Написать компании</li>
              <li>Чёрный список</li>
            </ul>
            <Link
              href="/register"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c667e]"
            >
              Открыть после регистрации
            </Link>
          </section>
        }
        registered={
          <section className="grid gap-4 lg:grid-cols-3">
            {trustSamples.map((item) => (
              <article key={item.title} className="rounded-[18px] bg-surface p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-wide text-primary">
                  {item.status}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
                <div className="mt-4">
                  <DemoAction label="Написать (демо)" done="Черновик в кабинете, без отправки." />
                </div>
              </article>
            ))}
          </section>
        }
      />
    </div>
  );
}

const companies = [
  {
    meta: "Кадастр",
    title: "Кадастровые инженеры",
    text: "Межевание, учёт участков, подготовка к сделке. Публичная карточка направления.",
  },
  {
    meta: "Проект",
    title: "Проектные бюро",
    text: "Эскизы и рабочая документация для частного и коммерческого строительства.",
  },
  {
    meta: "Стройка",
    title: "Генподряд и подрядчики",
    text: "Коттеджи, коммерция, отдельные виды работ. Без закрытых статусов на витрине.",
  },
  {
    meta: "Право",
    title: "Юридические практики",
    text: "Сопровождение сделок с недвижимостью и корпоративных договоров.",
  },
  {
    meta: "Оценка",
    title: "Оценка и экспертиза",
    text: "Стоимость объекта и проверка качества — как отдельное направление витрины.",
  },
  {
    meta: "Компаниям",
    title: "Подключить компанию",
    text: "Заявка на попадание в каталог. Модерация и статусы — после запуска кабинета.",
  },
];

const trustSamples = [
  {
    status: "Доверие · демо",
    title: "Кадастровые инженеры",
    text: "Есть отзывы после сделок — учебная метка, не рейтинг из базы.",
  },
  {
    status: "На проверке",
    title: "Проектные бюро",
    text: "Статус виден только зарегистрированным. Гость эту карточку не видит.",
  },
  {
    status: "ЧС скрыт",
    title: "Пример из чёрного списка",
    text: "Демо-запись «Пример-скрыт». Открытый каталог выше от этого не меняется.",
  },
];
