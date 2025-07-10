import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "./page.module.css"

export default function ProcessPage() {
  const processSteps = [
    {
      step: 1,
      title: "Выбор места для пасеки",
      description:
        "Мы тщательно выбираем экологически чистые места для размещения ульев, вдали от промышленных зон и дорог.",
      icon: "🗺️",
    },
    {
      step: 2,
      title: "Уход за пчёлами",
      description:
        "Наши опытные пчеловоды регулярно осматривают ульи, следят за здоровьем пчёл и создают оптимальные условия.",
      icon: "🐝",
    },
    {
      step: 3,
      title: "Сбор мёда",
      description:
        "Мёд собирается только в период максимальной зрелости, когда он достигает оптимальной влажности и вкуса.",
      icon: "🍯",
    },
    {
      step: 4,
      title: "Фильтрация",
      description: "Мы используем щадящие методы фильтрации, сохраняя все полезные свойства и натуральный состав мёда.",
      icon: "⚗️",
    },
    {
      step: 5,
      title: "Контроль качества",
      description: "Каждая партия мёда проходит строгий контроль качества в сертифицированной лаборатории.",
      icon: "🔬",
    },
    {
      step: 6,
      title: "Упаковка и доставка",
      description:
        "Мёд упаковывается в экологичную тару и доставляется покупателям с сохранением всех полезных свойств.",
      icon: "📦",
    },
  ]

  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className="badge">Наш процесс</span>
            <h1 className={styles.title}>От улья до вашего стола</h1>
            <p className={styles.description}>
              Узнайте, как мы создаём наш премиальный мёд, следуя традиционным методам и современным стандартам
              качества.
            </p>
          </div>

          {/* Hero изображение */}
          <div className={styles.heroImage}>
            <Image src="/images/beekeeper.jpg" alt="Процесс производства мёда" width={800} height={400} />
          </div>

          {/* Этапы процесса */}
          <div className={styles.processSection}>
            <div className={styles.processHeader}>
              <h2 className={styles.processTitle}>Этапы производства</h2>
              <p className={styles.processDescription}>
                Каждый этап нашего производства тщательно контролируется для обеспечения высочайшего качества продукта.
              </p>
            </div>

            <div className={styles.processSteps}>
              {processSteps.map((step, index) => (
                <div key={step.step} className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.step}</div>
                  <div className={styles.stepIcon}>{step.icon}</div>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDescription}>{step.description}</p>
                  </div>
                  {index < processSteps.length - 1 && <div className={styles.stepConnector}></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Качество и стандарты */}
          <div className={styles.qualitySection}>
            <div className={`${styles.qualityGrid} lg-grid-cols-2`}>
              <div className={styles.qualityContent}>
                <span className="badge">Качество</span>
                <h2 className={styles.qualityTitle}>Стандарты качества</h2>
                <p className={styles.qualityDescription}>
                  Мы придерживаемся самых высоких стандартов качества на каждом этапе производства. Наш мёд проходит
                  многоступенчатую проверку и соответствует всем российским и международным стандартам.
                </p>

                <div className={styles.qualityFeatures}>
                  <div className={styles.qualityFeature}>
                    <div className={styles.featureIcon}>✅</div>
                    <div>
                      <h4>Лабораторные анализы</h4>
                      <p>Каждая партия проверяется в аккредитованной лаборатории</p>
                    </div>
                  </div>

                  <div className={styles.qualityFeature}>
                    <div className={styles.featureIcon}>🌡️</div>
                    <div>
                      <h4>Температурный контроль</h4>
                      <p>Соблюдение температурного режима на всех этапах</p>
                    </div>
                  </div>

                  <div className={styles.qualityFeature}>
                    <div className={styles.featureIcon}>📋</div>
                    <div>
                      <h4>Документооборот</h4>
                      <p>Полная прослеживаемость от улья до потребителя</p>
                    </div>
                  </div>

                  <div className={styles.qualityFeature}>
                    <div className={styles.featureIcon}>🏆</div>
                    <div>
                      <h4>Сертификация</h4>
                      <p>Соответствие ГОСТ и международным стандартам</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.qualityImage}>
                <Image src="/images/honeycomb.jpg" alt="Контроль качества мёда" width={500} height={400} />
              </div>
            </div>
          </div>

          {/* Традиции и инновации */}
          <div className={styles.traditionSection}>
            <div className={styles.traditionHeader}>
              <span className="badge">Традиции и инновации</span>
              <h2 className={styles.traditionTitle}>Сочетание опыта и современных технологий</h2>
            </div>

            <div className={`${styles.traditionGrid} md-grid-cols-2`}>
              <div className={styles.traditionCard}>
                <div className={styles.traditionIcon}>🏛️</div>
                <h3>Традиционные методы</h3>
                <ul className={styles.traditionList}>
                  <li>Семейные рецепты, передаваемые из поколения в поколение</li>
                  <li>Естественные методы ухода за пчёлами</li>
                  <li>Сбор мёда в оптимальное время</li>
                  <li>Минимальная обработка для сохранения свойств</li>
                </ul>
              </div>

              <div className={styles.traditionCard}>
                <div className={styles.traditionIcon}>🔬</div>
                <h3>Современные технологии</h3>
                <ul className={styles.traditionList}>
                  <li>Лабораторный контроль качества</li>
                  <li>Современное оборудование для фильтрации</li>
                  <li>Автоматизированная система упаковки</li>
                  <li>Цифровой мониторинг условий хранения</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
