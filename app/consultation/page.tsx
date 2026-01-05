'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ConsultationPage() {
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
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-pink-50 to-white">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← 홈으로 돌아가기
          </Link>
        </div>
      </header>

      {/* 상담 신청 폼 섹션 */}
      <section className="py-16 sm:py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-4">
              무료 상담 신청
            </h1>
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

          {/* 상담 안내 섹션 */}
          <div className="mt-12 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              상담 절차
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">상담 신청</h3>
                    <p className="text-gray-600 text-sm">위 폼을 작성하여 신청해주세요</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">전문가 배정</h3>
                    <p className="text-gray-600 text-sm">24시간 이내 전담 상담사가 연락드립니다</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">맞춤 플랜 제안</h3>
                    <p className="text-gray-600 text-sm">고객님의 상황에 맞는 최적의 플랜을 제공합니다</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-secondary-500 text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">4</div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">가입 완료</h3>
                    <p className="text-gray-600 text-sm">간편하게 온라인으로 가입 진행</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
