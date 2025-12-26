# 미용실 아름 홈페이지

미용실 아름의 공식 홈페이지입니다. Next.js App Router와 TypeScript로 구축되었습니다.

## 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Email**: Resend
- **Deployment**: Vercel

## 시작하기

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수를 설정하세요:

```env
RESEND_API_KEY=your_resend_api_key_here
CONTACT_EMAIL=contact@example.com
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 프로젝트 구조

```
arm/
├── app/                    # Next.js App Router 페이지
│   ├── page.tsx           # 홈 페이지
│   ├── services/          # 시술 안내
│   ├── designers/         # 디자이너 소개
│   ├── space/            # 공간 안내
│   ├── contact/          # 예약 및 문의
│   ├── location/         # 오시는 길
│   ├── actions/          # 서버 액션
│   └── layout.tsx        # 루트 레이아웃
├── components/            # 재사용 가능한 컴포넌트
│   ├── Navigation.tsx
│   ├── Footer.tsx
│   └── ContactForm.tsx
├── data/                 # 로컬 데이터
│   └── salon.json
└── public/               # 정적 파일
```

## 주요 기능

- ✅ 반응형 디자인 (모바일 우선)
- ✅ 6개 페이지 구성
- ✅ 예약 문의 폼 (Resend 이메일 연동)
- ✅ SEO 최적화 (메타데이터, 사이트맵)
- ✅ 접근성 고려 (대체 텍스트, 명도 대비)

## 배포

Vercel에 배포하려면:

1. GitHub에 프로젝트를 푸시
2. Vercel에 프로젝트 연결
3. 환경 변수 설정
4. 배포 완료

## 커스터마이징

### 데이터 수정

`data/salon.json` 파일을 수정하여 미용실 정보, 시술 목록, 디자이너 정보를 변경할 수 있습니다.

### 이미지 추가

- 히어로 이미지: `app/page.tsx`의 히어로 섹션
- 공간 이미지: `app/space/page.tsx`
- 디자이너 사진: `app/designers/page.tsx`

현재는 플레이스홀더로 표시되어 있으니, 실제 이미지로 교체하세요.

### 지도 연동

`app/location/page.tsx`에서 카카오맵 또는 구글맵을 연동하세요.

## 라이선스

이 프로젝트는 미용실 아름의 소유입니다.

