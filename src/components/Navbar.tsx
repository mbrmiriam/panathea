'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, currentLanguage, changeLanguage } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex-shrink-0 flex items-center">
            <a href="/" className="text-2xl font-serif text-[#1B3E5C]">
              Panathea
            </a>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <a href="#services" className="text-[#1B3E5C] hover:text-[#C5A17C]">
              {t.nav.services}
            </a>
            <a href="#about" className="text-[#1B3E5C] hover:text-[#C5A17C]">
              {t.nav.about}
            </a>
            <a href="#contact" className="text-[#1B3E5C] hover:text-[#C5A17C]">
              {t.nav.contact}
            </a>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => changeLanguage('es')}
                className={`px-2 py-1 rounded ${
                  currentLanguage === 'es'
                    ? 'bg-[#1B3E5C] text-white'
                    : 'text-[#1B3E5C] hover:text-[#C5A17C]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => changeLanguage('en')}
                className={`px-2 py-1 rounded ${
                  currentLanguage === 'en'
                    ? 'bg-[#1B3E5C] text-white'
                    : 'text-[#1B3E5C] hover:text-[#C5A17C]'
                }`}
              >
                EN
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-[#1B3E5C] hover:text-[#C5A17C]"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1B3E5C] text-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="block px-3 py-2 hover:bg-[#C5A17C] rounded-md"
              onClick={toggleMenu}
            >
              {t.nav.services}
            </a>
            <a
              href="#about"
              className="block px-3 py-2 hover:bg-[#C5A17C] rounded-md"
              onClick={toggleMenu}
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 hover:bg-[#C5A17C] rounded-md"
              onClick={toggleMenu}
            >
              {t.nav.contact}
            </a>
            <div className="flex items-center space-x-2 px-3 py-2">
              <button
                onClick={() => {
                  changeLanguage('es')
                  toggleMenu()
                }}
                className={`px-2 py-1 rounded ${
                  currentLanguage === 'es'
                    ? 'bg-[#C5A17C] text-white'
                    : 'text-white hover:text-[#C5A17C]'
                }`}
              >
                ES
              </button>
              <button
                onClick={() => {
                  changeLanguage('en')
                  toggleMenu()
                }}
                className={`px-2 py-1 rounded ${
                  currentLanguage === 'en'
                    ? 'bg-[#C5A17C] text-white'
                    : 'text-white hover:text-[#C5A17C]'
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 