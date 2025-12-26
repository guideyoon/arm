'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function submitContact(formData: FormData) {
  const type = formData.get('type') as string
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const date = formData.get('date') as string
  const service = formData.get('service') as string
  const message = formData.get('message') as string

  // Basic validation
  if (!name || !phone || !type) {
    return { success: false, error: '필수 항목을 모두 입력해주세요.' }
  }

  // Phone validation (basic)
  const phoneRegex = /^[0-9-]+$/
  if (!phoneRegex.test(phone)) {
    return { success: false, error: '올바른 연락처를 입력해주세요.' }
  }

  try {
    const emailBody = `
문의 유형: ${type}
이름: ${name}
연락처: ${phone}
방문 희망 날짜: ${date || '미지정'}
희망 시술: ${service || '미지정'}
요청 사항:
${message || '없음'}
    `.trim()

    await resend.emails.send({
      from: 'onboarding@resend.dev', // Replace with your verified domain
      to: process.env.CONTACT_EMAIL || 'contact@example.com',
      subject: `[미용실 아름] ${type} - ${name}`,
      text: emailBody,
    })

    return { success: true }
  } catch (error) {
    console.error('Email send error:', error)
    return { success: false, error: '이메일 전송에 실패했습니다.' }
  }
}

