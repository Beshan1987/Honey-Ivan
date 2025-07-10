"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import styles from "./cart-icon.module.css"

interface CartIconProps {
  onClick: () => void
}

export function CartIcon({ onClick }: CartIconProps) {
  const { itemCount } = useCart()

  return (
    <button className={styles.cartButton} onClick={onClick} aria-label="Открыть корзину">
      <div className={styles.iconContainer}>
        <ShoppingCart size={20} />
        {itemCount > 0 && <span className={styles.badge}>{itemCount > 99 ? "99+" : itemCount}</span>}
      </div>
    </button>
  )
}
