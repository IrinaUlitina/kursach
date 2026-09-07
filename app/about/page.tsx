import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "О центре",
  description: "Центр услуг — независимая B2B-площадка в Ульяновске.",
};

export default function AboutPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Платформа"
        title="О центре"
        lead="Временное имя продукта — «Центр услуг». Генподряд и мультисервис для недвижимости, стройки и сделок с бизнесом. Первый город — Ульяновск."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Как устроен доступ</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Гость видит компании, услуги, ленту и кейсы. После регистрации
            открываются чёрный список, статусы доверия, сообщения и кабинет
            справок. Закрытые данные на маркетинговых страницах не показываем.
          </p>
        </article>
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Чем это не является</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Это не банк и не продукт Сбера. Оболочка визуально опирается на
            привычные паттерны деловых кабинетов (плашка, тёмная подложка,
            карточки), но со своей палитрой, шрифтом Manrope и своим текстом.
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
