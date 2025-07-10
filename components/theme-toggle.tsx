"use client"

import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import styles from "./theme-toggle.module.css"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    // Проверяем сохраненную тему или системные настройки
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    const initialTheme = savedTheme || systemTheme

    setTheme(initialTheme)
    document.documentElement.setAttribute("data-theme", initialTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  return (
    <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Переключить тему">
      {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
    </button>
  )
}
