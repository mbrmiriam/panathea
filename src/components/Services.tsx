'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import { Clock, Users, Heart, Cog, Lightbulb, UserPlus } from 'lucide-react'

export function Services() {
  const { t } = useLanguage()

  const services = [
    { icon: Clock, ...t.services.service1 },
    { icon: Users, ...t.services.service2 },
    { icon: Heart, ...t.services.service3 },
    { icon: Cog, ...t.services.service4 },
    { icon: Lightbulb, ...t.services.service5 },
    { icon: UserPlus, ...t.services.service6 },
  ]

  return (
    <section id="services" className="py-28 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-serif text-center mb-20 text-[#1B3E5C]">
          {t.services.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-[#1B3E5C] p-10 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.1)] text-center"
              >
                <div className="bg-[#C5A17C] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-8 h-8 text-[#1B3E5C]" />
                </div>
                <h3 className="text-2xl font-serif mb-6 text-[#C5A17C]">
                  {service.title}
                </h3>
                <p className="text-lg text-white/90 leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 