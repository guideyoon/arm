import Link from 'next/link'
import salonData from '@/data/salon.json'

export default function Footer() {
  return (
    <footer className="bg-light-gray border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-charcoal font-medium mb-4">미용실 아름</h3>
            <p className="text-dark-gray text-sm mb-2">{salonData.info.address}</p>
            <p className="text-dark-gray text-sm">{salonData.info.phone}</p>
          </div>
          <div>
            <h3 className="text-charcoal font-medium mb-4">영업시간</h3>
            <p className="text-dark-gray text-sm mb-1">
              평일: {salonData.info.hours.weekday}
            </p>
            <p className="text-dark-gray text-sm mb-1">
              주말: {salonData.info.hours.weekend}
            </p>
            <p className="text-dark-gray text-sm">{salonData.info.hours.closed}</p>
          </div>
          <div>
            <h3 className="text-charcoal font-medium mb-4">빠른 링크</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/services" className="text-dark-gray text-sm hover:text-charcoal">
                시술 안내
              </Link>
              <Link href="/contact" className="text-dark-gray text-sm hover:text-charcoal">
                예약 및 문의
              </Link>
              <Link href="/location" className="text-dark-gray text-sm hover:text-charcoal">
                오시는 길
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-dark-gray text-sm">
            © {new Date().getFullYear()} 미용실 아름. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

