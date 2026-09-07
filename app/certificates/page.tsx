import type { Metadata } from "next";
import Link from "next/link";
import { DemoAction } from "@/components/DemoAction";
import { Gated } from "@/components/Gated";
import { GuestNote, PageHero } from "@/components/PageBits";
import { certificates } from "@/lib/content/certificates";

export const metadata: Metadata = {
  title: "Справки",
  description: "ЕГРН, ЕГРЮЛ, арбитраж, налоги и проверки — заказ в кабинете после входа.",
};

export default function CertificatesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Кабинет"
        title="Справки и проверки"
        lead="ЕГРН, ЕГРЮЛ, арбитраж, налоги и проверки контрагента. Гость видит список услуг. Заказ и журнал — после регистрации, без чужих выписок на витрине."
        actions={
          <Link
            href="/cabinet#certificates"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
          >
            Журнал в кабинете
          </Link>
        }
      />
      <Gated guest={<GuestNote />} registered={
        <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
          Кабинет справок открыт в демо. Кнопка «заказать» ничего не отправляет в ведомства.
        </p>
      } />
      <div className="grid gap-4 sm:grid-cols-2">
        {certificates.map((item) => (
          <article key={item.slug} className="rounded-[18px] bg-surface p-5 sm:p-6">
            <h2 className="text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.guest}</p>
            <p className="mt-2 text-xs text-muted">{item.term}</p>
            <Gated
              guest={
                <Link
                  href="/register"
                  className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
                >
                  Заказ после регистрации
                </Link>
              }
              registered={
                <div className="mt-4">
                  <p className="mb-3 text-sm text-muted">{item.registered}</p>
                  <DemoAction
                    label={`Заказать ${item.title}`}
                    done="Заявка на выписку сохранена локально."
                  />
                </div>
              }
            />
          </article>
        ))}
      </div>
    </div>
  );
}
