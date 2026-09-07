import Link from "next/link";

const demandBullets = [
  "Витрину компаний смотрите до входа. После регистрации открываются статусы доверия и чёрный список — чтобы не ошибиться с подрядчиком.",
  "Риэлтор, кадастр, юрист, проект и стройка собираются в одной цепочке, а не в десяти чатах.",
  "ЕГРН и проверки контрагента заказываете в кабинете — без беготни по ведомствам.",
  "Пишете исполнителю сами или отдаёте задачу «под ключ» центру.",
  "Соседу пересылают не «ещё сайт», а место, где по Ульяновску и по делу.",
];

const supplyBullets = [
  "Профиль — постоянная витрина с рейтингом после реальных сделок, не объявление на неделю.",
  "Вас находят люди, которые уже ищут кадастр, юриста или стройку: лента «ищу подрядчика» и заявки по городу.",
  "Вы входите в сложные сделки — участок, коттедж, коммерция, — а не только в разовые «покрасить забор».",
  "Репутация копится на площадке: после закрытых дел вас рекомендуют внутри сети.",
  "Регистрация по ИНН и модерация — сигнал клиенту, что вы не однодневка.",
];

const chips = ["Рейтинг после сделок", "Чёрный список", "Справки в кабинете", "Ульяновск"];

export function AudienceBenefits() {
  return (
    <section className="rounded-[32px] bg-primary-soft px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary">
        Почему остаются и рекомендуют
      </p>
      <h2 className="mt-3 max-w-4xl text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.65rem]">
        Сделку собирают в одном центре — подрядчика не ловят наугад
      </h2>
      <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
        Ульяновск · недвижимость и стройка · витрина открыта гостю · полное
        доверие после входа.
      </p>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <article className="flex flex-col rounded-[28px] bg-surface p-6 shadow-[var(--shadow-nav)] sm:p-8">
          <p className="text-sm font-semibold text-primary">Вам, если вы человек, семья или инвестор</p>
          <h3 className="mt-3 text-[1.45rem] font-extrabold leading-snug tracking-tight text-ink sm:text-[1.7rem]">
            Не рискуете миллионами на «знакомом прорабе»
          </h3>
          <ul className="mt-6 space-y-4">
            {demandBullets.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/register"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e] sm:w-auto"
            >
              Создать аккаунт
            </Link>
            <Link
              href="/companies"
              className="inline-flex w-full items-center justify-center text-center text-sm font-semibold text-primary hover:underline sm:w-auto sm:text-left"
            >
              Смотреть компании
            </Link>
          </div>
        </article>

        <article className="flex flex-col rounded-[28px] bg-surface p-6 shadow-[var(--shadow-nav)] sm:p-8">
          <p className="text-sm font-semibold text-primary">Вам, если вы компания или специалист</p>
          <h3 className="mt-3 text-[1.45rem] font-extrabold leading-snug tracking-tight text-ink sm:text-[1.7rem]">
            Вас находят те, кто уже готов к сделке
          </h3>
          <ul className="mt-6 space-y-4">
            {supplyBullets.map((item) => (
              <Bullet key={item}>{item}</Bullet>
            ))}
          </ul>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/register"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e] sm:w-auto"
            >
              Открыть витрину компании
            </Link>
            <Link
              href="/for-specialists"
              className="inline-flex w-full items-center justify-center text-center text-sm font-semibold text-primary hover:underline sm:w-auto sm:text-left"
            >
              Как это работает для бизнеса
            </Link>
          </div>
        </article>
      </div>

      <div className="mt-8 rounded-[24px] bg-surface px-5 py-6 text-center sm:px-8">
        <p className="text-base font-semibold leading-relaxed text-ink sm:text-lg">
          Площадку пересылают, когда нужен не «ещё один сайт», а спокойная сделка.
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {chips.map((chip) => (
            <li
              key={chip}
              className="rounded-full bg-primary-soft px-3 py-1.5 text-xs font-semibold text-primary sm:text-sm"
            >
              {chip}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: string }) {
  return (
    <li className="flex gap-3 text-sm leading-relaxed text-ink sm:text-[0.95rem]">
      <span
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white"
        aria-hidden
      >
        ✓
      </span>
      <span>{children}</span>
    </li>
  );
}
