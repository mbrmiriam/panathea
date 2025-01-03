'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import { useLanguage } from '@/lib/contexts/LanguageContext'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { t } = useLanguage()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    const form = event.currentTarget
    
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      
      setSubmitStatus('success')
      form.reset()
    } catch (error) {
      console.error('Error sending email:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-8 bg-[#1B3E5C]/10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-serif text-center mb-12 text-[#C5A17C]">{t.contact.title}</h2>
        
        {submitStatus === 'success' && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500 rounded-lg text-green-500 text-center">
            {t.contact.success}
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500 rounded-lg text-red-500 text-center">
            {t.contact.error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div>
            <label htmlFor="from_name" className="block text-sm font-medium mb-2 text-[#1B3E5C]">{t.contact.name}</label>
            <Input 
              type="text" 
              id="from_name" 
              name="from_name" 
              required 
              className="w-full bg-white/10 border-[#C5A17C] text-[#1B3E5C]" 
            />
          </div>
          <div>
            <label htmlFor="reply_to" className="block text-sm font-medium mb-2 text-[#1B3E5C]">{t.contact.email}</label>
            <Input 
              type="email" 
              id="reply_to" 
              name="reply_to" 
              required 
              className="w-full bg-white/10 border-[#C5A17C] text-[#1B3E5C]" 
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-[#1B3E5C]">{t.contact.phone}</label>
            <Input 
              type="tel" 
              id="phone" 
              name="phone" 
              required 
              className="w-full bg-white/10 border-[#C5A17C] text-[#1B3E5C]" 
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1B3E5C]">{t.contact.message}</label>
            <Textarea 
              id="message" 
              name="message" 
              rows={4} 
              className="w-full bg-white/10 border-[#C5A17C] text-[#1B3E5C]" 
            />
          </div>
          <div className="text-center">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-[#C5A17C] text-white hover:bg-[#C5A17C]/90 text-lg px-8 py-3 disabled:opacity-50 rounded-lg"
            >
              {isSubmitting ? t.contact.sending : t.contact.submit}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
} 