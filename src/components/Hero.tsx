'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import { Button } from '@/components/ui/button'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background with texture */}
      <div 
        className="absolute inset-0 bg-[#1B3E5C]"
        style={{
          backgroundImage: `
            linear-gradient(to bottom right, rgba(27, 62, 92, 0.97), rgba(27, 62, 92, 0.98)),
            url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")
          `,
          backgroundSize: '30px 30px'
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-center space-y-8 pt-32 px-4">
        <h1 className="text-5xl md:text-6xl font-serif text-white">
          {t.hero.title}
        </h1>
        <p className="text-xl md:text-2xl text-white/90 leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div>
          <Button 
            asChild
            className="bg-[#C5A17C] hover:bg-[#C5A17C]/90 text-white text-lg px-8 py-6 font-serif"
          >
            <a href="#contact">{t.hero.cta}</a>
          </Button>
        </div>
      </div>
    </section>
  )
} 