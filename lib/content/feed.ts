export type FeedPost = {
  slug: string;
  kind: "case" | "contractor" | "announce";
  kindLabel: string;
  title: string;
  excerpt: string;
  body: string;
  date: string;
  public: boolean;
  companySlug?: string;
};

export const feedPosts: FeedPost[] = [
  {
    slug: "anons-zavolzhie",
    kind: "announce",
    kindLabel: "Анонс",
    title: "Витрина запущена в Ульяновске",
    excerpt: "Компании и услуги можно смотреть без аккаунта. Кабинет — после регистрации.",
    body: "Модерируемая лента: анонсы платформы, кейсы, запросы «ищу подрядчика». Личные статусы и ЧС в открытую ленту не попадают.",
    date: "12 августа 2026",
    public: true,
  },
  {
    slug: "ishchu-kadastr",
    kind: "contractor",
    kindLabel: "Ищу подрядчика",
    title: "Нужен кадастр на участок в Заволжье",
    excerpt: "Межевание 8 соток, выход к сделке в сентябре. Публичный запрос.",
    body: "Заказчик готов выбрать исполнителя из каталога или отдать заявку центру «под ключ». Отклик компаниям — после регистрации.",
    date: "20 августа 2026",
    public: true,
    companySlug: "volga-kadastr",
  },
  {
    slug: "keys-uspenskoe",
    kind: "case",
    kindLabel: "Кейс",
    title: "Коттедж в Успенском: проект сел на каркас",
    excerpt: "Короткий разбор цепочки проект → стройка. Подробности в разделе кейсов.",
    body: "Учебный кейс без персональных данных сделки. Гость читает сюжет; бейдж доверия исполнителя — у зарегистрированных.",
    date: "28 августа 2026",
    public: true,
    companySlug: "zarya-stroy",
  },
  {
    slug: "ishchu-yurist",
    kind: "contractor",
    kindLabel: "Ищу подрядчика",
    title: "Проверка арендодателя, офис в Ленинском",
    excerpt: "Нужен договор аренды 40 м² без серой схемы.",
    body: "Публичная формулировка задачи. Написать компании можно после входа — иначе витрина без переписки.",
    date: "1 сентября 2026",
    public: true,
    companySlug: "pravovoy-kontur",
  },
  {
    slug: "anons-tarif",
    kind: "announce",
    kindLabel: "Анонс",
    title: "Тариф входа для компаний: ориентир 5–15 тыс. ₽",
    excerpt: "Модерация по ИНН, витрина, лиды и доска — на тарифе. Комиссия со сделок — модель платформы.",
    body: "Не оферта и не банковский тариф. Цифры — ориентир для специалиста, чтобы понять вход.",
    date: "3 сентября 2026",
    public: true,
  },
];
