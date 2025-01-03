'use client'

import { createContext, useContext, useState } from 'react'
import { es } from '@/lib/i18n/es'
import { en } from '@/lib/i18n/en'

type Language = 'es' | 'en'
type Translations = typeof es

interface LanguageContextType {
  currentLanguage: Language
  changeLanguage: (lang: Language) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('es')

  const translations = {
    es,
    en,
  }

  const changeLanguage = (lang: Language) => {
    setCurrentLanguage(lang)
  }

  const value = {
    currentLanguage,
    changeLanguage,
    t: translations[currentLanguage],
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
} 