'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import { Heart, Target, Users } from 'lucide-react'

export function Origin() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-16 text-[#1B3E5C]">
          {t.origin.title}
        </h2>
        <div className="grid grid-cols-1 gap-12">
          <div className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-[#1B3E5C] p-3 rounded-full mr-4">
                <Heart className="w-6 h-6 text-[#C5A17C]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1B3E5C]">
                {t.origin.subtitle1}
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-[#1B3E5C]/80">
              {t.origin.text1}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-[#1B3E5C] p-3 rounded-full mr-4">
                <Target className="w-6 h-6 text-[#C5A17C]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1B3E5C]">
                {t.origin.subtitle2}
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-[#1B3E5C]/80">
              {t.origin.text2}
            </p>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center mb-6">
              <div className="bg-[#1B3E5C] p-3 rounded-full mr-4">
                <Users className="w-6 h-6 text-[#C5A17C]" />
              </div>
              <h3 className="text-2xl font-serif text-[#1B3E5C]">
                {t.origin.subtitle3}
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-[#1B3E5C]/80">
              {t.origin.text3}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 