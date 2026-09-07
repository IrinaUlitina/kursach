import Link from "next/link";
import { CheckBadge, PlaceholderArt } from "@/components/Art";
import { RequestForm } from "@/components/RequestForm";
import { SectionHeading } from "@/components/PageBits";

export default function HomePage() {
  return (
    <div className="mt-5 flex flex-col gap-8 lg:gap-10">
      <section className="hero-gradient grid items-center gap-10 rounded-[32px] px-5 py-10 text-white sm:px-8 sm:py-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-14 lg:py-16">
        <div>
          <h1 className="max-w-xl text-[1.85rem] font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-[3.15rem]">
            Один центр для сделок с недвижимостью и бизнесом
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
            Компании с рейтингом, подрядчики, справки и заявка «под ключ».
            Смотрите витрину без регистрации — полный доступ после входа.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/companies"
              className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-primary hover:bg-primary-soft"
            >
              Смотреть компании
            </Link>
            <Link
              href="/request"
              className="text-sm font-semibold text-white underline-offset-4 hover:underline"
            >
              Сделать под ключ
            </Link>
          </div>
        </div>
        <PlaceholderArt caption="Место под 3D-иллюстрацию (свой арт, не банк)" />
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {benefits.map((item) => (
          <article key={item.title} className="rounded-[18px] bg-surface p-6">
            <CheckBadge />
            <h2 className="mt-4 text-lg font-semibold text-ink">{item.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
          </article>
        ))}
      </section>

      <section className="pt-4">
        <SectionHeading
          title="Какие задачи закрываем"
          lead="От участка до коттеджа — маршрутизация специалистов под сделку, стройку и документы в одном контуре."
        />
        <div className="mt-8 grid gap-4">
          {tasks.map((item, index) => (
            <article
              key={item.title}
              className="grid items-center gap-6 rounded-[28px] bg-surface p-5 sm:p-8 lg:grid-cols-2 lg:gap-12 lg:p-10"
            >
              <div className={index % 2 === 1 ? "lg:order-2" : undefined}>
                <p className="text-sm font-medium text-primary">{item.kicker}</p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted sm:text-base">
                  {item.text}
                </p>
              </div>
              <PlaceholderArt caption={item.art} variant={index === 1 ? "soft" : "dark"} />
            </article>
          ))}
        </div>
      </section>

      <section>
        <SectionHeading
          title="Услуги центра"
          lead="Открытый каталог направлений. Карточки услуг видны гостям; исполнение и статусы — в кабинете."
        />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <article key={item.title} className="rounded-[18px] bg-surface p-6">
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
        <Link
          href="/services"
          className="mt-5 inline-flex text-sm font-semibold text-primary hover:underline"
        >
          Все услуги
        </Link>
      </section>

      <section className="rounded-[32px] bg-surface px-5 py-10 sm:px-8 lg:px-12">
        <SectionHeading
          title="Как пользоваться"
          lead="Короткий маршрут: витрина открыта сразу, кабинет — после регистрации."
        />
        <ol className="mt-8 divide-y divide-line">
          {steps.map((item, index) => (
            <li key={item.title} className="grid gap-3 py-6 sm:grid-cols-[4.5rem_1fr] sm:gap-8">
              <span className="text-3xl font-extrabold tabular-nums text-primary">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="grid items-start gap-8 rounded-[32px] bg-surface p-5 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
            Оставить заявку
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
            Расскажите задачу — маршрутизируем по направлению. Форма работает
            в браузере, без сервера и без обещания мгновенной сделки.
          </p>
        </div>
        <div className="rounded-[20px] border border-line p-5 sm:p-6">
          <RequestForm />
        </div>
      </section>
    </div>
  );
}

const benefits = [
  {
    title: "Цепочка специалистов",
    text: "Юрист, кадастр, проект и стройка в одном контуре",
  },
  {
    title: "Рейтинг и доверие",
    text: "Отзывы после сделок, статусы после регистрации",
  },
  {
    title: "Справки в кабинете",
    text: "ЕГРН, арбитраж, ЕГРЮЛ — без беготни по ведомствам",
  },
];

const tasks = [
  {
    kicker: "Земля и документы",
    title: "Участок, кадастр, согласования",
    text: "Сведём кадастрового инженера, юриста и проектировщика. Гости видят витрину; статусы доверия открываются после входа.",
    art: "Схема участка — CSS-заглушка",
  },
  {
    kicker: "Стройка",
    title: "Коттедж, коммерция, генподряд",
    text: "Подрядчики и смежные работы под задачу. Заявка «под ключ» уходит в нужное направление, без ручного обзвона десяти фирм.",
    art: "Каркас объекта — CSS-заглушка",
  },
  {
    kicker: "Сделки",
    title: "Недвижимость и бизнес",
    text: "Сопровождение покупки, аренды и корпоративных сделок. Кейсы и каталог — без регистрации; переписка и чёрный список — в кабинете.",
    art: "Контур сделки — CSS-заглушка",
  },
];

const services = [
  {
    title: "Юридическое сопровождение",
    text: "Договоры, проверки, представительство по недвижимости и бизнесу.",
  },
  {
    title: "Кадастр и межевание",
    text: "Учёт участка, границы, подготовка к сделке и стройке.",
  },
  {
    title: "Проектирование",
    text: "Эскиз, рабочая документация, согласования в одном контуре.",
  },
  {
    title: "Строительство",
    text: "Генподряд и узкие работы: от фундамента до отделки.",
  },
  {
    title: "Оценка и экспертиза",
    text: "Стоимость объекта и проверка качества для сделки.",
  },
  {
    title: "Справки и выписки",
    text: "ЕГРН, ЕГРЮЛ, арбитраж — заказ после входа в кабинет.",
  },
];

const steps = [
  {
    title: "Смотрите витрину без регистрации",
    text: "Компании, услуги, лента и кейсы открыты гостям.",
  },
  {
    title: "Выберите направление",
    text: "Недвижимость, стройка, справки или сделка с бизнесом.",
  },
  {
    title: "Оставьте заявку «под ключ»",
    text: "Коротко опишите задачу — маршрутизируем специалистам.",
  },
  {
    title: "Войдите за полным доступом",
    text: "Справки, статусы, сообщения и чёрный список — только в кабинете.",
  },
];
