import type { Metadata } from "next";
import Link from "next/link";
import { LoginForm } from "@/components/LoginForm";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Вход",
  description: "Демо-вход в Центр услуг. Без сервера и без настоящей авторизации.",
};

export default function LoginPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Демо без сервера"
        title="Вход"
        lead="Пароль никуда не уходит. Если email совпадает с регистрацией в этом браузере — вернём ту же роль."
      />
      <div className="mx-auto w-full max-w-xl rounded-[20px] bg-surface p-5 sm:p-8">
        <LoginForm />
        <p className="mt-5 text-sm text-muted">
          Нет демо-сессии?{" "}
          <Link href="/register" className="font-semibold text-primary hover:underline">
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  );
}
