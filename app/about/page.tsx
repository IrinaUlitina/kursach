import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "О центре",
  description: "Центр услуг в Ульяновске: генподряд и мультисервис, не продукт Сбера.",
};

export default function AboutPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Платформа"
        title="О центре"
        lead="Временное имя — «Центр услуг». Генподряд и мультисервис для недвижимости, стройки и сделок с бизнесом. Первый город — Ульяновск."
      />
      <article className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Зачем Ульяновск</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Запуск в одном городе: понятная цепочка «участок — дом — офис», живые
          подрядчики и короткие расстояния. Не федеральный банк и не чужая
          экосистема — местный контур сделок.
        </p>
      </article>
      <article className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Как работает генподряд центра</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          Заказчик либо выбирает компанию на витрине, либо оставляет заявку «под
          ключ». Центр маршрутизирует юриста, кадастр, проект и стройку. Гость
          видит каталог. После регистрации открываются статусы, ЧС, переписка,
          свои заявки и заказ справок. Компания на тарифе (ориентир 5–15 тыс. ₽)
          получает лиды и доску заказов. Комиссия со сделок — модель платформы,
          не тариф банка.
        </p>
      </article>
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Доступ</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Гость: компании, услуги, лента, кейсы. Зарегистрированный: доверие,
            ЧС, сообщения, заявки, справки. Админ-контур в демо не собираем.{" "}
            <Link href="/after-register" className="font-semibold text-primary hover:underline">
              Сравнение
            </Link>
            {" · "}
            <Link href="/how-it-works" className="font-semibold text-primary hover:underline">
              Как пользоваться
            </Link>
            .
          </p>
        </article>
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Чем это не является</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Это не банк и не продукт Сбера, нет связи со СберБанком и экосистемой
            Сбера. Совпадают только привычные паттерны деловой оболочки. Свои
            цвет, Manrope и тексты. Учебные карточки компаний — не живой ЕГРЮЛ.
          </p>
        </article>
      </div>
      <Link
        href="/request"
        className="inline-flex self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
      >
        Оставить заявку
      </Link>
    </div>
  );
}
