export type Company = {
  slug: string;
  name: string;
  city: string;
  category: string;
  categorySlug: string;
  rating: number;
  reviews: number;
  short: string;
  about: string;
  services: string[];
  caseSlugs: string[];
};

export const companies: Company[] = [
  {
    slug: "volga-kadastr",
    name: "Волга-кадастр",
    city: "Ульяновск",
    category: "Кадастр",
    categorySlug: "kadastr",
    rating: 4.8,
    reviews: 12,
    short: "Межевание и учёт участков в Заволжье и Ленинском районе.",
    about:
      "Кадастровые работы для частников и застройщиков: границы, постановка на учёт, подготовка к сделке и стройке. Учебная карточка витрины, не живой реестр.",
    services: ["kadastr", "pod-klyuch"],
    caseSlugs: ["uchastok-zavolzhie"],
  },
  {
    slug: "simbirsk-proekt",
    name: "Симбирск-проект",
    city: "Ульяновск",
    category: "Проектирование",
    categorySlug: "proektirovanie",
    rating: 4.6,
    reviews: 9,
    short: "Эскиз и рабочка под коттедж и небольшую коммерцию.",
    about:
      "Проектная мастерская: от посадки на участок до комплекта под согласования. На витрине гости видят профиль; статусы доверия — после входа.",
    services: ["proektirovanie", "pod-klyuch"],
    caseSlugs: ["kottedzh-uspenskoe"],
  },
  {
    slug: "zarya-stroy",
    name: "Заря-строй",
    city: "Ульяновск",
    category: "Строительство",
    categorySlug: "stroitelstvo",
    rating: 4.5,
    reviews: 15,
    short: "Каркас, фундамент, генподряд коттеджа в Успенском.",
    about:
      "Подрядчик и генподряд: частный дом и небольшие склады. Заявка «под ключ» может прийти сюда через центр.",
    services: ["stroitelstvo", "pod-klyuch"],
    caseSlugs: ["kottedzh-uspenskoe", "genpodryad-sklad"],
  },
  {
    slug: "pravovoy-kontur",
    name: "Правовой контур",
    city: "Ульяновск",
    category: "Юристы",
    categorySlug: "yuridicheskie",
    rating: 4.9,
    reviews: 18,
    short: "Договоры, проверка контрагента, сопровождение сделки.",
    about:
      "Юридическое сопровождение недвижимости и бизнеса. Проверка перед задатком, договоры, представительство. ЧС и статусы — только в кабинете.",
    services: ["yuridicheskie", "pod-klyuch"],
    caseSlugs: ["proverka-kontragent", "ofis-leninsky"],
  },
  {
    slug: "volna-rielt",
    name: "Волна-риэлт",
    city: "Ульяновск",
    category: "Риэлторы",
    categorySlug: "rieltory",
    rating: 4.4,
    reviews: 7,
    short: "Покупка, аренда, подбор помещения под офис в Ленинском.",
    about:
      "Риэлторская практика: жильё и небольшая коммерция. Каталог открыт гостю; переписка — после регистрации.",
    services: ["rieltory"],
    caseSlugs: ["ofis-leninsky"],
  },
  {
    slug: "sviyaga-it",
    name: "Свияга IT",
    city: "Ульяновск",
    category: "IT",
    categorySlug: "it",
    rating: 4.7,
    reviews: 6,
    short: "Сайты, учёт заявок и простые кабинеты для подрядчиков.",
    about:
      "IT-сопровождение участников центра: витрина, заявки, обмен документами. Не банк и не чужая экосистема.",
    services: ["it"],
    caseSlugs: [],
  },
];

export function getCompany(slug: string) {
  return companies.find((item) => item.slug === slug);
}

export const companyCategories = [
  { slug: "all", label: "Все" },
  { slug: "kadastr", label: "Кадастр" },
  { slug: "proektirovanie", label: "Проект" },
  { slug: "stroitelstvo", label: "Стройка" },
  { slug: "yuridicheskie", label: "Юристы" },
  { slug: "rieltory", label: "Риэлторы" },
  { slug: "it", label: "IT" },
] as const;
