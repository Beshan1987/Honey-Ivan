"use client"

import { useState } from "react"
import { X, Plus, Minus, Send, MapPin, MessageSquare, Truck, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { useCart } from "@/contexts/cart-context"
import styles from "./cart-modal.module.css"

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
}

export function CartModal({ isOpen, onClose }: CartModalProps) {
  const { items, total, updateQuantity, removeItem, clearCart } = useCart()
  const [isLoading, setIsLoading] = useState(false)
  const [orderSent, setOrderSent] = useState(false)
  const [deliveryAddress, setDeliveryAddress] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [addressError, setAddressError] = useState("")
  const [nameError, setNameError] = useState("")
  const [phoneError, setPhoneError] = useState("")
  const [orderMethod, setOrderMethod] = useState<"telegram" | "direct">("telegram")

  // Подсчитываем общий объем в литрах
  const totalLiters = items.reduce((sum, item) => sum + item.quantity, 0)
  const isFreeDelivery = totalLiters >= 2

  const validateForm = (method: "telegram" | "direct") => {
    let isValid = true

    if (!deliveryAddress.trim()) {
      setAddressError("Пожалуйста, укажите адрес доставки")
      isValid = false
    } else {
      setAddressError("")
    }

    if (method === "direct") {
      if (!customerName.trim()) {
        setNameError("Пожалуйста, укажите ваше имя")
        isValid = false
      } else {
        setNameError("")
      }

      if (!customerPhone.trim()) {
        setPhoneError("Пожалуйста, укажите номер телефона")
        isValid = false
      } else {
        setPhoneError("")
      }
    }

    return isValid
  }

  const sendToTelegram = async () => {
    if (items.length === 0) return

    if (!validateForm("telegram")) return

    setIsLoading(true)

    // Подсчитываем стоимость доставки
    const deliveryCost = isFreeDelivery ? 0 : 10
    const finalTotal = total + deliveryCost

    // Формируем сообщение для отправки
    const orderText =
      `🍯 НОВЫЙ ЗАКАЗ МЁДА\n\n` +
      `👤 Контактное лицо: Иван\n\n` +
      `📋 Список товаров:\n` +
      items
        .map(
          (item) =>
            `• ${item.name}\n  Количество: ${item.quantity} шт.\n  Цена: ${item.price} BYN\n  Сумма: ${item.price * item.quantity} BYN\n`,
        )
        .join("\n") +
      `\n📊 ИТОГО:\n` +
      `💰 Сумма товаров: ${total.toFixed(0)} BYN\n` +
      `📦 Общий объем: ${totalLiters} литр${totalLiters === 1 ? "" : totalLiters < 5 ? "а" : "ов"}\n` +
      `🚚 Доставка: ${isFreeDelivery ? "БЕСПЛАТНО (0 BYN)" : "10 BYN"}\n` +
      `💳 ИТОГО К ОПЛАТЕ: ${finalTotal.toFixed(0)} BYN\n\n` +
      `📍 АДРЕС ДОСТАВКИ:\n${deliveryAddress}\n\n` +
      (additionalInfo.trim() ? `📝 ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ:\n${additionalInfo}\n\n` : "") +
      `📅 Дата заказа: ${new Date().toLocaleString("ru-RU")}`

    // Кодируем сообщение для URL
    const encodedMessage = encodeURIComponent(orderText)

    // Создаем ссылку для Telegram
    const telegramUrl = `https://t.me/iv_11111?text=${encodedMessage}`

    // Открываем Telegram
    window.open(telegramUrl, "_blank")

    // Показываем сообщение об успехе и очищаем корзину
    setOrderSent(true)
    clearCart()
    setDeliveryAddress("")
    setAdditionalInfo("")
    setIsLoading(false)

    setTimeout(() => {
      setOrderSent(false)
      onClose()
    }, 3000)
  }

  const sendDirectOrder = async () => {
    if (items.length === 0) return

    if (!validateForm("direct")) return

    setIsLoading(true)

    // Подсчитываем стоимость доставки
    const deliveryCost = isFreeDelivery ? 0 : 10
    const finalTotal = total + deliveryCost

    // Формируем сообщение для email
    const orderText =
      `🍯 НОВЫЙ ЗАКАЗ МЁДА (БЕЗ TELEGRAM)\n\n` +
      `👤 ДАННЫЕ КЛИЕНТА:\n` +
      `Имя: ${customerName}\n` +
      `Телефон: ${customerPhone}\n\n` +
      `📋 Список товаров:\n` +
      items
        .map(
          (item) =>
            `• ${item.name}\n  Количество: ${item.quantity} шт.\n  Цена: ${item.price} BYN\n  Сумма: ${item.price * item.quantity} BYN\n`,
        )
        .join("\n") +
      `\n📊 ИТОГО:\n` +
      `💰 Сумма товаров: ${total.toFixed(0)} BYN\n` +
      `📦 Общий объем: ${totalLiters} литр${totalLiters === 1 ? "" : totalLiters < 5 ? "а" : "ов"}\n` +
      `🚚 Доставка: ${isFreeDelivery ? "БЕСПЛАТНО (0 BYN)" : "10 BYN"}\n` +
      `💳 ИТОГО К ОПЛАТЕ: ${finalTotal.toFixed(0)} BYN\n\n` +
      `📍 АДРЕС ДОСТАВКИ:\n${deliveryAddress}\n\n` +
      (additionalInfo.trim() ? `📝 ДОПОЛНИТЕЛЬНАЯ ИНФОРМАЦИЯ:\n${additionalInfo}\n\n` : "") +
      `📅 Дата заказа: ${new Date().toLocaleString("ru-RU")}\n\n` +
      `⚠️ ВНИМАНИЕ: Клиент НЕ использует Telegram. Свяжитесь с ним по телефону: ${customerPhone}`

    // Отправляем через email
    const subject = `🍯 Новый заказ мёда от ${customerName}`
    const encodedSubject = encodeURIComponent(subject)
    const encodedBody = encodeURIComponent(orderText)
    const mailtoUrl = `mailto:nickel07@mail.ru?subject=${encodedSubject}&body=${encodedBody}`

    // Открываем почтовый клиент
    window.open(mailtoUrl, "_self")

    // Показываем сообщение об успехе и очищаем корзину
    setOrderSent(true)
    clearCart()
    setDeliveryAddress("")
    setAdditionalInfo("")
    setCustomerName("")
    setCustomerPhone("")
    setIsLoading(false)

    setTimeout(() => {
      setOrderSent(false)
      onClose()
    }, 3000)
  }

  const handleClose = () => {
    setAddressError("")
    setNameError("")
    setPhoneError("")
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h2 className={styles.title}>Корзина</h2>
          <button className={styles.closeButton} onClick={handleClose}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          {orderSent ? (
            <div className={styles.successMessage}>
              <div className={styles.successIcon}>✅</div>
              <h3>{orderMethod === "telegram" ? "Переход в Telegram!" : "Заказ отправлен!"}</h3>
              <p>
                {orderMethod === "telegram"
                  ? "Telegram должен открыться с готовым сообщением. Отправьте его для оформления заказа."
                  : "Ваш заказ отправлен Ивану по email. Он свяжется с вами в ближайшее время по указанному телефону."}
              </p>
            </div>
          ) : items.length === 0 ? (
            <div className={styles.emptyCart}>
              <div className={styles.emptyIcon}>🛒</div>
              <h3>Корзина пуста</h3>
              <p>Добавьте товары в корзину, чтобы оформить заказ</p>
            </div>
          ) : (
            <>
              <div className={styles.itemsList}>
                {items.map((item) => (

                  <div key={item.id} className={styles.cartItem}>

                    <div className={styles.itemImage}>
                      <Image src={item.image || "/placeholder.svg"} alt={item.name} width={60} height={60} />
                    </div>


                    <div className={styles.itemDetails}>
                      <h4 className={styles.itemName}>{item.name}</h4>
                      <p className={styles.itemPrice}>{item.price} BYN</p>
                      <button className={styles.removeButton} onClick={() => removeItem(item.id)}>
                        <span>удалить</span><X size={16} />
                      </button>
                    </div>

                    <div className={styles.quantityControls}>
                      <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </button>
                      <span className={styles.quantity}>{item.quantity}</span>
                      <button
                        className={styles.quantityButton}
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <div className={styles.itemTotal}>{(item.price * item.quantity).toFixed(0)} BYN</div>
                  </div>
                ))}
              </div>

              {/* Информация о доставке */}
              <div className={styles.deliveryInfo}>
                <div className={styles.deliveryHeader}>
                  <Truck className={styles.deliveryIcon} />
                  <h3 className={styles.deliveryTitle}>Информация о доставке</h3>
                </div>
                <div className={styles.deliveryDetails}>
                  <div className={styles.deliveryItem}>
                    <span className={styles.deliveryLabel}>Общий объем:</span>
                    <span className={styles.deliveryValue}>
                      {totalLiters} литр{totalLiters === 1 ? "" : totalLiters < 5 ? "а" : "ов"}
                    </span>
                  </div>
                  <div className={styles.deliveryItem}>
                    <span className={styles.deliveryLabel}>Стоимость доставки:</span>
                    <span
                      className={`${styles.deliveryValue} ${isFreeDelivery ? styles.freeDelivery : styles.paidDelivery}`}
                    >
                      {isFreeDelivery ? "БЕСПЛАТНО" : "10 BYN"}
                    </span>
                  </div>
                  {!isFreeDelivery && (
                    <div className={styles.deliveryNote}>💡 Бесплатная доставка при заказе от 2 литров мёда</div>
                  )}
                </div>
              </div>

              {/* Выбор способа заказа */}
              <div className={styles.orderMethodSection}>
                <h3 className={styles.orderMethodTitle}>Способ оформления заказа</h3>
                <div className={styles.orderMethodButtons}>
                  <button
                    className={`${styles.methodButton} ${orderMethod === "telegram" ? styles.methodButtonActive : ""}`}
                    onClick={() => setOrderMethod("telegram")}
                  >
                    <Send className={styles.methodIcon} />
                    <div>
                      <div className={styles.methodTitle}>Через Telegram</div>
                      <div className={styles.methodDescription}>Быстро и удобно</div>
                    </div>
                  </button>
                  <button
                    className={`${styles.methodButton} ${orderMethod === "direct" ? styles.methodButtonActive : ""}`}
                    onClick={() => setOrderMethod("direct")}
                  >
                    <Phone className={styles.methodIcon} />
                    <div>
                      <div className={styles.methodTitle}>Без Telegram</div>
                      <div className={styles.methodDescription}>Иван свяжется с вами</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Форма для заказа без Telegram */}
              {orderMethod === "direct" && (
                <div className={styles.customerForm}>
                  <h4 className={styles.customerFormTitle}>Ваши контактные данные</h4>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        <MapPin className={styles.labelIcon} />
                        Ваше имя *
                      </label>
                      <input
                        type="text"
                        className={`${styles.formInput} ${nameError ? styles.formError : ""}`}
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value)
                          if (nameError) setNameError("")
                        }}
                        placeholder="Как к вам обращаться?"
                      />
                      {nameError && <span className={styles.errorMessage}>{nameError}</span>}
                    </div>

                    <div className={styles.formGroup}>
                      <label className={styles.formLabel}>
                        <Phone className={styles.labelIcon} />
                        Номер телефона *
                      </label>
                      <input
                        type="tel"
                        className={`${styles.formInput} ${phoneError ? styles.formError : ""}`}
                        value={customerPhone}
                        onChange={(e) => {
                          setCustomerPhone(e.target.value)
                          if (phoneError) setPhoneError("")
                        }}
                        placeholder="+375 XX XXX-XX-XX"
                      />
                      {phoneError && <span className={styles.errorMessage}>{phoneError}</span>}
                    </div>
                  </div>
                </div>
              )}

              {/* Форма доставки */}
              <div className={styles.deliveryForm}>
                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    <MapPin className={styles.labelIcon} />
                    Адрес доставки *
                  </label>
                  <textarea
                    className={`${styles.formTextarea} ${addressError ? styles.formError : ""}`}
                    value={deliveryAddress}
                    onChange={(e) => {
                      setDeliveryAddress(e.target.value)
                      if (addressError) setAddressError("")
                    }}
                    placeholder="Укажите полный адрес доставки: город, улица, дом, квартира..."
                    rows={3}
                  />
                  {addressError && <span className={styles.errorMessage}>{addressError}</span>}
                </div>

                <div className={styles.formGroup}>
                  <label className={styles.formLabel}>
                    <MessageSquare className={styles.labelIcon} />
                    Дополнительная информация
                  </label>
                  <textarea
                    className={styles.formTextarea}
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder="Время доставки, особые пожелания, комментарии к заказу..."
                    rows={3}
                  />
                </div>
              </div>

              <div className={styles.footer}>
                <div className={styles.total}>
                  <div className={styles.totalRow}>
                    <span className={styles.totalLabel}>Товары:</span>
                    <span className={styles.totalAmount}>{total.toFixed(0)} BYN</span>
                  </div>
                  <div className={styles.totalRow}>
                    <span className={styles.totalLabel}>Доставка:</span>
                    <span className={`${styles.totalAmount} ${isFreeDelivery ? styles.freeDelivery : ""}`}>
                      {isFreeDelivery ? "Бесплатно" : "10 BYN"}
                    </span>
                  </div>
                  <div className={styles.totalRowFinal}>
                    <span className={styles.totalLabelFinal}>Итого:</span>
                    <span className={styles.totalAmountFinal}>
                      {(total + (isFreeDelivery ? 0 : 10)).toFixed(0)} BYN
                    </span>
                  </div>
                </div>

                <div className={styles.actions}>
                  <button className={styles.clearButton} onClick={clearCart}>
                    Очистить корзину
                  </button>

                  {orderMethod === "telegram" ? (
                    <button
                      className={styles.orderButton}
                      onClick={sendToTelegram}
                      disabled={isLoading || !deliveryAddress.trim()}
                    >
                      <Send size={16} />
                      {isLoading ? "Отправка..." : "Написать в Telegram"}
                    </button>
                  ) : (
                    <button
                      className={styles.orderButton}
                      onClick={sendDirectOrder}
                      disabled={isLoading || !deliveryAddress.trim() || !customerName.trim() || !customerPhone.trim()}
                    >
                      <Mail size={16} />
                      {isLoading ? "Отправка..." : "Оформить заказ"}
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
