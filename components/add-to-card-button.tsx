"use client"

import { useState } from "react"
import { ShoppingCart, Check, Eye, Trash2, Plus, Minus } from "lucide-react"
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
  onOpenCart?: () => void
}

export function AddToCartButton({
  product,
  className = "",
  disabled = false,
  disabledReason,
  onOpenCart,
}: AddToCartButtonProps) {
  const { addItem, removeItem, updateQuantity, items } = useCart()
  const [isAdded, setIsAdded] = useState(false)
  const [showActions, setShowActions] = useState(false)

  // Проверяем, есть ли товар в корзине
  const cartItem = items.find((item) => item.id === product.id)
  const isInCart = !!cartItem
  const quantity = cartItem?.quantity || 0

  const handleAddToCart = () => {
    if (disabled) return

    addItem(product)
    setIsAdded(true)
    setShowActions(true)

    // Сбрасываем состояние "добавлено" через 2 секунды, но оставляем кнопки действий
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const handleRemoveFromCart = () => {
    removeItem(product.id)
    setShowActions(false)
    setIsAdded(false)
  }

  const handleUpdateQuantity = (newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveFromCart()
    } else {
      updateQuantity(product.id, newQuantity)
    }
  }

  const handleViewCart = () => {
    if (onOpenCart) {
      onOpenCart()
    }
  }

  // Если товар в корзине или только что добавлен, показываем расширенные действия
  if (isInCart || showActions) {
    return (
      <div className={styles.buttonWrapper}>
        <div className={styles.expandedActions}>
          {/* Информация о количестве */}
          <div className={styles.quantityInfo}>
            <span className={styles.quantityLabel}>В корзине:</span>
            <div className={styles.quantityControls}>
              <button
                className={styles.quantityButton}
                onClick={() => handleUpdateQuantity(quantity - 1)}
                title="Уменьшить количество"
              >
                <Minus size={14} />
              </button>
              <span className={styles.quantityValue}>{quantity}</span>
              <button
                className={styles.quantityButton}
                onClick={() => handleUpdateQuantity(quantity + 1)}
                title="Увеличить количество"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          {/* Кнопки действий */}
          <div className={styles.actionButtons}>
            <button
              className={`${styles.actionButton} ${styles.viewCartButton}`}
              onClick={handleViewCart}
              title="Перейти в корзину"
            >
              <Eye size={16} />
              Корзина
            </button>
            <button
              className={`${styles.actionButton} ${styles.removeButton}`}
              onClick={handleRemoveFromCart}
              title="Удалить из корзины"
            >
              <Trash2 size={16} />
              Удалить
            </button>
          </div>

          {/* Статус добавления */}
          {/* {isAdded && (
            <div className={styles.addedStatus}>
              <Check size={16} />
              <span>Добавлено в корзину!</span>
            </div>
          )} */}
        </div>
      </div>
    )
  }

  // Обычная кнопка добавления
  const isDisabled = disabled || isAdded

  return (
    <div className={styles.buttonWrapper}>
      <button
        className={`${styles.addButton} ${isAdded ? styles.added : ""} ${isDisabled ? styles.disabled : ""} ${className}`}
        onClick={handleAddToCart}
        disabled={isDisabled}
        title={
          disabled && disabledReason
            ? disabledReason
            : isAdded
              ? "Товар добавлен в корзину!"
              : "Добавить товар в корзину"
        }
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
    </div>
  )
}
