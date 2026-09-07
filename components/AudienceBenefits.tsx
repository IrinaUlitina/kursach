"use client";

import { useState } from "react";
import Link from "next/link";

type AudienceId = "person" | "company";

type Scenario = {
  id: string;
  label: string;
  step: number;
  outcomes: string[];
};

const personScenarios: Scenario[] = [
  {
    id: "land",
    label: "Участок",
    step: 1,
    outcomes: [
      "Каталог кадастра и юристов доступен без аккаунта.",
      "После регистрации: статус исполнителя и чёрный список до задатка.",
      "ЕГРН и связанные выписки заказываются в кабинете.",
      "Маршрут «под ключ» или прямой выбор карточки компании.",
    ],
  },
  {
    id: "house",
    label: "Коттедж",
    step: 3,
    outcomes: [
      "Проект и генподряд ведутся в одной заявке.",
      "Исполнителей видно в каталоге до входа.",
      "После регистрации: переписка, статусы, журнал своих заявок.",
      "Смежные работы не собираются вручную по рынку.",
    ],
  },
  {
    id: "deal",
    label: "Сделка",
    step: 3,
    outcomes: [
      "Объект, договор и проверки — в одном контуре.",
      "Гость видит витрину риэлторов и юристов.",
      "После входа: ЧС, статусы доверия, заказ выписок.",
      "Контакт с карточкой или заявка центру.",
    ],
  },
  {
    id: "check",
    label: "Проверка",
    step: 4,
    outcomes: [
      "ЕГРЮЛ, арбитраж и связанные сверки — только в кабинете.",
      "Гостю список услуг виден, заказ закрыт.",
      "После регистрации: журнал запросов без публикации чужих данных.",
      "Решение по авансу принимается на статусах, не на объявлении.",
    ],
  },
];

const companyScenarios: Scenario[] = [
  {
    id: "showroom",
    label: "Витрина",
    step: 1,
    outcomes: [
      "Профиль в каталоге Ульяновска открыт гостю: направление, описание, кейсы.",
      "Рейтинг после сделок виден зарегистрированным, не гостю.",
      "Модерация карточки до публикации.",
      "Регистрация по ИНН — идентификатор юрлица, не оферта.",
    ],
  },
  {
    id: "leads",
    label: "Заявки",
    step: 3,
    outcomes: [
      "Входящие задачи и лента «ищу подрядчика» — по направлению.",
      "Отклик из кабинета, не из открытой витрины.",
      "Заказчик уже в контуре сделки, не холодный трафик с доски объявлений.",
      "Доска подрядов и журнал заявок — после регистрации юрлица.",
    ],
  },
  {
    id: "chain",
    label: "Смежники",
    step: 2,
    outcomes: [
      "Юрист, кадастр, проект, стройка стыкуются в одной цепочке.",
      "Карточка стоит рядом со смежными направлениями, не изолированным объявлением.",
      "После входа: переписка по заявке и статусы исполнения.",
      "Участие в сложных объектах, не только в разовых работах.",
    ],
  },
  {
    id: "reputation",
    label: "Репутация",
    step: 2,
    outcomes: [
      "Рейтинг формируется после закрытых сделок, не самооценкой.",
      "Гость не видит закрытые статусы и ЧС.",
      "После регистрации клиент сверяет доверие до контакта.",
      "История на площадке остаётся в профиле.",
    ],
  },
];

const process = {
  person: [
    { title: "Витрина", caption: "Каталог и лента без аккаунта" },
    { title: "Доверие", caption: "Статусы и ЧС после входа" },
    { title: "Сделка", caption: "Карточка или заявка центру" },
    { title: "Кабинет", caption: "Заявки, переписка, справки" },
  ],
  company: [
    { title: "Витрина", caption: "Публичный профиль в каталоге" },
    { title: "Профиль", caption: "ИНН, модерация, рейтинг" },
    { title: "Лиды", caption: "Заявки и поиск подрядчика" },
    { title: "Кабинет", caption: "Отклики, доска, переписка" },
  ],
} as const;

const matrix = {
  person: {
    guest: ["Каталог компаний и услуг", "Лента и кейсы", "Заявка центру"],
    registered: [
      "Статусы доверия и ЧС",
      "Переписка с компаниями",
      "Журнал своих заявок",
      "Заказ ЕГРН, ЕГРЮЛ, арбитраж",
    ],
  },
  company: {
    guest: ["Карточка в открытом каталоге", "Публичные кейсы направления"],
    registered: [
      "Рейтинг после сделок",
      "Отклик на заявки",
      "Кабинет переписки",
      "Входящие задачи и доска подрядов",
    ],
  },
} as const;

