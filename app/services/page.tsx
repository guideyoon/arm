import type { Metadata } from 'next'
import salonData from '@/data/salon.json'

export const metadata: Metadata = {
  title: '시술 안내 - 미용실 아름',
  description: '커트, 펌, 염색, 클리닉 등 다양한 시술 정보와 가격을 확인하세요.',
}

export default function ServicesPage() {
  const categories = Object.keys(salonData.services) as Array<keyof typeof salonData.services>

  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-medium text-charcoal text-center mb-16">
          시술 안내
        </h1>

        {categories.map((category) => (
          <section key={category} className="mb-20">
            <h2 className="text-2xl font-medium text-charcoal mb-8 border-b border-light-gray pb-4">
              {category}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {salonData.services[category].map((service, index) => (
                <div key={index} className="space-y-3">
                  <h3 className="text-xl font-medium text-charcoal">
                    {service.name}
                  </h3>
                  <p className="text-dark-gray text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <p className="text-charcoal font-medium">
                    {service.price}
                  </p>
                </div>
              ))}
            </div>
          </section>
        ))}

        <div className="mt-16 p-6 bg-light-gray border-l-4 border-charcoal">
          <p className="text-dark-gray leading-relaxed">
            모든 시술은 충분한 상담 후 진행되며,
            <br />
            모발 상태와 길이에 따라 가격은 달라질 수 있습니다.
          </p>
        </div>
      </div>
    </div>
  )
}

