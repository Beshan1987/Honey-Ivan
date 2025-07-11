import { Star, Truck, Shield, Award } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AddToCartButton } from "@/components/add-to-cart-button"
import styles from "./page.module.css"
import type { Metadata } from "next"

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
        url: "/images/hero-honey.jpg",
        width: 1200,
        height: 630,
        alt: "Натуральный мёд Золотой Улей",
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
  const products = [
    {
      id: 1,
      name: "Цветочный мёд 1 литр",
      price: 18,
      originalPrice: 20,
      image: "/images/hero-honey.jpg",
      rating: 4.8,
      reviews: 127,
      description: "Чистый цветочный мёд, собранный с местных лугов",
      badge: "Хит продаж",
    },
    {
      id: 2,
      name: "Мёд Манука 1 литр",
      price: 19,
      originalPrice: null,
      image: "/images/hero-honey.jpg",
      rating: 4.9,
      reviews: 89,
      description: "Премиальный мёд Манука с высоким содержанием MGO",
      badge: "Премиум",
    },
    {
      id: 3,
      name: "Клеверный мёд 1 литр",
      price: 15,
      originalPrice: null,
      image: "/images/hero-honey.jpg",
      rating: 4.7,
      reviews: 203,
      description: "Лёгкий и мягкий клеверный мёд, идеален для ежедневного использования",
      badge: null,
    },
    {
      id: 4,
      name: "Медовые соты 1 литр",
      price: 17,
      originalPrice: 19,
      image: "/images/hero-honey.jpg",
      rating: 3.5,
      reviews: 156,
      description: "Натуральные медовые соты прямо из улья",
      badge: "Сырой и натуральный",
    },
  ]

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
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Довольных клиентов</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>5+</div>
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
                <Image src="/images/hero-honey.jpg" alt="Банка чистого мёда" width={500} height={600} layout="responsive" />
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
                Бесплатная доставка при заказе от 30 BYN. Быстрая и надёжная доставка по всей Беларуси.
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
              <h3 className={styles.featureTitle}>Признание</h3>
              <p className={styles.featureDescription}>
                Более 100 доволных покупателей регулярно приобретают наш мед
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
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImageContainer}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className={styles.productImage}
                  />
                  {product.badge && <span className={styles.productBadge}>{product.badge}</span>}
                </div>
                <div className={styles.productContent}>
                  <div>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                  </div>

                  <div className={styles.productRating}>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${styles.star} ${i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty
                            }`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className={styles.productPrice}>
                    <div className={styles.priceContainer}>
                      <span className={styles.currentPrice}>{product.price} BYN</span>
                      {product.originalPrice && (
                        <span className={styles.originalPrice}>{product.originalPrice} BYN</span>
                      )}
                    </div>
                  </div>

                  <AddToCartButton
                    product={{
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.image,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
