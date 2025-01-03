'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import { Linkedin } from 'lucide-react'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-[#1B3E5C] py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Panathea */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-[#C5A17C]">Panathea</h3>
          <p className="text-white/90 leading-relaxed">
            {t.footer.slogan}
          </p>
        </div>

        {/* Contacto */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-[#C5A17C]">
            {t.footer.contact}
          </h3>
          <div className="space-y-4">
            <p className="text-white/90">Email: info@panathea.com</p>
            <p className="text-white/90">Teléfono: +34 670 20 47 01</p>
          </div>
        </div>

        {/* Síguenos */}
        <div className="space-y-6">
          <h3 className="text-2xl font-serif text-[#C5A17C]">
            {t.footer.followUs}
          </h3>
          <div className="flex items-center space-x-4">
            <a
              href="https://www.linkedin.com/company/panathea"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/90 hover:text-[#C5A17C] transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 