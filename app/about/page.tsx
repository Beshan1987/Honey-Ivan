import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "./page.module.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "О нас - Пчаляр | Семейная пасека",
  description:
    "История семейной пасеки. 5+ лет опыта в пчеловодстве, 20+ ульев, экологически чистое производство мёда в Беларуси.",
  keywords:
    "о компании, пасека, пчеловодство, семейный бизнес",
  openGraph: {
    title: "О нас - Пчаляр",
    description: "Узнайте историю нашей семейной пасеки. 5+ лет опыта, 20+ ульев, экологически чистое.",
    type: "website",
    images: [
      {
        url: "/images/beekeeper.jpg",
        width: 1200,
        height: 630,
        alt: "Пчеловод за работой - ПЧАЛЯР",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className="badge">Наша история</span>
            <h1 className={styles.title}>ПЧАЛЯР</h1>
            <p className={styles.description}>
              Узнайте больше о нашей семейной традиции пчеловодства и приверженности качеству.
            </p>
          </div>

          <div className={`${styles.mainGrid} lg-grid-cols-2`}>
            <div className={styles.content}>
              <div className={styles.textSection}>
                <h2 className={styles.mainTitle}>От хобби к образу жизни</h2>
                <p className={styles.paragraph}>
                  Это не просто хобби, а настоящее страстное увлечение, которое помогает мне быть ближе к природе, развивать терпение и получать самые вкусные медовые моменты. Приглашаю вас присоединиться к моему пути и открыть для себя удивительный мир пчел и натурального меда!
                </p>
                <p className={styles.paragraph}>

                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>20+</div>
                  <div className={styles.statLabel}>Активных ульев</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>5+</div>
                  <div className={styles.statLabel}>Сортов мёда</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Органический процесс</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <div className={styles.statLabel}>Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image src="/images/about.jpeg" alt="Пчеловод работает с ульями" width={600} height={500} layout="responsive" />
              <Image src="/images/about1.jpeg" alt="Пчеловод работает с ульями" width={600} height={500} layout="responsive" />
            </div>
          </div>

          {/* Наши ценности */}
          <div className={styles.valuesSection}>
            <div className={styles.valuesHeader}>
              <span className="badge">Наши ценности</span>
              <h2 className={styles.valuesTitle}>Что нами движет</h2>
              <p className={styles.valuesDescription}>
                Наша миссия основана на простых, но важных принципах, которые направляют каждое наше решение.
              </p>
            </div>

            <div className={`${styles.valuesGrid} md-grid-cols-3`}>
              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <span>🌱</span>
                </div>
                <h3 className={styles.valueTitle}>Экологичность</h3>
                <p className={styles.valueDescription}>
                  Мы используем только устойчивые методы пчеловодства, которые защищают окружающую среду и поддерживают
                  здоровье пчёл.
                </p>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <span>✨</span>
                </div>
                <h3 className={styles.valueTitle}>Качество</h3>
                <p className={styles.valueDescription}>
                  это натуральный продукт высочайшего качества, созданный с любовью и заботой о природе. Мы используем только проверенные методы пчеловодства, избегая химических добавок и консервантов, чтобы сохранить все полезные свойства меда
                </p>
              </div>

              <div className={styles.valueItem}>
                <div className={styles.valueIcon}>
                  <span>❤️</span>
                </div>
                <h3 className={styles.valueTitle}>Семейные традиции</h3>
                <p className={styles.valueDescription}>
                  Наши рецепты и методы передаются из поколения в поколение, сохраняя аутентичность и качество.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
