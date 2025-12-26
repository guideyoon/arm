import type { Metadata } from 'next'
import Image from 'next/image'
import salonData from '@/data/salon.json'

export const metadata: Metadata = {
  title: '공간 안내 - 미용실 아름',
  description: '밝은 자연광과 차분한 색감의 편안한 공간을 소개합니다.',
}

export default function SpacePage() {
  const spaceImages = ['/g1.png', '/g2.png', '/g3.png', '/g4.png']

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {spaceImages.map((image, index) => (
            <div key={index} className="relative h-80 bg-light-gray">
              <Image
                src={image}
                alt={`공간 이미지 ${index + 1}`}
                fill
                className="object-cover"
                priority={index < 2}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

