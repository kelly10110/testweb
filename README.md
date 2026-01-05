# 태아 보험 랜딩 페이지

Next.js로 제작한 태아 보험 영업용 원페이지 랜딩 페이지입니다.

## 주요 기능

- ✨ 깔끔한 파스텔 블루/핑크 디자인
- 📱 반응형 디자인 (모바일, 태블릿, 데스크톱 대응)
- 🎯 CTA 버튼 클릭 시 문의 폼으로 부드러운 스크롤 이동
- 📝 문의 폼 (이름, 전화번호, 태아 나이 수집)
- 💾 JSON 파일 기반 데이터 저장
- 🔐 비밀번호로 보호되는 어드민 페이지
- 📊 어드민 페이지에서 제출된 데이터 확인 및 다운로드

## 시작하기

### 1. 의존성 설치

```bash
npm install
# 또는
yarn install
# 또는
pnpm install
```

### 2. 환경 변수 설정 (선택사항)

어드민 페이지 비밀번호를 변경하려면:

```bash
# .env.example을 .env로 복사
cp .env.example .env

# .env 파일을 열고 원하는 비밀번호로 변경
ADMIN_PASSWORD=your-secure-password
```

설정하지 않으면 기본 비밀번호는 `admin1234`입니다.

### 3. 개발 서버 실행

```bash
npm run dev
# 또는
yarn dev
# 또는
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

## 페이지 구성

### 메인 랜딩 페이지 (`/`)

- **히어로 섹션**: 메인 헤드라인과 CTA 버튼
- **왜 태아보험인가**: 3가지 주요 장점 소개
- **보장 내역**: 주요 보장 항목 설명
- **상담 프로세스**: 4단계 상담 절차 안내
- **문의 폼**: 상담 신청 양식
- **푸터**: 저작권 및 안내 문구

### 어드민 페이지 (`/admin`)

- 비밀번호 인증 로그인
- 제출된 상담 신청 목록 확인
- 실시간 새로고침 기능
- JSON 파일로 데이터 다운로드

## 데이터 저장

제출된 데이터는 `/data/submissions.json` 파일에 저장됩니다.

```json
[
  {
    "name": "홍길동",
    "phone": "010-1234-5678",
    "fetalAge": "12주",
    "timestamp": "2026-01-05T10:30:00.000Z"
  }
]
```

## 배포

### Vercel (권장)

1. GitHub에 코드 푸시
2. [Vercel](https://vercel.com)에서 프로젝트 import
3. 환경 변수 설정 (ADMIN_PASSWORD)
4. 배포 완료

### 다른 호스팅

```bash
# 프로덕션 빌드
npm run build

# 프로덕션 서버 시작
npm run start
```

## 기술 스택

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Data Storage**: JSON 파일
- **Deployment**: Vercel (권장)

## 커스터마이징

### 색상 변경

`tailwind.config.ts` 파일에서 primary와 secondary 색상을 수정하세요.

### 콘텐츠 수정

`app/page.tsx` 파일에서 텍스트와 섹션을 수정할 수 있습니다.

### 메타데이터 수정

`app/layout.tsx` 파일에서 페이지 제목과 설명을 수정하세요.

## 라이선스

MIT License
