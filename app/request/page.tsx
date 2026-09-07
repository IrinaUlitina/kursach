import type { Metadata } from "next";
import { RequestForm } from "@/components/RequestForm";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Оставить заявку",
  description: "Заявка в Центр услуг: недвижимость, стройка, справки, бизнес.",
};

export default function RequestPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Маршрутизация"
        title="Оставить заявку"
        lead="Имя, телефон, тип клиента, направление и задача. Форма не уходит на сервер: это оболочка без бэкенда."
      />
      <div className="mx-auto w-full max-w-xl rounded-[20px] bg-surface p-5 sm:p-8">
        <RequestForm />
      </div>
    </div>
  );
}
