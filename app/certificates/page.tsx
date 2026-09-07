import type { Metadata } from "next";
import Link from "next/link";
import { DemoAction } from "@/components/DemoAction";
import { Gated } from "@/components/Gated";
import { GuestNote, PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Справки",
  description: "Справки и выписки Центра услуг — заказ в кабинете после входа.",
};

export default function CertificatesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Кабинет"
        title="Справки"
        lead="ЕГРН, арбитраж, ЕГРЮЛ. Гость видит описание сервиса. Заказ и журнал — после регистрации."
        actions={
          <Link
            href="/request"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
          >
            Оставить заявку
          </Link>
        }
      />
      <Gated
        guest={
          <>
            <GuestNote />
            <div className="grid gap-4 sm:grid-cols-3">
              {docs.map((item) => (
                <Card key={item.title} title={item.title} text={item.text} />
              ))}
            </div>
            <section className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-lg font-semibold text-ink">Заказ закрыт</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Выписки не показываем и не оформляем без аккаунта — чужих данных
                на витрине нет.
              </p>
              <Link
                href="/register"
                className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c667e]"
              >
                Зарегистрироваться
              </Link>
            </section>
          </>
        }
        registered={
          <>
            <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
              Кабинет справок открыт в демо. Заказы учебные, без обращения в ведомства.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {docs.map((item) => (
                <article key={item.title} className="rounded-[18px] bg-surface p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{item.unlocked}</p>
                  <div className="mt-4">
                    <DemoAction
                      label={`Заказать ${item.title}`}
                      done="Заявка на выписку сохранена локально."
                    />
                  </div>
                </article>
              ))}
            </div>
            <p className="text-sm text-muted">
              Журнал:{" "}
              <Link href="/cabinet#certificates" className="font-semibold text-primary hover:underline">
                кабинет · справки
              </Link>
            </p>
          </>
        }
      />
    </div>
  );
}

const docs = [
  {
    title: "ЕГРН",
    text: "Выписки по объектам недвижимости — в кабинете, не в открытой витрине.",
    unlocked: "Можно оформить учебный заказ. Живой ЕГРН не подключён.",
  },
  {
    title: "ЕГРЮЛ",
    text: "Сведения о компаниях для сделки. Запрос после входа.",
    unlocked: "Демо-заказ по контрагенту, без выгрузки реестра.",
  },
  {
    title: "Арбитраж",
    text: "Проверка судебных дел по контрагенту — тоже только в кабинете.",
    unlocked: "Карточка «проверка дел» как заглушка кабинета.",
  },
];
