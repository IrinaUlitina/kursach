import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PlaceholderArt } from "@/components/Art";
import { PageHero } from "@/components/PageBits";
import { TrustMeta, WriteCta } from "@/components/TrustUi";
import { getCase } from "@/lib/content/cases";
import { companies, getCompany } from "@/lib/content/companies";
import { getService } from "@/lib/content/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return companies.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const company = getCompany(slug);
  return {
    title: company ? company.name : "Компания",
    description: company?.short,
  };
}

export default async function CompanyDetailPage({ params }: Props) {
  const { slug } = await params;
  const company = getCompany(slug);
  if (!company) notFound();

  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow={`${company.city} · ${company.category}`}
        title={company.name}
        lead={company.short}
      />
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">О компании</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">{company.about}</p>
          <div className="mt-4">
            <TrustMeta rating={company.rating} reviews={company.reviews} />
          </div>
        </article>
        <div className="grid gap-4">
          <PlaceholderArt caption="Фото объекта — CSS-заглушка, не банк" variant="soft" />
          <div className="rounded-[20px] bg-surface p-6">
            <h2 className="text-lg font-semibold text-ink">Написать</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Гость видит профиль. Переписка открывается после регистрации.
            </p>
            <div className="mt-4">
              <WriteCta />
            </div>
          </div>
        </div>
      </div>

      <section className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Услуги</h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {company.services.map((serviceSlug) => {
            const service = getService(serviceSlug);
            if (!service) return null;
            return (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex rounded-full bg-bg px-3 py-1.5 text-sm font-medium text-ink hover:bg-line"
                >
                  {service.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="rounded-[20px] bg-surface p-6 sm:p-8">
        <h2 className="text-xl font-semibold text-ink">Кейсы</h2>
        {company.caseSlugs.length === 0 ? (
          <p className="mt-3 text-sm text-muted">Пока нет опубликованных кейсов в демо.</p>
        ) : (
          <ul className="mt-4 space-y-3">
            {company.caseSlugs.map((caseSlug) => {
              const item = getCase(caseSlug);
              if (!item) return null;
              return (
                <li key={item.slug}>
                  <Link href={`/cases/${item.slug}`} className="font-semibold text-primary hover:underline">
                    {item.title}
                  </Link>
                  <p className="text-sm text-muted">{item.place}</p>
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </div>
  );
}
