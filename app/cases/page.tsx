import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageBits";
import { cases } from "@/lib/content/cases";

export const metadata: Metadata = {
  title: "Кейсы",
  description: "Разборы задач Центра услуг: участок, коттедж, проверка контрагента, офис, склад.",
};

export default function CasesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Ульяновск"
        title="Кейсы"
        lead="Учебные сценарии: задача → ход → результат. Не отзывы из закрытого кабинета и не чужие персональные данные."
      />
      <div className="grid gap-4 lg:grid-cols-2">
        {cases.map((item) => (
          <Link
            key={item.slug}
            href={`/cases/${item.slug}`}
            className="rounded-[18px] bg-surface p-6 hover:ring-1 hover:ring-primary/20"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-primary">{item.kicker}</p>
            <h2 className="mt-1 text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-1 text-sm text-muted">{item.place}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
