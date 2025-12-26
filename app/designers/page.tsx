import type { Metadata } from 'next'
import salonData from '@/data/salon.json'

export const metadata: Metadata = {
  title: '디자이너 소개 - 미용실 아름',
  description: '경험과 전문성을 갖춘 디자이너들을 소개합니다.',
}

export default function DesignersPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-medium text-charcoal text-center mb-16">
          디자이너 소개
        </h1>

        <div className="space-y-20">
          {salonData.designers.map((designer, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              <div className="relative h-96 bg-light-gray">
                {/* Placeholder for designer image */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-beige/20 to-champagne/20" />
              </div>
              <div>
                <h2 className="text-3xl font-medium text-charcoal mb-2">
                  {designer.name}
                </h2>
                <p className="text-dark-gray mb-4">
                  {designer.position} · 경력 {designer.experience}
                </p>
                <p className="text-dark-gray leading-relaxed">
                  {designer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