const cta = {
  person: {
    primary: { href: "/register", label: "Регистрация" },
    secondary: { href: "/companies", label: "Каталог компаний" },
  },
  company: {
    primary: { href: "/register", label: "Регистрация юрлица" },
    secondary: { href: "/for-specialists", label: "Порядок подключения" },
  },
} as const;

export function AudienceBenefits() {
  const [audience, setAudience] = useState<AudienceId>("person");
  const [scenarioId, setScenarioId] = useState(personScenarios[0].id);

  const scenarios = audience === "person" ? personScenarios : companyScenarios;
  const scenario = scenarios.find((item) => item.id === scenarioId) ?? scenarios[0];
  const steps = process[audience];
  const access = matrix[audience];
  const actions = cta[audience];

  function selectAudience(next: AudienceId) {
    setAudience(next);
    setScenarioId(next === "person" ? personScenarios[0].id : companyScenarios[0].id);
  }

  return (
    <section className="rounded-[32px] bg-surface px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
        Контур заказчика и контур юрлица
      </h2>
      <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
        Ульяновск. Недвижимость, строительство, документы. Каталог открыт. Статусы,
        переписка и справки — после регистрации.
      </p>

      <div
        className="mt-6 inline-flex rounded-full bg-bg p-1"
        role="tablist"
        aria-label="Тип участника"
      >
        <TabButton
          selected={audience === "person"}
          onClick={() => selectAudience("person")}
        >
          Физлица
        </TabButton>
        <TabButton
          selected={audience === "company"}
          onClick={() => selectAudience("company")}
        >
          Юрлица
        </TabButton>
      </div>

      <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Сценарий">
        {scenarios.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => setScenarioId(item.id)}
            className={`rounded-full px-3 py-1.5 text-sm font-medium ${
              scenario.id === item.id
                ? "bg-primary text-white"
                : "bg-bg text-ink hover:bg-line"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <ProcessFlow steps={steps} active={scenario.step} />

      <div className="mt-8 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-muted">Исход</h3>
          <ul className="mt-3 space-y-2.5 text-sm leading-snug text-ink">
            {scenario.outcomes.map((line) => (
              <li key={line} className="border-l-2 border-primary pl-3">
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-3 rounded-[18px] bg-bg p-4 sm:p-5">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">Гость</h3>
            <ul className="mt-2 space-y-1.5 text-sm text-ink">
              {access.guest.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-muted">
              После регистрации
            </h3>
            <ul className="mt-2 space-y-1.5 text-sm text-ink">
              {access.registered.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href={actions.primary.href}
          className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e] sm:w-auto"
        >
          {actions.primary.label}
        </Link>
        <Link
          href={actions.secondary.href}
          className="inline-flex w-full items-center justify-center text-center text-sm font-semibold text-primary hover:underline sm:w-auto sm:text-left"
        >
          {actions.secondary.label}
        </Link>
      </div>
    </section>
  );
}

function TabButton({
  selected,
  onClick,
  children,
}: {
  selected: boolean;
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={selected}
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-sm font-semibold ${
        selected ? "bg-surface text-ink shadow-[var(--shadow-nav)]" : "text-muted hover:text-ink"
      }`}
    >
      {children}
    </button>
  );
}

function ProcessFlow({
  steps,
  active,
}: {
  steps: readonly { title: string; caption: string }[];
  active: number;
}) {
  return (
    <ol className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
      {steps.map((step, index) => {
        const n = index + 1;
        const on = n === active;
        return (
          <li
            key={step.title}
            className={`relative rounded-[18px] border px-4 py-4 ${
              on ? "border-primary bg-primary-soft" : "border-line bg-bg"
            }`}
          >
            {index < steps.length - 1 ? (
              <span
                className="pointer-events-none absolute -right-2 top-7 hidden h-px w-4 bg-line lg:block"
                aria-hidden
              />
            ) : null}
            <ProcessNode n={n} active={on} />
            <p className="mt-3 text-sm font-semibold text-ink">{step.title}</p>
            <p className="mt-1 text-xs leading-snug text-muted">{step.caption}</p>
          </li>
        );
      })}
    </ol>
  );
}

function ProcessNode({ n, active }: { n: number; active: boolean }) {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden>
      <circle
        cx="18"
        cy="18"
        r="16"
        fill={active ? "var(--primary)" : "var(--surface)"}
        stroke={active ? "var(--primary)" : "var(--line)"}
        strokeWidth="2"
      />
      <text
        x="18"
        y="22"
        textAnchor="middle"
        fontSize="13"
        fontWeight="700"
        fill={active ? "#fff" : "var(--ink)"}
      >
        {n}
      </text>
    </svg>
  );
}
