import type { Metadata } from 'next'
import salonData from '@/data/salon.json'

export const metadata: Metadata = {
  title: '공간 안내 - 미용실 아름',
  description: '밝은 자연광과 차분한 색감의 편안한 공간을 소개합니다.',
}

export default function SpacePage() {
  const spaceFeatures = [
    '밝은 자연광',
    '차분한 색감',
    '프라이버시를 고려한 좌석 배치',
  ]

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-medium text-charcoal text-center mb-16">
          공간 안내
        </h1>

        <div className="mb-12 text-center">
          <p className="text-dark-gray text-lg leading-relaxed max-w-2xl mx-auto">
            {salonData.space.description}
          </p>
        </div>

        {/* Space Images Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="relative h-80 bg-light-gray">
              {/* Placeholder for space images */}
              <div className="absolute inset-0 bg-gradient-to-br from-rose-beige/20 to-champagne/20" />
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spaceFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <h3 className="text-xl font-medium text-charcoal mb-2">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

