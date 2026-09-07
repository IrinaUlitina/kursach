import type { Metadata } from "next";
import { GuestNote, PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Направления услуг Центра услуг: недвижимость, стройка, справки, бизнес.",
};

export default function ServicesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Каталог"
        title="Услуги"
        lead="Публичный список направлений. Исполнение, сроки и переписка по заявке доступны после регистрации."
      />
      <GuestNote />
      <div className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <Card key={item.title} meta={item.meta} title={item.title} text={item.text} href="/request" />
        ))}
      </div>
    </div>
  );
}

const items = [
  {
    meta: "Документы",
    title: "Кадастр и земля",
    text: "Учёт, границы, подготовка участка к сделке или стройке.",
  },
  {
    meta: "Право",
    title: "Юридическое сопровождение",
    text: "Проверка объекта, договоры, представительство.",
  },
  {
    meta: "Проект",
    title: "Проектирование и согласования",
    text: "От эскиза до комплекта документов под стройку.",
  },
  {
    meta: "Стройка",
    title: "Генподряд «под ключ»",
    text: "Маршрутизация подрядчиков под коттедж или коммерческий объект.",
  },
  {
    meta: "Сделки",
    title: "Недвижимость и бизнес",
    text: "Покупка, аренда, сопровождение корпоративных сделок.",
  },
  {
    meta: "Справки",
    title: "Выписки в кабинете",
    text: "ЕГРН, ЕГРЮЛ, арбитраж — заказ после входа, не на этой странице.",
  },
];
