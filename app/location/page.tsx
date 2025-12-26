import type { Metadata } from 'next'
import salonData from '@/data/salon.json'

export const metadata: Metadata = {
  title: '오시는 길 - 미용실 아름',
  description: '미용실 아름 위치 및 교통편 안내',
}

export default function LocationPage() {
  return (
    <div className="pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-medium text-charcoal text-center mb-16">
          오시는 길
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map Section */}
          <div className="h-96 bg-light-gray relative">
            {/* Placeholder for map - Replace with actual map component (e.g., Kakao Map, Google Map) */}
            <div className="absolute inset-0 flex items-center justify-center text-dark-gray">
              지도 영역 (카카오맵 또는 구글맵 연동)
            </div>
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-4">주소</h2>
              <p className="text-dark-gray">{salonData.info.address}</p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-4">대중교통</h2>
              <div className="space-y-2 text-dark-gray">
                <p>{salonData.info.transport.subway}</p>
                <p>버스: {salonData.info.transport.bus}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-4">주차 안내</h2>
              <p className="text-dark-gray">{salonData.info.parking}</p>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-4">영업시간</h2>
              <div className="space-y-2 text-dark-gray">
                <p>평일: {salonData.info.hours.weekday}</p>
                <p>주말: {salonData.info.hours.weekend}</p>
                <p>{salonData.info.hours.closed}</p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-medium text-charcoal mb-4">연락처</h2>
              <p className="text-dark-gray">{salonData.info.phone}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

