import type { Metadata } from "next";
import Link from "next/link";
import { DemoAction } from "@/components/DemoAction";
import { Gated, TariffGated } from "@/components/Gated";
import { PageHero } from "@/components/PageBits";

export const metadata: Metadata = {
  title: "Кабинет",
  description: "Демо-кабинет Центра услуг: заявки, справки, ЧС, статусы. Без бэкенда.",
};

export default function CabinetPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="После входа"
        title="Кабинет"
        lead="Полный контур только у зарегистрированного. Гость видит приглашение войти. Данные ниже учебные, без API."
      />
      <Gated
        guest={
          <section className="rounded-[20px] bg-surface p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-ink">Кабинет закрыт для гостя</h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
              Витрина компаний, услуг и лента остаются открытыми. ЧС, статусы
              доверия, переписка, свои заявки и заказ справок — после регистрации.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/register"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c667e]"
              >
                Регистрация
              </Link>
              <Link
                href="/login"
                className="rounded-full bg-bg px-5 py-2.5 text-sm font-semibold text-ink"
              >
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
                Демо-метка. Боевые статусы появятся после сделок и модерации.
              </p>
              <p className="mt-4 inline-flex rounded-full bg-primary-soft px-3 py-1 text-sm font-semibold text-primary">
                Доверие · демо
              </p>
            </section>

            <section id="requests" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Мои заявки</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                <li>Д-104 · кадастр · принята локально (демо)</li>
                <li>Д-105 · юрист · черновик в этом браузере</li>
              </ul>
            </section>

            <section id="certificates" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Справки</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                ЕГРН, ЕГРЮЛ, арбитраж — заказ в кабинете. Это кнопка без сервера.
              </p>
              <div className="mt-4">
                <DemoAction
                  label="Заказать выписку (демо)"
                  done="Заказ сохранён на этой странице. Бэкенда нет."
                />
              </div>
            </section>

            <section id="messages" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Сообщения компаниям</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Учебный тред, не живая переписка.
              </p>
              <p className="mt-4 rounded-[14px] bg-bg px-4 py-3 text-sm text-ink">
                «Витрина-демо»: готовы уточнить смету. Ответ уйдёт в кабинет, когда
                появится бэкенд.
              </p>
              <div className="mt-4">
                <DemoAction label="Ответить (демо)" done="Сообщение не отправлялось." />
              </div>
            </section>

            <section id="blacklist" className="rounded-[20px] bg-surface p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-ink">Чёрный список</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Гостю этот список не показываем. Ниже — вымышленная демо-запись.
              </p>
              <p className="mt-4 rounded-[14px] bg-bg px-4 py-3 text-sm text-ink">
                ООО «Пример-скрыт» — демо, не реальный контрагент.
              </p>
            </section>

            <TariffGated
              locked={
                <section className="rounded-[20px] border border-dashed border-line bg-surface p-6 sm:p-8">
                  <h2 className="text-xl font-semibold text-ink">Тариф бизнеса и специалиста</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    Входящие лиды и доска заказов подрядчика открываются при
                    активном тарифе. У физлица здесь заглушка. Смените тип на
                    регистрации, чтобы увидеть демо-кабинеты.
                  </p>
                </section>
              }
              unlocked={
                <div className="grid gap-4 lg:grid-cols-2">
                  <section id="leads" className="rounded-[20px] bg-surface p-6 sm:p-8">
                    <h2 className="text-xl font-semibold text-ink">Входящие лиды</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Заглушка кабинета при тарифе. Лида с улицы нет.
                    </p>
                    <p className="mt-4 text-sm text-ink">Лид Д-11 · участок · демо-очередь</p>
                  </section>
                  <section id="board" className="rounded-[20px] bg-surface p-6 sm:p-8">
                    <h2 className="text-xl font-semibold text-ink">Доска заказов</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">
                      Подрядчику и компании — контур заказов. Пока карточка-заглушка.
                    </p>
                    <p className="mt-4 text-sm text-ink">Заказ «коттедж · каркас» · демо</p>
                  </section>
                </div>
              }
            />

            <p className="px-1 text-xs leading-relaxed text-muted">
              Администратор в этой оболочке не собирается: полный контроль платформы
              остаётся вне демо.
            </p>
          </div>
        }
      />
    </div>
  );
}
