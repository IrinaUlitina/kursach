import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope",
});

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: {
    default: "Центр услуг — недвижимость, стройка и бизнес в Ульяновске",
    template: "%s — Центр услуг",
  },
  description:
    "Один центр для сделок с недвижимостью и бизнесом: компании, подрядчики, справки и заявка под ключ. Смотрите витрину без регистрации.",
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body className="min-h-screen font-sans antialiased">
        <div className="mx-auto max-w-[1440px] px-3 pb-6 sm:px-4 lg:px-6">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
