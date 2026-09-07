import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageBits";
import { services } from "@/lib/content/services";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Направления Центра услуг: юристы, бухгалтерия, риэлторы, IT, кадастр, проект, стройка, под ключ.",
};

export default function ServicesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Каталог"
        title="Услуги"
        lead="Восемь направлений в одном контуре. Карточки открыты гостям. Исполнение, переписка и справки — после регистрации."
        actions={
          <Link
            href="/request"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
          >
            Заявка «под ключ»
          </Link>
        }
      />
      <div className="grid gap-4 sm:grid-cols-2">
        {services.map((item) => (
          <Link
            key={item.slug}
            href={`/services/${item.slug}`}
            className="rounded-[18px] bg-surface p-6 hover:ring-1 hover:ring-primary/20"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-primary">{item.kicker}</p>
            <h2 className="mt-1 text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.short}</p>
            <p className="mt-3 text-sm font-medium text-ink">Для кого: {item.forWhom}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
