import Link from "next/link"
import styles from "./footer.module.css"

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.logoSection}>
            <div className={styles.logo}>
              <div className={styles.logoIcon}>
                <span>🍯</span>
              </div>
              <span className={styles.logoText}>Золотой Улей</span>
            </div>
            <p className={styles.description}>
              Премиальные медовые продукты от нашей семьи к вашей. Чистый, натуральный и экологически чистый мёд в
              удобной литровой упаковке.
            </p>
          </div>

          <div className={styles.section}>
            <h4>Продукция</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/products">Цветочный мёд</Link>
              </li>
              <li>
                <Link href="/products">Мёд Манука</Link>
              </li>
              <li>
                <Link href="/products">Медовые соты</Link>
              </li>
              <li>
                <Link href="/products">Липовый мёд</Link>
              </li>
            </ul>
          </div>

          <div className={styles.section}>
            <h4>ПЧАЛЯР</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about">О нас</Link>
              </li>
              <li>
                <Link href="/process">Наш процесс</Link>
              </li>
              <li>
                <Link href="/contact">Контакты</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} ПЧАЛЯР. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
