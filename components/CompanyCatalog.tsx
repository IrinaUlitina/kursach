"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { TrustMeta } from "@/components/TrustUi";
import { companies, companyCategories, type Company } from "@/lib/content/companies";

export function CompanyCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return companies.filter((item) => {
      const catOk = category === "all" || item.categorySlug === category;
      const text = `${item.name} ${item.short} ${item.category}`.toLowerCase();
      return catOk && (!q || text.includes(q));
    });
  }, [query, category]);

  return (
    <div className="grid gap-5">
      <div className="rounded-[20px] bg-surface p-4 sm:p-5">
        <label className="grid gap-1.5 text-sm font-medium text-ink">
          Поиск
          <input
            className="input font-normal"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Название, кадастр, стройка…"
          />
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {companyCategories.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => setCategory(item.slug)}
              className={`rounded-full px-3 py-1.5 text-sm font-medium ${
                category === item.slug
                  ? "bg-primary text-white"
                  : "bg-bg text-ink hover:bg-line"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {list.length === 0 ? (
        <div className="rounded-[20px] bg-surface px-5 py-10 text-center">
          <p className="font-semibold text-ink">Никого не нашли</p>
          <p className="mt-2 text-sm text-muted">
            Сбросьте фильтр или оставьте заявку «под ключ» — центр маршрутизирует.
          </p>
          <Link
            href="/request"
            className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
          >
            Оставить заявку
          </Link>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((item) => (
            <CompanyCard key={item.slug} company={item} />
          ))}
        </div>
      )}
    </div>
  );
}

function CompanyCard({ company }: { company: Company }) {
  return (
    <article className="flex flex-col rounded-[18px] bg-surface p-5 sm:p-6">
      <p className="text-xs font-medium uppercase tracking-wide text-primary">{company.category}</p>
      <h2 className="mt-1 text-lg font-semibold text-ink">{company.name}</h2>
      <p className="mt-1 text-sm text-muted">{company.city}</p>
      <TrustMeta rating={company.rating} reviews={company.reviews} />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{company.short}</p>
      <Link
        href={`/companies/${company.slug}`}
        className="mt-4 text-sm font-semibold text-primary hover:underline"
      >
        Карточка компании
      </Link>
    </article>
  );
}
