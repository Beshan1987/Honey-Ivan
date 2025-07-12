"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { MobileMenu } from "./mobile-menu"
import { ThemeToggle } from "./theme-toggle"
import { CartIcon } from "./cart-icon"
import { CartModal } from "./cart-modal"
import styles from "./header.module.css"

export function Header() {
  const pathname = usePathname()
  const [isCartOpen, setIsCartOpen] = useState(false)

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.nav}>
            <Link href="/" className={styles.logo}>
              <div className={styles.logoIcon}>
                <span>🍯</span>
              </div>
              <span className={styles.logoText}>Пчаляр</span>
            </Link>

            <nav className={styles.navigation}>
              <Link href="/" className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}>
                Главная
              </Link>
              <Link
                href="/products"
                className={`${styles.navLink} ${isActive("/products") ? styles.navLinkActive : ""}`}
              >
                Продукция
              </Link>
              <Link href="/about" className={`${styles.navLink} ${isActive("/about") ? styles.navLinkActive : ""}`}>
                О нас
              </Link>
              <Link href="/contact" className={`${styles.navLink} ${isActive("/contact") ? styles.navLinkActive : ""}`}>
                Контакты
              </Link>
            </nav>

            <div className={styles.desktopActions}>
              <ThemeToggle />
              <CartIcon onClick={() => setIsCartOpen(true)} />
              <Link href="/products" className={styles.shopButton}>
                Купить сейчас
              </Link>
            </div>

            <div className={styles.mobileActions}>
              <ThemeToggle />
              <CartIcon onClick={() => setIsCartOpen(true)} />
              <MobileMenu />
            </div>
          </div>
        </div>
      </header>

      <CartModal isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
