'use client'

import { useState } from 'react'
import { submitContact } from '@/app/actions/contact'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(formData: FormData) {
    setStatus('loading')
    setErrorMessage('')

    try {
      const result = await submitContact(formData)
      if (result.success) {
        setStatus('success')
      } else {
        setStatus('error')
        setErrorMessage(result.error || '문의 전송에 실패했습니다.')
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage('문의 전송에 실패했습니다. 다시 시도해주세요.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-light-gray p-8 text-center">
        <p className="text-charcoal text-lg mb-4">
          문의가 정상적으로 접수되었습니다.
        </p>
        <p className="text-dark-gray">
          확인 후 연락드리겠습니다.
        </p>
      </div>
    )
  }

  return (
    <form action={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="type" className="block text-charcoal font-medium mb-2">
          문의 유형
        </label>
        <select
          id="type"
          name="type"
          required
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent bg-white"
        >
          <option value="">선택해주세요</option>
          <option value="예약 문의">예약 문의</option>
          <option value="시술 상담">시술 상담</option>
          <option value="기타">기타</option>
        </select>
      </div>

      <div>
        <label htmlFor="name" className="block text-charcoal font-medium mb-2">
          이름
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-charcoal font-medium mb-2">
          연락처
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-charcoal font-medium mb-2">
          방문 희망 날짜
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-charcoal font-medium mb-2">
          희망 시술
        </label>
        <input
          type="text"
          id="service"
          name="service"
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-charcoal font-medium mb-2">
          요청 사항
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-charcoal focus:border-transparent resize-none"
        />
      </div>

      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full px-8 py-4 bg-charcoal text-white font-medium hover:bg-charcoal/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? '전송 중...' : '문의 남기기'}
      </button>
    </form>
  )
}

