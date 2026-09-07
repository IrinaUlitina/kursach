import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { footerNav } from "@/lib/nav";

export function Footer() {
  return (
    <footer className="mt-8 rounded-[32px] bg-surface px-5 py-10 sm:px-8 lg:px-12 lg:py-12">
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <BrandMark />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Площадка для сделок с недвижимостью, стройкой и бизнесом.
            Запуск — Ульяновск.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Платформа</h2>
          <ul className="mt-3 space-y-2">
            {footerNav.platform.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Каталог</h2>
          <ul className="mt-3 space-y-2">
            {footerNav.catalog.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-muted hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-ink">Доступ</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Гости видят компании, услуги и открытую ленту. Чёрный список,
            статусы доверия, сообщения и кабинет справок — после регистрации.
          </p>
          <p className="mt-4 text-sm text-muted">Ульяновск</p>
        </div>
      </div>

      <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 text-xs leading-relaxed text-muted sm:flex-row sm:items-start sm:justify-between">
        <p>© 2026 Центр услуг</p>
        <p className="max-w-xl sm:text-right">
          Независимая платформа. Не является продуктом Сбера, не связана
          со СберБанком и экосистемой Сбера.
        </p>
      </div>
    </footer>
  );
}
