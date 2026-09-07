import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/PageBits";
import { cases, getCase } from "@/lib/content/cases";
import { getCompany } from "@/lib/content/companies";
import { getService } from "@/lib/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  return { title: item?.title ?? "Кейс", description: item?.summary };
}

export default async function CaseDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero eyebrow={`${item.kicker} · ${item.place}`} title={item.title} lead={item.summary} />
      <article className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Задача</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.task}</p>
      </article>
      <article className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Ход</h2>
        <ol className="mt-4 list-decimal space-y-3 pl-5 text-sm leading-relaxed text-muted">
          {item.steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </article>
      <article className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Результат</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.result}</p>
      </article>
      <div className="grid gap-4 sm:grid-cols-2">
        <section className="rounded-[20px] bg-surface p-6">
          <h2 className="text-lg font-semibold text-ink">Компании</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {item.companySlugs.map((companySlug) => {
              const company = getCompany(companySlug);
              if (!company) return null;
              return (
                <li key={company.slug}>
                  <Link href={`/companies/${company.slug}`} className="font-semibold text-primary hover:underline">
                    {company.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="rounded-[20px] bg-surface p-6">
          <h2 className="text-lg font-semibold text-ink">Услуги</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {item.serviceSlugs.map((serviceSlug) => {
              const service = getService(serviceSlug);
              if (!service) return null;
              return (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="font-semibold text-primary hover:underline">
                    {service.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
