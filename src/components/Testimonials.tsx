'use client'

import { useLanguage } from '@/lib/contexts/LanguageContext'
import { Quote } from 'lucide-react'

export function Testimonials() {
  const { t } = useLanguage()

  const testimonials = [
    t.testimonials.testimonial1,
    t.testimonials.testimonial2,
    t.testimonials.testimonial3,
    t.testimonials.testimonial4,
  ]

  return (
    <section className="py-24 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-secondary">
          {t.testimonials.title}
        </h2>
        <div className="grid grid-cols-1 gap-12 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white text-foreground p-10 rounded-lg shadow-2xl relative transform hover:scale-[1.01] transition-transform duration-300"
            >
              <div className="absolute top-0 left-8 transform -translate-y-1/2">
                <div className="bg-secondary rounded-full p-4">
                  <Quote className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="mt-6 mb-6 text-lg leading-relaxed whitespace-pre-line">
                {testimonial.text}
              </p>
              <p className="text-secondary font-serif text-xl">
                {testimonial.author}
              </p>
              {index === 1 && !testimonial.text.endsWith('.') && (
                <div className="absolute bottom-0 right-8 transform translate-y-1/2 text-secondary text-3xl">
                  ···
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 