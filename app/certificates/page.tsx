import type { Metadata } from "next";
import Link from "next/link";
import { GuestNote, PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Справки",
  description: "Справки и выписки Центра услуг — заказ в кабинете после входа.",
};

export default function CertificatesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Кабинет"
        title="Справки"
        lead="ЕГРН, арбитраж, ЕГРЮЛ и связанные выписки заказываются после регистрации. На этой странице только описание сервиса — без чужих персональных и закрытых данных."
        actions={
          <Link
            href="/request"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
          >
            Оставить заявку
          </Link>
        }
      />
      <GuestNote />
      <div className="grid gap-4 sm:grid-cols-3">
        {docs.map((item) => (
          <Card key={item.title} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const docs = [
  {
    title: "ЕГРН",
    text: "Выписки по объектам недвижимости — в кабинете, не в открытой витрине.",
  },
  {
    title: "ЕГРЮЛ",
    text: "Сведения о компаниях для сделки. Запрос после входа.",
  },
  {
    title: "Арбитраж",
    text: "Проверка судебных дел по контрагенту — тоже только в кабинете.",
  },
];
