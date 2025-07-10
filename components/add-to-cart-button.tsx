"use client"

import { useState } from "react"
import { ShoppingCart, Check } from "lucide-react"
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
}

export function AddToCartButton({ product, className = "" }: AddToCartButtonProps) {
  const { addItem } = useCart()
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToCart = () => {
    addItem(product)
    setIsAdded(true)

    // Сбрасываем состояние через 2 секунды
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  return (
    <button
      className={`${styles.addButton} ${isAdded ? styles.added : ""} ${className}`}
      onClick={handleAddToCart}
      disabled={isAdded}
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
  )
}
