import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Специалистам",
  description: "Подключение специалистов и подрядчиков к Центру услуг.",
};

export default function ForSpecialistsPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Подрядчикам и экспертам"
        title="Специалистам"
        lead="Юристы, кадастр, проектировщики и стройка — в одной цепочке заявок. Витрина публичная, отклики и статусы — после входа."
        actions={
          <Link
            href="/request"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
          >
            Оставить заявку
          </Link>
        }
      />
      <div className="grid gap-4 md:grid-cols-3">
        {points.map((item) => (
          <Card key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const points = [
  {
    title: "Одна входящая лента",
    text: "Заявки «под ключ» маршрутизируются по направлению, без десяти чатов вручную.",
  },
  {
    title: "Публичная карточка",
    text: "Гости видят профиль в каталоге. Рейтинг после сделок — только у зарегистрированных.",
  },
  {
    title: "Без чужих кабинетов",
    text: "Чёрный список и переписка не светятся на витрине.",
  },
];
