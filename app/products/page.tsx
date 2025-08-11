import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { products } from "../constants/products"
import styles from "./page.module.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Каталог мёда - ПЧАЛЯР | Купить натуральный мёд в Беларуси",
  description:
    "Полный каталог натурального мёда: цветочный, липовый, гречишный, мёд Манука и медовые соты. Цены от 15 BYN за литр. Доставка по Беларуси.",
  keywords:
    "каталог мёда, купить мёд, цены на мёд, цветочный мёд, липовый мёд, гречишный мёд, мёд рапсовый, медовые соты, мёд литр",
  openGraph: {
    title: "Каталог натурального мёда - ПЧАЛЯР",
    description: "Полный каталог премиального мёда различных сортов. Цены от 15 BYN за литр с доставкой по Беларуси.",
    type: "website",
    images: [
      {
        url: "/images/hero-honey.jpg",
        width: 1200,
        height: 630,
        alt: "Каталог натурального мёда",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProductsPage() {

  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className="badge">Наша продукция</span>
            <h1 className={styles.title}>Коллекция премиального мёда</h1>
            <p className={styles.description}>
              От цветочного до Манука, откройте для себя нашу тщательно отобранную коллекцию чистого, сырого мёда
              различных сортов в удобной литровой упаковке.
            </p>
          </div>

          <div className={`${styles.grid} md-grid-cols-2 lg-grid-cols-3`}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
