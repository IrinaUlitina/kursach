"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import {
  hasTariffCabinets,
  isDemoRole,
  writeDemoUser,
  type DemoRole,
} from "@/lib/demo-session";

const roleOptions: { value: DemoRole; label: string; hint: string }[] = [
  { value: "person", label: "Физлицо", hint: "Свои заявки, справки, ЧС и статусы доверия" },
  {
    value: "business",
    label: "Бизнес",
    hint: "То же плюс лиды и доска заказов — при активном тарифе",
  },
  {
    value: "specialist",
    label: "Специалист (компания)",
    hint: "То же плюс лиды и доска заказов — при активном тарифе",
  },
];

export function RegisterForm() {
  const router = useRouter();
  const [role, setRole] = useState<DemoRole>("person");
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextRole = String(data.get("role") ?? "");
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const password = String(data.get("password") ?? "");
    const confirm = String(data.get("confirm") ?? "");
    const inn = String(data.get("inn") ?? "").trim();

    if (!isDemoRole(nextRole) || !name || !email || !phone) {
      setError("Заполните обязательные поля.");
      return;
    }
    if (password.length < 6) {
      setError("Пароль в демо — не короче 6 символов. Никуда не отправляется.");
      return;
    }
    if (password !== confirm) {
      setError("Пароль и подтверждение не совпадают.");
      return;
    }

    writeDemoUser({
      role: nextRole,
      name,
      email,
      phone,
      inn: inn || undefined,
    });
    router.push("/after-register");
  }

  const org = hasTariffCabinets(role);

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
      <fieldset className="grid gap-2">
        <legend className="text-sm font-medium text-ink">Тип регистрации</legend>
        {roleOptions.map((item) => (
          <label
            key={item.value}
            className="flex cursor-pointer items-start gap-3 rounded-[14px] border border-line px-3 py-3 has-[:checked]:border-primary has-[:checked]:bg-primary-soft"
          >
            <input
              className="mt-1 accent-primary"
              type="radio"
              name="role"
              value={item.value}
              checked={role === item.value}
              onChange={() => setRole(item.value)}
              required
            />
            <span>
              <span className="block text-sm font-semibold text-ink">{item.label}</span>
              <span className="mt-0.5 block text-xs leading-relaxed text-muted">{item.hint}</span>
            </span>
          </label>
        ))}
      </fieldset>

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        {org ? "Название компании" : "Имя"}
        <input
          className="input font-normal"
          name="name"
          type="text"
          autoComplete={org ? "organization" : "name"}
          required
          placeholder={org ? "ООО «Пример»" : "Как к вам обращаться"}
        />
      </label>

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Email
        <input
          className="input font-normal"
          name="email"
          type="email"
          autoComplete="email"
          required
          placeholder="you@example.com"
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

      {org ? (
        <label className="grid gap-1.5 text-sm font-medium text-ink">
          ИНН
          <input
            className="input font-normal"
            name="inn"
            type="text"
            inputMode="numeric"
            autoComplete="off"
            placeholder="Необязательно в демо"
          />
          <span className="font-normal text-xs text-muted">
            В продукте регистрация бизнеса и специалиста идёт по ИНН. Здесь поле
            показано, но не проверяется.
          </span>
        </label>
      ) : null}

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Пароль
        <input
          className="input font-normal"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={6}
        />
      </label>

      <label className="grid gap-1.5 text-sm font-medium text-ink">
        Подтверждение пароля
        <input
          className="input font-normal"
          name="confirm"
          type="password"
          autoComplete="new-password"
          required
          minLength={6}
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
          Согласен на обработку персональных данных. Демо-сессия пишется только
          в этот браузер (localStorage), без сервера.
        </span>
      </label>

      {error ? <p className="text-sm text-[#9f1239]">{error}</p> : null}

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
      >
        Зарегистрироваться
      </button>
    </form>
  );
}
