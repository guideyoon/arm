import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: '미용실 아름 - 자연스러운 아름다움을 완성하는 공간',
  description: '경험과 감각으로 완성하는 헤어 디자인. 미용실 아름에서 당신만의 아름다움을 발견하세요.',
  keywords: '미용실, 헤어살롱, 커트, 펌, 염색, 강남 미용실',
  openGraph: {
    title: '미용실 아름',
    description: '자연스러운 아름다움을 완성하는 공간',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

