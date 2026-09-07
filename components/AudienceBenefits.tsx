import Link from "next/link";

export function AudienceBenefits() {
  return (
    <section className="pt-2">
      <div className="max-w-3xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-[2.1rem]">
          Польза приложения и зачем регистрироваться
        </h2>
        <p className="mt-3 text-base leading-relaxed text-muted">
          Витрина открыта всем. Кабинет, ЧС, статусы и справки — только после
          регистрации. Не обещаем гостю то, что живёт за входом.
        </p>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-2">
        <article className="flex flex-col rounded-[28px] bg-surface p-6 sm:p-8">
          <p className="text-sm font-medium text-primary">Для физлица</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
            Выбрать исполнителя или отдать центру
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            <li>Смотреть витрину компаний и услуг можно без регистрации.</li>
            <li>
              После регистрации: статусы доверия, чёрный список, переписка с
              компаниями, свои заявки, заказ справок (ЕГРН, арбитраж, ЕГРЮЛ и
              другие) в кабинете.
            </li>
            <li>
              Можно выбрать исполнителя из каталога или оставить заявку «под ключ»
              центру — юрист, кадастр, проект, стройка в одной цепочке.
            </li>
            <li>
              Прозрачность и защита от сомнительных контрагентов: проверки и ЧС
              не светятся гостю специально.
            </li>
          </ul>
          <Link
            href="/register"
            className="mt-8 inline-flex self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
          >
            Зарегистрироваться
          </Link>
        </article>

        <article className="flex flex-col rounded-[28px] bg-surface p-6 sm:p-8">
          <p className="text-sm font-medium text-primary">Для компании / специалиста</p>
          <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
            Витрина в Ульяновске и входящие задачи
          </h3>
          <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
            <li>Профиль-витрина, кейсы; рейтинг после сделок виден зарегистрированным.</li>
            <li>
              После регистрации и активного тарифа: входящие лиды, доска подрядов,
              ответы на заявки. Без тарифа кабинеты лидов — заглушка.
            </li>
            <li>Регистрация по ИНН, модерация карточки до публикации в каталоге.</li>
            <li>
              Тариф входа — ориентир 5–15 тыс. ₽. Комиссия со сделок — мягкая модель
              платформы, не банковский продукт.
            </li>
            <li>
              Видимость в Ульяновске и цепочка сделок: юрист, кадастр, проект,
              стройка.
            </li>
          </ul>
          <Link
            href="/for-specialists"
            className="mt-8 inline-flex self-start rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
          >
            Стать участником
          </Link>
        </article>
      </div>
    </section>
  );
}
