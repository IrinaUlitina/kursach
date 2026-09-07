import type { Metadata } from "next";
import Link from "next/link";
import { CompanyCatalog } from "@/components/CompanyCatalog";
import { Gated } from "@/components/Gated";
import { GuestNote, PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Компании",
  description: "Каталог компаний Центра услуг в Ульяновске: кадастр, проект, стройка, юристы.",
};

export default function CompaniesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Витрина"
        title="Компании"
        lead="Каталог открыт без регистрации: имя, город, направление, короткое описание. Рейтинг, статусы доверия и переписка — после входа."
      />
      <Gated
        guest={<GuestNote />}
        registered={
          <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
            Демо-сессия: в карточках видны учебные рейтинги. Написать компанию —
            кнопка в профиле, без живого чата.
          </p>
        }
      />
      <CompanyCatalog />
      <p className="text-sm text-muted">
        Не нашли исполнителя?{" "}
        <Link href="/request" className="font-semibold text-primary hover:underline">
          Заявка «под ключ»
        </Link>
        {" · "}
        <Link href="/register" className="font-semibold text-primary hover:underline">
          Регистрация
        </Link>
      </p>
    </div>
  );
}
