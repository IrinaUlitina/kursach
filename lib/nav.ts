export const cityLabel = "Ульяновск";

export const utilityLinks = [
  { href: "/for-specialists", label: "Специалистам" },
  { href: "/companies", label: "Компаниям" },
] as const;

export const navLinks = [
  { href: "/feed", label: "Лента" },
  { href: "/companies", label: "Компании" },
  { href: "/services", label: "Услуги" },
  { href: "/cases", label: "Кейсы" },
  { href: "/certificates", label: "Справки" },
  { href: "/about", label: "О центре" },
] as const;

export const footerNav = {
  platform: [
    { href: "/about", label: "О центре" },
    { href: "/feed", label: "Лента" },
    { href: "/request", label: "Оставить заявку" },
    { href: "/for-specialists", label: "Специалистам" },
  ],
  catalog: [
    { href: "/companies", label: "Компании" },
    { href: "/services", label: "Услуги" },
    { href: "/cases", label: "Кейсы" },
    { href: "/certificates", label: "Справки" },
  ],
} as const;
