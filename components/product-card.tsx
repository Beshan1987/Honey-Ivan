"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import Image from "next/image"
import { AddToCartButton } from "./add-to-card-button"
import { CartModal } from "./cart-modal"
import styles from "./product-card.module.css"

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number | null
  image: string
  rating: number
  reviews: number | null
  description: string
  badge?: string | null
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [isCartOpen, setIsCartOpen] = useState(false)

  const handleOpenCart = () => {
    setIsCartOpen(true)
  }

  return (
    <>
      <div className={styles.productCard} id={"product" + product.id}>
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
            <h3 className={styles.productTitle}>{product.name}
              <p>{product.name.includes('соты') ? "(одна рамка)" : "(1 литр)"}</p>
            </h3>
            <p className={styles.productDescription}>{product.description}</p>
          </div>

          <div className={styles.productRating}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`${styles.star} ${i < Math.floor(product.rating) ? styles.starFilled : styles.starEmpty}`}
                />
              ))}
            </div>
            {product.reviews && <span className={styles.ratingText}>
              {product.rating} ({product.reviews} отзывов)
            </span>}
          </div>

          <div className={styles.productPrice}>
            <div className={styles.priceContainer}>
              <span className={styles.currentPrice}>{product.price} BYN</span>
              {product.originalPrice && <span className={styles.originalPrice}>{product.originalPrice} BYN</span>}
            </div>
          </div>

          <AddToCartButton
            product={{
              id: product.id,
              name: product.name,
              price: product.price,
              image: product.image,
            }}
            onOpenCart={handleOpenCart}
          />
        </div>
      </div>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
