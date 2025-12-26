'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import salonData from '@/data/salon.json'

export default function Home() {
  const featuredServices = [
    salonData.services.커트[0],
    salonData.services.펌[0],
    salonData.services.염색[0],
    salonData.services.클리닉[0],
  ]

  const heroImages = ['/h1.jpg', '/h2.png', '/h3.png']
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // 5초마다 이미지 변경

    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Hero Images */}
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`히어로 이미지 ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-charcoal/30 z-10" />
        <div className="relative z-20 text-center text-white px-4">
          <h1 className="text-3xl md:text-5xl font-medium mb-4">
            {salonData.info.description}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            {salonData.info.subDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3 bg-charcoal text-white hover:bg-charcoal/90 transition-colors"
            >
              예약 문의
            </Link>
            <Link
              href="/services"
              className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 transition-colors"
            >
              시술 안내
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-4">
          {salonData.info.intro.map((text, index) => (
            <p key={index} className="text-dark-gray text-lg leading-relaxed">
              {text}
            </p>
          ))}
        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-medium text-charcoal text-center mb-12">
            시술 안내
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-medium text-charcoal mb-2">
                  {service.name}
                </h3>
                <p className="text-dark-gray text-sm mb-3">{service.description}</p>
                <p className="text-charcoal font-medium">{service.price}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-charcoal hover:underline font-medium"
            >
              전체 시술 보기 →
            </Link>
          </div>
        </div>
      </section>

      {/* Space Preview */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-medium text-charcoal mb-6">공간 안내</h2>
            <p className="text-dark-gray leading-relaxed mb-6">
              {salonData.space.description}
            </p>
            <Link
              href="/space"
              className="text-charcoal hover:underline font-medium"
            >
              자세히 보기 →
            </Link>
          </div>
          <div className="relative h-80 bg-light-gray">
            {/* Placeholder for space image */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-beige/30 to-champagne/30" />
          </div>
        </div>
      </section>

      {/* Contact & Location Summary */}
      <section className="bg-light-gray py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-6">예약 안내</h2>
              <p className="text-dark-gray mb-6">
                예약 우선제로 운영되며, 방문 전 예약을 권장드립니다.
                <br />
                시술 상담 및 예약 문의는 아래 링크를 통해 남겨주세요.
              </p>
              <Link
                href="/contact"
                className="inline-block px-6 py-3 bg-charcoal text-white hover:bg-charcoal/90 transition-colors"
              >
                예약 문의하기
              </Link>
            </div>
            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-6">오시는 길</h2>
              <p className="text-dark-gray mb-2">{salonData.info.address}</p>
              <p className="text-dark-gray mb-2">{salonData.info.transport.subway}</p>
              <p className="text-dark-gray mb-6">{salonData.info.parking}</p>
              <Link
                href="/location"
                className="text-charcoal hover:underline font-medium"
              >
                자세한 위치 보기 →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

