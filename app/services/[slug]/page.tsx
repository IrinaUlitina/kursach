import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageBits";
import { companies } from "@/lib/content/companies";
import { getService, services } from "@/lib/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return services.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return { title: service?.title ?? "Услуга", description: service?.short };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = companies.filter((item) => item.services.includes(service.slug));

  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero eyebrow={service.kicker} title={service.title} lead={service.short} />
      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Что входит</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            {service.includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Для кого</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{service.forWhom}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{service.scenario}</p>
        </article>
      </div>
      <section className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Кто на витрине</h2>
        {related.length === 0 ? (
          <p className="mt-3 text-sm text-muted">
            Направление закрываем заявкой центру, отдельной карточки компании в демо нет.
          </p>
        ) : (
          <ul className="mt-4 space-y-2">
            {related.map((item) => (
              <li key={item.slug}>
                <Link href={`/companies/${item.slug}`} className="font-semibold text-primary hover:underline">
                  {item.name}
                </Link>
                <span className="text-sm text-muted"> · {item.city}</span>
              </li>
            ))}
          </ul>
        )}
      </section>
      <div className="flex flex-wrap gap-3">
        <Link
          href="/request"
          className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
        >
          Оставить заявку
        </Link>
        <Link
          href="/register"
          className="rounded-full bg-surface px-5 py-3 text-sm font-semibold text-ink"
        >
          Регистрация
        </Link>
      </div>
    </div>
  );
}
