"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import styles from "./mobile-menu.module.css"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("menu-open")
    } else {
      document.body.classList.remove("menu-open")
    }

    return () => {
      document.body.classList.remove("menu-open")
    }
  }, [isOpen])

  useEffect(() => {
    closeMenu()
  }, [pathname])

  return (
    <>
      <button className={styles.menuButton} onClick={toggleMenu} aria-label="Открыть меню">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {isOpen && <div className={styles.overlay} onClick={closeMenu}></div>}

      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        <div className={styles.menuHeader}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>
              <span>🍯</span>
            </div>
            <span className={styles.logoText}>ПЧАЛЯР</span>
          </div>
          <button className={styles.closeButton} onClick={closeMenu} aria-label="Закрыть меню">
            <X size={24} />
          </button>
        </div>

        <nav className={styles.navigation}>
          <Link
            href="/"
            className={`${styles.navLink} ${isActive("/") ? styles.navLinkActive : ""}`}
            onClick={closeMenu}
          >
            Главная
          </Link>
          <Link
            href="/products"
            className={`${styles.navLink} ${isActive("/products") ? styles.navLinkActive : ""}`}
            onClick={closeMenu}
          >
            Продукция
          </Link>
          <Link
            href="/about"
            className={`${styles.navLink} ${isActive("/about") ? styles.navLinkActive : ""}`}
            onClick={closeMenu}
          >
            О нас
          </Link>
          <Link
            href="/contact"
            className={`${styles.navLink} ${isActive("/contact") ? styles.navLinkActive : ""}`}
            onClick={closeMenu}
          >
            Контакты
          </Link>
        </nav>

        <div className={styles.menuFooter}>
          <Link href="/products" className={styles.shopButton} onClick={closeMenu}>
            Купить сейчас
          </Link>
        </div>
      </div>
    </>
  )
}
