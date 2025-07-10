import { Star } from "lucide-react"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AddToCartButton } from "@/components/add-to-cart-button"
import styles from "./page.module.css"

export default function ProductsPage() {
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
      rating: 4.9,
      reviews: 156,
      description: "Натуральные медовые соты прямо из улья",
      badge: "Сырой и натуральный",
    },
    {
      id: 5,
      name: "Липовый мёд 1 литр",
      price: 16,
      originalPrice: null,
      image: "/images/hero-honey.jpg",
      rating: 4.8,
      reviews: 94,
      description: "Ароматный липовый мёд с нежным вкусом",
      badge: null,
    },
    {
      id: 6,
      name: "Гречишный мёд 1 литр",
      price: 18,
      originalPrice: 20,
      image: "/images/hero-honey.jpg",
      rating: 4.6,
      reviews: 78,
      description: "Тёмный гречишный мёд с богатым вкусом",
      badge: "Ограниченная серия",
    },
  ]

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
              <div key={product.id} className={styles.productCard}>
                <div className={styles.imageContainer}>
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    width={300}
                    height={300}
                    className={styles.productImage}
                  />
                  {product.badge && <span className={styles.badge}>{product.badge}</span>}
                </div>
                <div className={styles.content}>
                  <div>
                    <h3 className={styles.productTitle}>{product.name}</h3>
                    <p className={styles.productDescription}>{product.description}</p>
                  </div>

                  <div className={styles.rating}>
                    <div className={styles.stars}>
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`${styles.star} ${
                            i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty
                          }`}
                        />
                      ))}
                    </div>
                    <span className={styles.ratingText}>
                      {product.rating} ({product.reviews} отзывов)
                    </span>
                  </div>

                  <div className={styles.priceSection}>
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
