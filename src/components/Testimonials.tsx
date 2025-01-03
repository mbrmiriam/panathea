'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import { Quote } from 'lucide-react'

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    t.testimonials.testimonial1,
    t.testimonials.testimonial2,
  ]

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-secondary">
          {t.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white text-foreground p-8 rounded-lg shadow-2xl relative transform hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-secondary rounded-full p-4">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="mt-8 mb-4 text-lg">
                {testimonial.text}
              </p>
              <p className="text-secondary font-serif text-xl">
                {testimonial.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 