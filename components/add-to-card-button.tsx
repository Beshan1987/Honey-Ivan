"use client"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
import { Tooltip } from "react-tooltip"
import { useCart } from "@/contexts/cart-context"
import styles from "./add-to-cart-button.module.css"

interface Product {
  id: number
  name: string
  price: number
  image: string
}

interface AddToCartButtonProps {
  product: Product
  className?: string
  disabled?: boolean
  disabledReason?: string
}

export function AddToCartButton({ product, className = "", disabled = false, disabledReason }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    if (disabled) return

    addItem(product)
    setIsAdded(true)

    // Сбрасываем состояние через 2 секунды
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const isDisabled = disabled || isAdded
  const tooltipContent =
    disabled && disabledReason ? disabledReason : isAdded ? "Товар добавлен в корзину!" : "Добавить товар в корзину"

  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.addButton} ${isAdded ? styles.added : ""} ${isDisabled ? styles.disabled : ""} ${className}`}
        onClick={handleAddToCart}
        disabled={isDisabled}
        data-tooltip-id={`add-to-cart-${product.id}`}
        data-tooltip-content={tooltipContent}
      >
        {isAdded ? (
          <>
            <Check size={16} />
            Добавлено!
          </>
        ) : (
          <>
            <ShoppingCart size={16} />
            Добавить в корзину
          </>
        )}
      </button>
      <Tooltip
        id={`add-to-cart-${product.id}`}
        place="top"
        style={{
          backgroundColor: disabled ? "#dc2626" : isAdded ? "#10b981" : "#374151",
          color: "white",
          borderRadius: "6px",
          padding: "6px 10px",
          fontSize: "13px",
          maxWidth: "200px",
          zIndex: 9999,
        }}
        opacity={1}
      />
    </div>
  )
}
