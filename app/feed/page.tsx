import type { Metadata } from "next";
import Link from "next/link";
import { Gated } from "@/components/Gated";
import { GuestNote, PageHero } from "@/components/PageBits";
import { TrustMeta, WriteCta } from "@/components/TrustUi";
import { getCompany } from "@/lib/content/companies";
import { feedPosts } from "@/lib/content/feed";

export const metadata: Metadata = {
  title: "Лента",
  description: "Модерируемая лента Центра услуг: кейсы, поиск подрядчика, анонсы.",
};

export default function FeedPage() {
  return (
    <div className="mt-5 flex flex-col gap-6">
      <PageHero
        eyebrow="Модерация"
        title="Лента"
        lead="Кейсы, запросы «ищу подрядчика», анонсы платформы. Гость читает публичные посты. Бейджи доверия и «написать» — после регистрации."
      />
      <Gated
        guest={<GuestNote />}
        registered={
          <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
            В ленте те же публичные посты плюс учебные статусы у карточек компаний.
            Личный ЧС сюда не выносится.
          </p>
        }
      />
      <div className="grid gap-4">
        {feedPosts.map((post) => {
          const company = post.companySlug ? getCompany(post.companySlug) : undefined;
          return (
            <article key={post.slug} className="rounded-[18px] bg-surface p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-2 text-xs font-medium uppercase tracking-wide text-primary">
                <span>{post.kindLabel}</span>
                <span className="text-muted">{post.date}</span>
              </div>
              <h2 className="mt-2 text-lg font-semibold text-ink">{post.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{post.body}</p>
              {company ? (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Link
                    href={`/companies/${company.slug}`}
                    className="text-sm font-semibold text-primary hover:underline"
                  >
                    {company.name}
                  </Link>
                  <TrustMeta rating={company.rating} reviews={company.reviews} />
                  {post.kind === "contractor" ? <WriteCta /> : null}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>
      <Gated
        guest={
          <section className="rounded-[20px] bg-surface p-6 sm:p-8">
            <h2 className="text-lg font-semibold text-ink">Отклик скрыт для гостя</h2>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              Написать компании по запросу «ищу подрядчика» можно после входа.
            </p>
            <Link
              href="/register"
              className="mt-5 inline-flex rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#0c667e]"
            >
              Зарегистрироваться
            </Link>
          </section>
        }
        registered={
          <p className="text-sm text-muted">
            Ответы уходят в{" "}
            <Link href="/cabinet#messages" className="font-semibold text-primary hover:underline">
              кабинет · сообщения
            </Link>
            . Это демо без сервера.
          </p>
        }
      />
    </div>
  );
}
