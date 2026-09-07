"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { readDemoUser, writeDemoUser } from "@/lib/demo-session";

export function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = String(data.get("email") ?? "").trim();
    const password = String(data.get("password") ?? "");

    if (!email || password.length < 6) {
      setError("Укажите email и пароль не короче 6 символов. Это демо, без проверки на сервере.");
      return;
    }

    const existing = readDemoUser();
    if (existing && existing.email.toLowerCase() === email.toLowerCase()) {
      writeDemoUser(existing);
    } else {
      writeDemoUser({
        role: "person",
        name: email.split("@")[0] || "Гость",
        email,
        phone: "",
      });
    }

    router.push("/cabinet");
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-4">
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
        Пароль
        <input
          className="input font-normal"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          minLength={6}
        />
        <span className="font-normal text-xs text-muted">
          Демо: пароль не сверяется с сервером. Если email совпадает с
          регистрацией в этом браузере — восстановим роль.
        </span>
      </label>

      {error ? <p className="text-sm text-[#9f1239]">{error}</p> : null}

      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white hover:bg-[#0c667e]"
      >
        Войти
      </button>
    </form>
  );
}
