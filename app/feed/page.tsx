import type { Metadata } from "next";
import { GuestNote, PageHero, Card } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Лента",
  description: "Открытая лента Центра услуг — новости платформы и витрины.",
};

export default function FeedPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Публично"
        title="Лента"
        lead="Открытые материалы витрины. Личные сообщения, отклики и внутренние статусы в ленту гостя не попадают."
      />
      <GuestNote />
      <div className="grid gap-4">
        {posts.map((item) => (
          <Card key={item.title} meta={item.meta} title={item.title} text={item.text} />
        ))}
      </div>
    </div>
  );
}

const posts = [
  {
    meta: "Платформа",
    title: "Запуск витрины в Ульяновске",
    text: "Каталог компаний и услуг можно смотреть без аккаунта. Кабинет справок — следующий шаг после регистрации.",
  },
  {
    meta: "Направления",
    title: "Цепочка: юрист, кадастр, проект, стройка",
    text: "Заявка «под ключ» собирает контур под задачу, а не одну случайную карточку.",
  },
  {
    meta: "Доступ",
    title: "Что остаётся за входом",
    text: "Чёрный список, статусы доверия и переписка. На витрине этого нет специально.",
  },
];
