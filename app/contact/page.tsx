"use client"
import { Phone, Mail, Send, User } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import styles from "./page.module.css"

import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Контакты - ПЧАЛЯР| Связаться с нами",
  description:
    "Контакты пасеки Золотой Улей. Телефон: +375 44 515-84-94, Email: nickel07@mail.ru, Telegram: @iv_11111. Заказ мёда и консультации.",
  keywords: "контакты, телефон, email, telegram, заказать мёд, консультация, связаться, Иван пчеловод",
  openGraph: {
    title: "Контакты - ПЧАЛЯР",
    description:
      "Свяжитесь с нами для заказа натурального мёда. Телефон, email, Telegram - выберите удобный способ связи.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ContactPage() {
  const openTelegram = () => {
    const message = "Здравствуйте, Иван! Хочу узнать больше о вашем мёде."
    const encodedMessage = encodeURIComponent(message)
    const telegramUrl = `https://t.me/iv_11111?text=${encodedMessage}`
    window.open(telegramUrl, "_blank")
  }

  const openTelegramDirect = () => {
    window.open("https://t.me/iv_11111", "_blank")
  }

  const sendEmail = () => {
    const subject = "Вопрос о мёде - ПЧАЛЯР"
    const body = `Здравствуйте, Иван!

Меня интересует ваш мёд. Хотел бы узнать подробнее о:
- Доступных сортах мёда
- Ценах и объемах
- Условиях доставки

С уважением,
[Ваше имя]`

    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)
    const mailtoUrl = `mailto:nickel07@mail.ru?subject=${encodedSubject}&body=${encodedBody}`

    // Используем window.open для лучшей совместимости
    window.open(mailtoUrl, "_self")
  }

  const sendWholesaleEmail = () => {
    const subject = "Оптовая закупка мёда - ПЧАЛЯР"
    const body = `Здравствуйте, Иван!

Интересует оптовая закупка мёда. Хотел бы узнать:
- Минимальные объемы для оптовых заказов
- Оптовые цены
- Условия доставки
- Возможные скидки

С уважением,
[Ваше имя]
[Название организации]
[Контактный телефон]`

    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(body)
    const mailtoUrl = `mailto:nickel07@mail.ru?subject=${encodedSubject}&body=${encodedBody}`

    window.open(mailtoUrl, "_self")
  }

  return (
    <div className={styles.page}>
      <Header />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.header}>
            <span className="badge">Свяжитесь с нами</span>
            <h1 className={styles.title}>Контакты ПЧАЛЯРА</h1>
            <p className={styles.description}>
              Есть вопросы о нашем мёде или хотите сделать индивидуальный заказ? Мы будем рады услышать от вас.
            </p>
          </div>

          <div className={styles.contentWrapper}>
            {/* Контактная информация */}
            <div className={styles.contactsGrid}>
              <div className={styles.contactCard}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <User className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactTitle}>Контактное лицо</h3>
                    <p className={styles.contactName}>Иван</p>
                  </div>
                </div>
              </div>

              <div className={styles.contactCard}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Phone className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactTitle}>Телефон</h3>
                    <a href="tel:+375445158494" className={styles.contactLink}>
                      +375 44 515-84-94
                    </a>
                  </div>
                </div>
              </div>

              <div className={`${styles.contactCard} ${styles.emailCard}`} onClick={sendEmail}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <Mail className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactTitle}>Email</h3>
                    <p className={styles.emailLink}>nickel07@mail.ru</p>
                    <p className={styles.emailHint}>Нажмите для отправки письма</p>
                  </div>
                </div>
              </div>

              <div className={`${styles.contactCard} ${styles.telegramCard}`} onClick={openTelegramDirect}>
                <div className={styles.contactItem}>
                  <div className={styles.telegramIcon}>
                    <Send className={styles.icon} />
                  </div>
                  <div className={styles.contactInfo}>
                    <h3 className={styles.contactTitle}>Telegram</h3>
                    <p className={styles.telegramLink}>@iv_11111</p>
                    <p className={styles.telegramHint}>Нажмите для перехода</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Быстрые действия */}
            <div className={styles.quickActionsSection}>
              <div className={styles.quickActionsHeader}>
                <h2 className={styles.quickActionsTitle}>Быстрая связь с Иваном</h2>
                <p className={styles.quickActionsDescription}>
                  Выберите удобный способ связи. Мы отвечаем быстро и с удовольствием!
                </p>
              </div>

              <div className={styles.quickActionsGrid}>
                <div className={styles.quickActionCard}>
                  <div className={styles.quickActionIcon}>
                    <Send className={styles.quickActionIconSvg} />
                  </div>
                  <h3 className={styles.quickActionTitle}>Telegram</h3>
                  <p className={styles.quickActionDescription}>
                    Самый быстрый способ связи. Ответ в течение 5-10 минут!
                  </p>
                  <button onClick={openTelegram} className={styles.quickActionButton}>
                    <Send className={styles.buttonIcon} />
                    Написать в Telegram
                  </button>
                </div>

                <div className={styles.quickActionCard}>
                  <div className={styles.quickActionIcon}>
                    <Mail className={styles.quickActionIconSvg} />
                  </div>
                  <h3 className={styles.quickActionTitle}>Email</h3>
                  <p className={styles.quickActionDescription}>
                    Подробное письмо с вопросами. Ответ в течение 24 часов.
                  </p>
                  <button onClick={sendEmail} className={styles.quickActionButton}>
                    <Mail className={styles.buttonIcon} />
                    Отправить Email
                  </button>
                </div>
              </div>
            </div>

            {/* Информационные карточки */}
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Посетите нашу пасеку</h3>
                <p className={styles.infoDescription}>
                  Приглашаем вас посетить нашу пасеку и увидеть процесс производства мёда своими глазами. Экскурсии
                  проводятся по предварительной записи.
                </p>
                <button
                  onClick={() => {
                    const message = "Здравствуйте, Иван! Хочу записаться на экскурсию по пасеке. Когда это возможно?"
                    const encodedMessage = encodeURIComponent(message)
                    const telegramUrl = `https://t.me/iv_11111?text=${encodedMessage}`
                    window.open(telegramUrl, "_blank")
                  }}
                  className={styles.infoButton}
                >
                  Записаться на экскурсию
                </button>
              </div>

              <div className={styles.infoCard}>
                <h3 className={styles.infoTitle}>Оптовые заказы</h3>
                <p className={styles.infoDescription}>
                  Предлагаем специальные условия для оптовых покупателей, ресторанов и магазинов. Свяжитесь с нами для
                  обсуждения индивидуальных условий.
                </p>
                <button onClick={sendWholesaleEmail} className={styles.infoButton}>
                  Узнать об оптовых ценах
                </button>
              </div>
            </div>

            {/* Альтернативные способы связи */}
            <div className={styles.alternativeSection}>
              <div className={styles.alternativeHeader}>
                <h3 className={styles.alternativeTitle}>Альтернативные способы связи</h3>
                <p className={styles.alternativeDescription}>
                  Если автоматическая отправка не работает, используйте эти данные:
                </p>
              </div>

              <div className={styles.alternativeGrid}>
                <div className={styles.alternativeCard}>
                  <h4>📧 Email</h4>
                  <p className={styles.copyableText}>nickel07@mail.ru</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("nickel07@mail.ru")
                      alert("Email скопирован в буфер обмена!")
                    }}
                    className={styles.copyButton}
                  >
                    Скопировать
                  </button>
                </div>

                <div className={styles.alternativeCard}>
                  <h4>📱 Telegram</h4>
                  <p className={styles.copyableText}>@iv_11111</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("@iv_11111")
                      alert("Telegram скопирован в буфер обмена!")
                    }}
                    className={styles.copyButton}
                  >
                    Скопировать
                  </button>
                </div>

                <div className={styles.alternativeCard}>
                  <h4>📞 Телефон</h4>
                  <p className={styles.copyableText}>+375 44 515-84-94</p>
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText("+375445158494")
                      alert("Телефон скопирован в буфер обмена!")
                    }}
                    className={styles.copyButton}
                  >
                    Скопировать
                  </button>
                </div>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className={styles.responseTimeSection}>
              <div className={styles.responseTimeCard}>
                <h3 className={styles.responseTimeTitle}>Время ответа</h3>
                <div className={styles.responseTimeGrid}>
                  <div className={styles.responseTimeItem}>
                    <strong className={styles.responseTimeTelegram}>Telegram:</strong> в течение 5-10 минут
                  </div>
                  <div className={styles.responseTimeItem}>
                    <strong className={styles.responseTimePhone}>Телефон:</strong> в рабочее время
                  </div>
                  <div className={styles.responseTimeItem}>
                    <strong className={styles.responseTimeEmail}>Email:</strong> в течение 24 часов
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
