import type { ReactNode } from "react";
import Link from "next/link";

export function PageHero({
  eyebrow,
  title,
  lead,
  actions,
}: {
  eyebrow?: string;
  title: string;
  lead: string;
  actions?: ReactNode;
}) {
  return (
    <section className="hero-gradient rounded-[32px] px-5 py-10 text-white sm:px-8 sm:py-12 lg:px-14 lg:py-16">
      {eyebrow ? (
        <p className="text-sm font-medium text-white/70">{eyebrow}</p>
      ) : null}
      <h1 className="mt-2 max-w-3xl text-3xl font-extrabold leading-[1.15] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
        {lead}
      </p>
      {actions ? <div className="mt-7 flex flex-wrap gap-3">{actions}</div> : null}
    </section>
  );
}

export function SectionHeading({
  title,
  lead,
}: {
  title: string;
  lead?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl lg:text-[2.1rem]">
        {title}
      </h2>
      {lead ? <p className="mt-3 text-base leading-relaxed text-muted">{lead}</p> : null}
    </div>
  );
}

export function Card({
  title,
  text,
  href,
  meta,
}: {
  title: string;
  text: string;
  href?: string;
  meta?: string;
}) {
  const inner = (
    <>
      {meta ? <p className="text-xs font-medium uppercase tracking-wide text-primary">{meta}</p> : null}
      <h3 className="mt-1 text-lg font-semibold text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>
    </>
  );

  const className =
    "rounded-[18px] bg-surface p-5 sm:p-6 " + (href ? "block hover:ring-1 hover:ring-primary/20" : "");

  if (href) {
    return (
      <Link href={href} className={className}>
        {inner}
      </Link>
    );
  }

  return <article className={className}>{inner}</article>;
}

export function GuestNote() {
  return (
    <p className="rounded-[18px] bg-primary-soft px-4 py-3 text-sm leading-relaxed text-ink">
      Витрина открыта без регистрации. Чёрный список, статусы доверия, сообщения
      и кабинет справок доступны после входа — закрытые данные здесь не
      показываем.
    </p>
  );
}
