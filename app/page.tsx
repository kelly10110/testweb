'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-white">
      {/* 히어로 섹션 */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-secondary-100 opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              우리 아이의 <span className="text-primary-600">첫 보험</span>
              <br />
              <span className="text-secondary-600">태아보험</span>으로 시작하세요
            </h1>
            <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
              출생 전부터 우리 아이를 위한 완벽한 보장
              <br />
              전문 상담사가 맞춤형 플랜을 제안해드립니다
            </p>
            <Link
              href="/consultation"
              className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              무료 상담 신청하기
            </Link>
          </div>
        </div>
      </section>

      {/* 왜 태아보험인가 섹션 */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            왜 <span className="text-primary-600">태아보험</span>일까요?
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            출생 전 가입으로 더 넓은 보장을 받을 수 있습니다
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🤰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">임신 중 가입 가능</h3>
              <p className="text-gray-700">
                임신 22주 이내 가입으로 출산 직후부터 보장이 시작됩니다.
                선천성 질환, 저체중, 주산기 질환까지 보장받으세요.
              </p>
            </div>
            <div className="bg-gradient-to-br from-secondary-50 to-secondary-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">합리적인 보험료</h3>
              <p className="text-gray-700">
                출생 후 가입보다 저렴한 보험료로 더 넓은 보장 범위를 확보할 수 있습니다.
                장기간 유지할수록 경제적입니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">포괄적인 보장</h3>
              <p className="text-gray-700">
                출산 리스크, 신생아 질환, 성장 과정의 각종 사고와 질병까지
                우리 아이의 성장을 든든하게 지켜드립니다.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/consultation"
              className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              지금 바로 상담 받기
            </Link>
          </div>
        </div>
      </section>

      {/* 보장 내역 섹션 */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-blue-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            이런 보장을 받을 수 있어요
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            우리 아이의 건강한 미래를 위한 완벽한 준비
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-primary-600 mb-3">✓ 선천성 질환 보장</h3>
              <p className="text-gray-600">선천성 이상, 기형 등 출생 시 발견되는 질환 보장</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-primary-600 mb-3">✓ 저체중아 보장</h3>
              <p className="text-gray-600">출생 시 저체중으로 인한 인큐베이터 비용 등</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-secondary-600 mb-3">✓ 신생아 질환 보장</h3>
              <p className="text-gray-600">황달, 호흡곤란 등 신생아 특정 질환 보장</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-bold text-secondary-600 mb-3">✓ 성장기 보장</h3>
              <p className="text-gray-600">어린이 상해, 질병, 입원 등 종합 보장</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/consultation"
              className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              맞춤 플랜 받아보기
            </Link>
          </div>
        </div>
      </section>

      {/* 상담 프로세스 섹션 */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16">
            간편한 <span className="text-primary-600">상담 절차</span>
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">1</div>
              <h3 className="font-bold text-gray-900 mb-2">상담 신청</h3>
              <p className="text-gray-600 text-sm">간단한 정보 입력으로 신청 완료</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-primary-600">2</div>
              <h3 className="font-bold text-gray-900 mb-2">전문가 배정</h3>
              <p className="text-gray-600 text-sm">전담 상담사가 연락드립니다</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-600">3</div>
              <h3 className="font-bold text-gray-900 mb-2">맞춤 플랜 제안</h3>
              <p className="text-gray-600 text-sm">상황에 맞는 최적의 플랜 제공</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-secondary-600">4</div>
              <h3 className="font-bold text-gray-900 mb-2">가입 완료</h3>
              <p className="text-gray-600 text-sm">간편하게 온라인으로 가입</p>
            </div>
          </div>
        </div>
      </section>

      {/* 문의 폼 섹션 */}
      <ContactForm />

      {/* 푸터 */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2026 태아보험 전문 상담센터. All rights reserved.</p>
          <p className="text-gray-500 text-sm mt-2">전문 상담사가 24시간 대기 중입니다.</p>
        </div>
      </footer>
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    fetalAge: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setSubmitMessage('상담 신청이 완료되었습니다! 곧 연락드리겠습니다.');
        setFormData({ name: '', phone: '', fetalAge: '' });
      } else {
        setSubmitMessage('오류가 발생했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      setSubmitMessage('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-16 sm:py-24 bg-gradient-to-b from-primary-50 to-secondary-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
            무료 상담 신청
          </h2>
          <p className="text-center text-gray-600 mb-8">
            전문 상담사가 24시간 이내에 연락드립니다
          </p>

          {submitMessage && (
            <div className={`mb-6 p-4 rounded-lg ${
              submitMessage.includes('완료')
                ? 'bg-green-100 text-green-800'
                : 'bg-red-100 text-red-800'
            }`}>
              {submitMessage}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                이름 *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="홍길동"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                전화번호 *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="010-1234-5678"
              />
            </div>

            <div>
              <label htmlFor="fetalAge" className="block text-sm font-medium text-gray-700 mb-2">
                태아 나이 (임신 주차) *
              </label>
              <input
                type="text"
                id="fetalAge"
                required
                value={formData.fetalAge}
                onChange={(e) => setFormData({ ...formData, fetalAge: e.target.value })}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition"
                placeholder="예: 12주"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-4 rounded-lg text-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? '제출 중...' : '상담 신청하기'}
            </button>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            개인정보는 상담 목적으로만 사용되며 안전하게 보호됩니다
          </p>
        </div>
      </div>
    </section>
  );
}
