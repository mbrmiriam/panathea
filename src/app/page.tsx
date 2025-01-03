'use client'

import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { About } from '@/components/About'
import { Origin } from '@/components/Origin'
import { Testimonials } from '@/components/Testimonials'
import { ContactForm } from '@/components/ContactForm'

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Origin />
      <Testimonials />
      <ContactForm />
    </main>
  )
} 