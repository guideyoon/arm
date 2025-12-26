import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: '예약 및 문의 - 미용실 아름',
  description: '시술 예약 및 상담 문의를 남겨주세요.',
}

export default function ContactPage() {
  return (
    <div className="pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-medium text-charcoal text-center mb-4">
          예약 및 문의
        </h1>
        <p className="text-dark-gray text-center mb-12">
          예약 우선제로 운영되며, 방문 전 예약을 권장드립니다.
        </p>

        <ContactForm />
      </div>
    </div>
  )
}

