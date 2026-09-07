import type { Metadata } from "next";
import { GuestNote, PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Кейсы",
  description: "Типовые сценарии Центра услуг: от участка до сделки.",
};

export default function CasesPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Сценарии"
        title="Кейсы"
        lead="Типовые маршруты, не отзывы из закрытого кабинета. Реальные статусы сделок и чёрный список не публикуем на витрине."
      />
      <GuestNote />
      <div className="grid gap-4 lg:grid-cols-3">
        {cases.map((item) => (
          <Card key={item.title} meta={item.meta} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const cases = [
  {
    meta: "Участок",
    title: "От земли до разрешения",
    text: "Кадастр, юрист и проектировщик идут одной цепочкой — без разрозненных подрядчиков.",
  },
  {
    meta: "Коттедж",
    title: "Дом «под ключ»",
    text: "Заявка маршрутизирует генподряд и смежные работы. Детали исполнения — после входа.",
  },
  {
    meta: "Бизнес",
    title: "Сделка с помещением",
    text: "Проверка, договор, справки. Гость видит сценарий; выписки заказываются в кабинете.",
  },
];
