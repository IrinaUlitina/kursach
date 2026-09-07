import type { Metadata } from "next";
import Link from "next/link";
import { DemoAction } from "@/components/DemoAction";
import { Gated, TariffGated } from "@/components/Gated";
import { PageHero } from "@/components/PageBits";
import { certificates } from "@/lib/content/certificates";

export const metadata: Metadata = {
  title: "Кабинет",
  description: "Демо-кабинет: заявки, справки, ЧС, лиды и доска для тарифа.",
};

export default function CabinetPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="После входа"
        title="Кабинет"
        lead="Физлицо: доверие, заявки, справки, переписка, ЧС. Бизнес и специалист с тарифом — плюс лиды и доска. Данные учебные."
      />
      <Gated
        guest={
          <section className="rounded-[20px] bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink">Кабинет закрыт для гостя</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Витрина, лента и кейсы остаются открытыми. ЧС, статусы, переписка,
              свои заявки и заказ справок — после{" "}
              <Link href="/register" className="font-semibold text-primary hover:underline">
                регистрации
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c667e]"
              >
                Регистрация
              </Link>
              <Link href="/login" className="rounded-full bg-bg px-5 py-2.5 text-sm font-semibold text-ink">
                Войти
              </Link>
            </div>
          </section>
        }
        registered={
          <div className="grid gap-4">
            <section className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Статус доверия</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Демо-метка профиля. Боевые статусы — после сделок и модерации.
              </p>
              <p className="mt-4 inline-flex rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">
                Доверие · демо
              </p>
            </section>

            <section id="requests" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Мои заявки</h2>
              <ul className="mt-4 divide-y divide-line">
                {myRequests.map((item) => (
                  <li key={item.id} className="grid gap-1 py-3 sm:grid-cols-[6rem_1fr_auto]">
                    <span className="text-sm font-semibold text-primary">{item.id}</span>
                    <span className="text-sm text-ink">{item.title}</span>
                    <span className="text-sm text-muted">{item.status}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section id="certificates" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Справки</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Журнал заказов. Полный список услуг — на{" "}
                <Link href="/certificates" className="font-semibold text-primary hover:underline">
                  странице справок
                </Link>
                .
              </p>
              <ul className="mt-4 space-y-3">
                {certificates.map((item) => (
                  <li key={item.slug} className="flex flex-wrap items-center justify-between gap-3">
                    <span className="text-sm text-ink">{item.title}</span>
                    <DemoAction label="Заказать" done="Сохранено локально" />
                  </li>
                ))}
              </ul>
            </section>

            <section id="messages" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Переписка</h2>
              <div className="mt-4 space-y-3">
                {threads.map((item) => (
                  <p key={item.from} className="rounded-[14px] bg-bg px-4 py-3 text-sm text-ink">
                    <span className="font-semibold">{item.from}:</span> {item.text}
                  </p>
                ))}
              </div>
              <div className="mt-4">
                <DemoAction label="Ответить (демо)" done="Сообщение не отправлялось." />
              </div>
            </section>

            <section id="blacklist" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Чёрный список</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Гостю список не показываем. Записи вымышленные.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-ink">
                <li>ООО «Пример-скрыт» — аванс без договора, демо</li>
                <li>ИП «Тест-бригада» — спор по смете, не реальный контрагент</li>
              </ul>
            </section>

            <TariffGated
              locked={
                <section className="rounded-[20px] border border-dashed border-line bg-surface p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-ink">Тариф бизнеса и специалиста</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Лиды и доска заказов — при активном тарифе (ориентир 5–15 тыс. ₽).
                    У физлица здесь заглушка. Зарегистрируйтесь как бизнес или
                    специалист, чтобы увидеть виджеты.{" "}
                    <Link href="/for-specialists" className="font-semibold text-primary hover:underline">
                      Условия входа
                    </Link>
                  </p>
                </section>
              }
              unlocked={
                <div className="grid gap-4 lg:grid-cols-2">
                  <section id="leads" className="rounded-[20px] bg-surface p-6 sm:p-8">
                    <h2 className="text-xl font-semibold text-ink">Входящие лиды</h2>
                    <ul className="mt-4 space-y-3 text-sm">
                      {leads.map((item) => (
                        <li key={item.id} className="rounded-[14px] bg-bg px-4 py-3">
                          <p className="font-semibold text-ink">{item.id} · {item.task}</p>
                          <p className="text-muted">{item.place}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                  <section id="board" className="rounded-[20px] bg-surface p-6 sm:p-8">
                    <h2 className="text-xl font-semibold text-ink">Доска заказов</h2>
                    <ul className="mt-4 space-y-3 text-sm">
                      {board.map((item) => (
                        <li key={item.title} className="rounded-[14px] bg-bg px-4 py-3">
                          <p className="font-semibold text-ink">{item.title}</p>
                          <p className="text-muted">{item.meta}</p>
                        </li>
                      ))}
                    </ul>
                  </section>
                </div>
              }
            />

            <p className="px-1 text-xs leading-relaxed text-muted">
              Администратор в этой оболочке не собирается. Полный контроль платформы
              остаётся вне демо.
            </p>
          </div>
        }
      />
    </div>
  );
}

const myRequests = [
  { id: "Д-104", title: "Межевание участка, Заволжье", status: "принята локально" },
  { id: "Д-105", title: "Юрист: проверка перед задатком", status: "черновик" },
  { id: "Д-106", title: "Под ключ: коттедж Успенское", status: "маршрутизация" },
];

const threads = [
  { from: "Волга-кадастр", text: "Готовы выехать на участок на следующей неделе. Демо." },
  { from: "Правовой контур", text: "Пришлите скан договора — ответ в кабинете, без сервера." },
];

const leads = [
  { id: "Л-11", task: "Кадастр, 8 соток", place: "Заволжье" },
  { id: "Л-12", task: "Договор аренды офиса", place: "Ленинский" },
  { id: "Л-13", task: "Каркас коттеджа", place: "Успенское" },
];

const board = [
  { title: "Коттедж · каркас", meta: "открыт · демо" },
  { title: "Склад · генподряд", meta: "отклик · демо" },
];
