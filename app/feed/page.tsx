import type { Metadata } from "next";
import Link from "next/link";
import { Gated } from "@/components/Gated";
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
        lead="Открытые материалы витрины видит гость. Личные сообщения и внутренние статусы — только после входа."
      />
      <Gated
        guest={<GuestNote />}
        registered={
          <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
            Публичная лента как у гостя, плюс учебный блок сообщений. Это не живой чат.
          </p>
        }
      />
      <div className="grid gap-4">
        {posts.map((item) => (
          <Card key={item.title} meta={item.meta} title={item.title} text={item.text} />
        ))}
      </div>
      <Gated
        guest={
          <section className="rounded-[20px] bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Переписка скрыта</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Сообщения компаниям и отклики не попадают в ленту гостя.
            </p>
            <Link
              href="/register"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c667e]"
            >
              Открыть после регистрации
            </Link>
          </section>
        }
        registered={
          <section className="rounded-[20px] bg-surface p-6 sm:p-8">
            <p className="text-xs font-medium uppercase tracking-wide text-primary">Сообщение · демо</p>
            <h2 className="mt-1 text-lg font-semibold text-ink">
              Компания «Витрина-демо» ответила на заявку
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Учебный отклик для зарегистрированного. Гость этот блок не видит.
            </p>
            <Link
              href="/cabinet#messages"
              className="mt-4 inline-flex text-sm font-semibold text-primary hover:underline"
            >
              Открыть в кабинете
            </Link>
          </section>
        }
      />
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
    text: "Чёрный список, статусы доверия и переписка. На витрине гостя этого нет специально.",
  },
];
