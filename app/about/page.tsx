import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "./page.module.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "О нас - Пчаляр | Семейная пасека с 1985 года",
  description:
    "История семейной пасеки Золотой Улей. 5+ лет опыта в пчеловодстве, 20+ ульев, экологически чистое производство мёда в Беларуси.",
  keywords:
    "о компании, пасека, пчеловодство, семейный бизнес, история компании, экологическое производство, устойчивое пчеловодство",
  openGraph: {
    title: "О нас - Золотой Улей | Семейная пасека",
    description: "Узнайте историю нашей семейной пасеки. 15+ лет опыта, 200+ ульев, экологически чистое производство.",
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
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quos commodi vel ipsam et similique ea neque unde molestiae facilis. Iusto accusamus mollitia impedit eius, eum molestias saepe quibusdam velit.
                </p>
                <p className={styles.paragraph}>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est quos commodi vel ipsam et similique ea neque unde molestiae facilis. Iusto accusamus mollitia impedit eius, eum molestias saepe quibusdam velit.
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
              <Image src="/images/keeper.jpg" alt="Пчеловод работает с ульями" width={600} height={500} />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquid laboriosam non sequi fuga hic quia. Asperiores, molestiae deserunt enim ipsum tempore rerum, quisquam quae nulla quas repellendus qui possimus!
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
