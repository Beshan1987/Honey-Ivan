import type React from "react"
import type { Metadata } from "next"
import { CartProvider } from "@/contexts/cart-context"
import "./globals.css"

export const metadata: Metadata = {
  title: "Золотой Улей - Натуральный мёд",
  description: "Премиальные медовые продукты от нашей семьи к вашей. Чистый, натуральный и экологически чистый мёд.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
