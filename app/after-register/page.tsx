import type { Metadata } from "next";
import Link from "next/link";
import { AfterRegisterBanner } from "@/components/AfterRegisterBanner";
import { PageHero } from "@/components/PageBits";
import {
  adminNote,
  guestLocked,
  guestSees,
  registeredUnlocks,
  tariffUnlocks,
} from "@/lib/access";

export const metadata: Metadata = {
  title: "После регистрации",
  description: "Что открывается гостю и что появляется после регистрации в Центре услуг.",
};

export default function AfterRegisterPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Модель доступа"
        title="Что меняется после регистрации"
        lead="Гость видит витрину. Зарегистрированный получает статусы, ЧС, переписку, заявки и справки. Бизнес и специалист с тарифом — ещё лиды и доску заказов."
        actions={
          <>
            <Link
              href="/cabinet"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              Кабинет
            </Link>
            <Link
              href="/register"
              className="text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Регистрация
            </Link>
          </>
        }
      />
      <AfterRegisterBanner />

      <div className="grid gap-4 lg:grid-cols-2">
        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Как было у гостя</h2>
          <p className="mt-2 text-sm text-muted">Видно без аккаунта</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
            {guestSees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-ink">Не видно</p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-muted">
            {guestLocked.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="rounded-[20px] bg-surface p-6 sm:p-8">
          <h2 className="text-xl font-semibold text-ink">Стало доступно</h2>
          <p className="mt-2 text-sm text-muted">После регистрации (демо-сессия)</p>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
            {registeredUnlocks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-ink">
            Плюс при активном тарифе бизнеса / специалиста
          </p>
          <ul className="mt-2 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink">
            {tariffUnlocks.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-6 text-sm leading-relaxed text-muted">{adminNote}</p>
        </article>
      </div>
    </div>
  );
}
