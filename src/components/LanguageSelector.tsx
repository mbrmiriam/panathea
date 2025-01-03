'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'

export function LanguageSelector() {
  const { currentLanguage, changeLanguage } = useLanguage()

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => changeLanguage('es')}
        className={`${
          currentLanguage === 'es'
            ? 'text-[#C5A17C] font-semibold'
            : 'text-[#1B3E5C] hover:text-[#C5A17C]'
        } transition-colors`}
      >
        ES
      </button>
      <span className="text-[#1B3E5C]">|</span>
      <button
        onClick={() => changeLanguage('en')}
        className={`${
          currentLanguage === 'en'
            ? 'text-[#C5A17C] font-semibold'
            : 'text-[#1B3E5C] hover:text-[#C5A17C]'
        } transition-colors`}
      >
        EN
      </button>
    </div>
  )
} 