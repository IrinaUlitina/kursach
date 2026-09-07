import type { Metadata } from "next";
import { GuestNote, PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Компании",
  description: "Открытая витрина компаний Центра услуг в Ульяновске.",
};

export default function CompaniesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Витрина"
        title="Компании"
        lead="Каталог открыт без регистрации. Рейтинг сделок, отзывы после закрытия и статусы доверия — в кабинете после входа."
      />
      <GuestNote />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {companies.map((item) => (
          <Card key={item.title} meta={item.meta} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const companies = [
  {
    meta: "Кадастр",
    title: "Кадастровые инженеры",
    text: "Межевание, учёт участков, подготовка к сделке. Публичная карточка направления.",
  },
  {
    meta: "Проект",
    title: "Проектные бюро",
    text: "Эскизы и рабочая документация для частного и коммерческого строительства.",
  },
  {
    meta: "Стройка",
    title: "Генподряд и подрядчики",
    text: "Коттеджи, коммерция, отдельные виды работ. Без закрытых статусов на витрине.",
  },
  {
    meta: "Право",
    title: "Юридические практики",
    text: "Сопровождение сделок с недвижимостью и корпоративных договоров.",
  },
  {
    meta: "Оценка",
    title: "Оценка и экспертиза",
    text: "Стоимость объекта и проверка качества — как отдельное направление витрины.",
  },
  {
    meta: "Компаниям",
    title: "Подключить компанию",
    text: "Заявка на попадание в каталог. Модерация и статусы — после запуска кабинета.",
  },
];
