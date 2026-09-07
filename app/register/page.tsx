import type { Metadata } from "next";
import Link from "next/link";
import { RegisterForm } from "@/components/RegisterForm";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Регистрация",
  description: "Демо-регистрация в Центре услуг: физлицо, бизнес или специалист.",
};

export default function RegisterPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Демо без сервера"
        title="Регистрация"
        lead="Физлицо — кабинет заявок и справок. Бизнес и специалист — ИНН, модерация, тариф 5–15 тыс. ₽ как ориентир. Сессия только в браузере."
      />
      <div className="mx-auto w-full max-w-xl rounded-[20px] bg-surface p-5 sm:p-8">
        <RegisterForm />
        <p className="mt-5 text-sm text-muted">
          Уже есть демо-сессия?{" "}
          <Link href="/login" className="font-semibold text-primary hover:underline">
            Войти
          </Link>
        </p>
      </div>
    </div>
  );
}
