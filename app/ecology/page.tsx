import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "./page.module.css"

export default function EcologyPage() {
  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className="badge">Экология</span>
            <h1 className={styles.title}>Забота о природе и пчёлах</h1>
            <p className={styles.description}>
              Мы верим, что здоровые пчёлы и чистая окружающая среда — основа качественного мёда. Узнайте о наших
              экологических инициативах.
            </p>
          </div>

          {/* Основной контент */}
          <div className={`${styles.mainGrid} lg-grid-cols-2`}>
            <div className={styles.content}>
              <div className={styles.textSection}>
                <h2 className={styles.mainTitle}>Устойчивое пчеловодство</h2>
                <p className={styles.paragraph}>
                  Наша компания придерживается принципов устойчивого развития и экологически ответственного
                  пчеловодства. Мы понимаем, что здоровье пчёл напрямую связано с состоянием окружающей среды, поэтому
                  все наши методы направлены на сохранение природного баланса.
                </p>
                <p className={styles.paragraph}>
                  Мы не используем химические пестициды и гербициды на наших пасеках, поддерживаем биоразнообразие
                  растений и создаём благоприятные условия для жизни пчёл и других полезных насекомых.
                </p>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>0</div>
                  <div className={styles.statLabel}>Химических веществ</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>50+</div>
                  <div className={styles.statLabel}>Видов растений</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100%</div>
                  <div className={styles.statLabel}>Органическое производство</div>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>25</div>
                  <div className={styles.statLabel}>Лет опыта</div>
                </div>
              </div>
            </div>

            <div className={styles.imageContainer}>
              <Image src="/images/beekeeper.jpg" alt="Экологическое пчеловодство" width={600} height={500} />
            </div>
          </div>

          {/* Наши инициативы */}
          <div className={styles.initiativesSection}>
            <div className={styles.sectionHeader}>
              <span className="badge">Наши инициативы</span>
              <h2 className={styles.sectionTitle}>Что мы делаем для экологии</h2>
              <p className={styles.sectionDescription}>
                Каждый день мы работаем над тем, чтобы наше производство было максимально экологичным и устойчивым.
              </p>
            </div>

            <div className={`${styles.initiativesGrid} md-grid-cols-2 lg-grid-cols-3`}>
              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <span>🌱</span>
                </div>
                <h3 className={styles.initiativeTitle}>Органическое земледелие</h3>
                <p className={styles.initiativeDescription}>
                  Мы сотрудничаем с фермерами, которые используют только органические методы выращивания растений без
                  химических удобрений и пестицидов.
                </p>
              </div>

              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <span>🐝</span>
                </div>
                <h3 className={styles.initiativeTitle}>Защита пчёл</h3>
                <p className={styles.initiativeDescription}>
                  Мы создаём безопасные условия для пчёл, поддерживаем их здоровье естественными методами и защищаем от
                  вредных воздействий.
                </p>
              </div>

              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <span>🌸</span>
                </div>
                <h3 className={styles.initiativeTitle}>Сохранение биоразнообразия</h3>
                <p className={styles.initiativeDescription}>
                  Мы высаживаем медоносные растения, создаём цветочные поляны и поддерживаем разнообразие флоры в
                  регионе.
                </p>
              </div>

              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <span>♻️</span>
                </div>
                <h3 className={styles.initiativeTitle}>Переработка отходов</h3>
                <p className={styles.initiativeDescription}>
                  Мы используем экологичную упаковку, перерабатываем отходы производства и минимизируем воздействие на
                  окружающую среду.
                </p>
              </div>

              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <span>🌍</span>
                </div>
                <h3 className={styles.initiativeTitle}>Углеродная нейтральность</h3>
                <p className={styles.initiativeDescription}>
                  Мы стремимся к углеродной нейтральности через использование возобновляемых источников энергии и
                  компенсацию выбросов.
                </p>
              </div>

              <div className={styles.initiativeCard}>
                <div className={styles.initiativeIcon}>
                  <span>📚</span>
                </div>
                <h3 className={styles.initiativeTitle}>Образование</h3>
                <p className={styles.initiativeDescription}>
                  Мы проводим образовательные программы о важности пчёл для экосистемы и обучаем экологическому
                  пчеловодству.
                </p>
              </div>
            </div>
          </div>

          {/* Сертификаты */}
          <div className={styles.certificatesSection}>
            <div className={styles.certificatesHeader}>
              <span className="badge">Сертификаты</span>
              <h2 className={styles.certificatesTitle}>Наши экологические сертификаты</h2>
              <p className={styles.certificatesDescription}>
                Мы гордимся признанием наших усилий по защите окружающей среды и устойчивому развитию.
              </p>
            </div>

            <div className={`${styles.certificatesGrid} md-grid-cols-3`}>
              <div className={styles.certificateCard}>
                <div className={styles.certificateIcon}>🏆</div>
                <h3>Органик сертификат</h3>
                <p>Подтверждение органического производства мёда без использования химических веществ</p>
              </div>

              <div className={styles.certificateCard}>
                <div className={styles.certificateIcon}>🌿</div>
                <h3>Эко-стандарт</h3>
                <p>Соответствие международным стандартам экологического производства и устойчивого развития</p>
              </div>

              <div className={styles.certificateCard}>
                <div className={styles.certificateIcon}>✅</div>
                <h3>Качество ГОСТ</h3>
                <p>Соответствие российским стандартам качества и безопасности пищевых продуктов</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
