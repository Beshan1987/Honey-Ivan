import { Truck, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import styles from "./page.module.css"
import type { Metadata } from "next"
import { products } from "./constants/products"

export const metadata: Metadata = {
  title: "ПЧАЛЯР - Натуральный мёд прямо из улья | Премиальные медовые продукты",
  description:
    "Купить натуральный мёд в Беларуси. Цветочный, липовый, гречишный мёд и медовые соты. Доставка по всей стране. 100% качество, экологически чистое производство.",
  keywords:
    "мёд, натуральный мёд, купить мёд, мёд Беларусь, цветочный мёд, липовый мёд, медовые соты, пчеловодство, экологический мёд",
  openGraph: {
    title: "ПЧАЛЯР - Натуральный мёд прямо из улья",
    description: "Премиальные медовые продукты от нашей семьи к вашей. Чистый, натуральный и экологически чистый мёд.",
    type: "website",
    locale: "by_BY",
    siteName: "ПЧАЛЯР",
    images: [
      {
        url: "/images/hero-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Натуральный мёд ПЧАЛЯР",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ПЧАЛЯР - Натуральный мёд",
    description: "Премиальные медовые продукты. Чистый, натуральный и экологически чистый мёд.",
    images: ["/images/hero-honey.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function HomePage() {


  return (
    <div className={styles.page}>
      <Header />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <div className={`${styles.heroGrid} lg-grid-cols-2`}>
            <div className={styles.heroContent}>
              <div className={styles.heroText}>
                <span className="badge">100% Чистый и Натуральный</span>
                <h1 className={styles.heroTitle}>
                  Чистый Мёд
                  <span className={styles.heroTitleAccent}> Прямо</span>
                  <br />
                  Из Улья
                </h1>
                <p className={styles.heroDescription}>
                  Откройте для себя лучший выбор сырого, нефильтрованного мёда, собранного с заботой из наших местных
                  пасек. Почувствуйте разницу, которую даёт чистый, натуральный мёд.
                </p>
              </div>

              <div className={styles.heroButtons}>
                <Link href="/products" className="btn btn-primary btn-lg">
                  Смотреть коллекцию
                </Link>
                <Link href="/about" className="btn btn-outline btn-lg">
                  Узнать больше
                </Link>
              </div>

              <div className={styles.heroStats}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Довольных клиентов</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Лет опыта</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Чистый и натуральный</div>
                </div>
              </div>
            </div>

            <div className={styles.heroImage}>
              <div className={styles.heroImageContainer}>
                <Image src="/images/hero-pic.jpg" alt="Банка чистого мёда" width={500}
                  height={475}
                  layout="responsive" />
              </div>
              <div className={styles.heroImageBg}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features}>
        <div className={styles.featuresContainer}>
          <div className={`${styles.featuresGrid} md-grid-cols-3`}>
            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Truck />
              </div>
              <h3 className={styles.featureTitle}>Бесплатная доставка</h3>
              <p className={styles.featureDescription}>
                Бесплатная доставка при заказе от 50 BYN. Быстрая и надёжная доставка по всей Беларуси.
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Shield />
              </div>
              <h3 className={styles.featureTitle}>Гарантия качества</h3>
              <p className={styles.featureDescription}>
                100% гарантия удовлетворения. Чистый, сырой мёд или возврат денег.
              </p>
            </div>

            <div className={styles.featureItem}>
              <div className={styles.featureIcon}>
                <Award />
              </div>
              <h3 className={styles.featureTitle}>Награды</h3>
              <p className={styles.featureDescription}>
                Признание за превосходство в производстве мёда и устойчивое пчеловодство.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.products}>
        <div className={styles.productsContainer}>
          <div className={styles.sectionHeader}>
            <span className="badge">Наши продукты</span>
            <h2 className={styles.sectionTitle}>Премиальная коллекция мёда</h2>
            <p className={styles.sectionDescription}>
              От дикого цветка до мануки, откройте для себя наш тщательно отобранный выбор различных видов чистого,
              натурального мёда в удобной литровой упаковке.
            </p>
          </div>

          <div className={`${styles.productsGrid} md-grid-cols-2 lg-grid-cols-4`}>
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