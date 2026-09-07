"use client";

import { useState, type FormEvent } from "react";

const clientTypes = [
  "Компания",
  "Частное лицо",
  "Специалист",
] as const;

const directions = [
  "Недвижимость",
  "Строительство и генподряд",
  "Справки и документы",
  "Сделки с бизнесом",
  "Под ключ",
] as const;

export function RequestForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-[20px] bg-primary-soft px-5 py-8 text-center">
        <p className="text-lg font-semibold text-ink">Заявка сохранена на этой странице</p>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          Бэкенда пока нет: данные никуда не отправлялись. Это демонстрация
          формы для оболочки платформы.
        </p>
        <button
          type="button"
          className="mt-5 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c667e]"
          onClick={() => setSubmitted(false)}
        >
          Заполнить ещё раз
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Имя
        <input
          className="input font-normal"
          name="name"
          type="text"
          autoComplete="name"
          required
          placeholder="Как к вам обращаться"
        />
      </label>

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Телефон
        <input
          className="input font-normal"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          placeholder="+7 900 000-00-00"
        />
      </label>

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Тип клиента
        <select className="input font-normal" name="clientType" required defaultValue="">
          <option value="" disabled>
            Выберите
          </option>
          {clientTypes.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Направление
        <select className="input font-normal" name="direction" required defaultValue="">
          <option value="" disabled>
            Выберите
          </option>
          {directions.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Задача
        <textarea
          className="input min-h-[120px] resize-y font-normal"
          name="task"
          required
          placeholder="Коротко: объект, срок, что нужно закрыть"
        />
      </label>

      <label className="flex items-start gap-2.5 text-sm leading-relaxed text-muted">
        <input
          className="mt-1 h-4 w-4 shrink-0 accent-primary"
          type="checkbox"
          name="pdConsent"
          required
        />
        <span>
          Согласен на обработку персональных данных для связи по заявке.
          Серверная отправка пока не подключена.
        </span>
      </label>

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
      >
        Отправить заявку
      </button>
    </form>
  );
}
