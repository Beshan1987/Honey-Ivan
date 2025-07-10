import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "./page.module.css"

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className="badge">Наша история</span>
            <h1 className={styles.title}>О компании Золотой Улей</h1>
            <p className={styles.description}>
              Узнайте больше о нашей семейной традиции пчеловодства и приверженности качеству.
            </p>
          </div>

          <div className={`${styles.mainGrid} lg-grid-cols-2`}>
            <div className={styles.content}>
              <div className={styles.textSection}>
                <h2 className={styles.mainTitle}>Три поколения мастерства пчеловодства</h2>
                <p className={styles.paragraph}>
                  Основанная в 1985 году, компания "Золотой Улей" является семейным бизнесом, посвящённым производству
                  мёда высочайшего качества. Наши устойчивые методы пчеловодства гарантируют, что каждая банка содержит
                  чистый, нефильтрованный мёд, который передаёт суть природы.
                </p>
                <p className={styles.paragraph}>
                  Мы тесно сотрудничаем с местными фермерами и поддерживаем более 200 ульев на нетронутых лугах и полях
                  с дикими цветами, обеспечивая нашим пчёлам доступ к лучшим источникам нектара.
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>200+</div>
                  <div className={styles.statLabel}>Активных ульев</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>15+</div>
                  <div className={styles.statLabel}>Сортов мёда</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Органический процесс</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>500+</div>
                  <div className={styles.statLabel}>Довольных клиентов</div>
                </div>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image src="/images/beekeeper.jpg" alt="Пчеловод работает с ульями" width={600} height={500} />
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
                  Каждая банка мёда проходит строгий контроль качества, чтобы гарантировать чистоту и натуральность
                  продукта.
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
