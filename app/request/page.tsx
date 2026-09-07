import type { Metadata } from "next";
import Link from "next/link";
import { RequestForm } from "@/components/RequestForm";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Оставить заявку",
  description: "Заявка «под ключ» в Центр услуг: участок, коттедж, проверка, стройка.",
};

export default function RequestPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Маршрутизация"
        title="Оставить заявку"
        lead="Гость может описать задачу — это заявка центру, не доступ к ЧС и справкам. Кабинет своих заявок, переписка и выписки открываются после регистрации."
      />
      <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-ink">Как это стыкуется с доступом</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            <li>Форма видна всем. Данные в демо остаются в браузере.</li>
            <li>Список «мои заявки» — только в кабинете после входа.</li>
            <li>Выбрать исполнителя на витрине можно и без аккаунта.</li>
            <li>
              Компании отвечают из кабинета на тарифе.{" "}
              <Link href="/register" className="font-semibold text-primary hover:underline">
                Регистрация
              </Link>
            </li>
          </ul>
        </article>
        <div className="rounded-[20px] bg-surface p-5 sm:p-8">
          <RequestForm />
        </div>
      </div>
    </div>
  );
}
