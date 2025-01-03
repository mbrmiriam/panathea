'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import Image from 'next/image'

export function About() {
  const { t } = useLanguage()

  return (
    <section className="py-32 px-4 bg-[#1B3E5C]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-center mb-24 text-[#C5A17C]">
          {t.about.title}
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-[400px_1fr] gap-20 items-start max-w-6xl mx-auto">
          <div className="relative w-full max-w-sm lg:max-w-none mx-auto">
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="/ana-martinez.jpg"
                alt="Ana Inchausti"
                fill
                className="object-cover rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
            </div>
          </div>
          <div className="space-y-8">
            <p className="text-lg text-white/90 leading-relaxed">
              {t.about.description1}
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              {t.about.description2}
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              {t.about.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 