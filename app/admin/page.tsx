'use client';

import { useState, useEffect } from 'react';

interface Submission {
  name: string;
  phone: string;
  fetalAge: string;
  timestamp: string;
}

export default function AdminPage() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/admin', {
        method: 'GET',
        headers: {
          'x-admin-password': password,
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsAuthenticated(true);
        setSubmissions(data.data);
        localStorage.setItem('adminPassword', password);
      } else {
        setError('비밀번호가 올바르지 않습니다.');
      }
    } catch (err) {
      setError('오류가 발생했습니다. 다시 시도해주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async () => {
    setLoading(true);
    try {
      const storedPassword = localStorage.getItem('adminPassword') || password;
      const response = await fetch('/api/admin', {
        method: 'GET',
        headers: {
          'x-admin-password': storedPassword,
        },
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmissions(data.data);
      }
    } catch (err) {
      setError('새로고침 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
    setSubmissions([]);
    localStorage.removeItem('adminPassword');
  };

  useEffect(() => {
    const storedPassword = localStorage.getItem('adminPassword');
    if (storedPassword) {
      setPassword(storedPassword);
      const autoLogin = async () => {
        try {
          const response = await fetch('/api/admin', {
            method: 'GET',
            headers: {
              'x-admin-password': storedPassword,
            },
          });

          const data = await response.json();

          if (response.ok && data.success) {
            setIsAuthenticated(true);
            setSubmissions(data.data);
          }
        } catch (err) {
          console.error('자동 로그인 실패:', err);
        }
      };
      autoLogin();
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
          <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            어드민 로그인
          </h1>

          {error && (
            <div className="mb-4 p-4 bg-red-100 text-red-800 rounded-lg">
              {error}
            </div>
          )}

          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                placeholder="비밀번호를 입력하세요"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg disabled:opacity-50"
            >
              {loading ? '로그인 중...' : '로그인'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-pink-50 p-4 sm:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 mb-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">
                상담 신청 관리
              </h1>
              <p className="text-gray-600 mt-1">
                총 {submissions.length}건의 신청
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleRefresh}
                disabled={loading}
                className="px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition disabled:opacity-50"
              >
                {loading ? '새로고침 중...' : '새로고침'}
              </button>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              >
                로그아웃
              </button>
            </div>
          </div>

          {submissions.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              아직 신청 내역이 없습니다.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-100 to-secondary-100">
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      번호
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      이름
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      전화번호
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      태아 나이
                    </th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">
                      신청 일시
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {submissions.map((submission, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50 transition"
                    >
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {submissions.length - index}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900 font-medium">
                        {submission.name}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {submission.phone}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-900">
                        {submission.fetalAge}
                      </td>
                      <td className="px-4 py-4 text-sm text-gray-600">
                        {new Date(submission.timestamp).toLocaleString('ko-KR', {
                          year: 'numeric',
                          month: '2-digit',
                          day: '2-digit',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-lg font-bold text-gray-900 mb-4">
            데이터 내보내기
          </h2>
          <button
            onClick={() => {
              const dataStr = JSON.stringify(submissions, null, 2);
              const dataBlob = new Blob([dataStr], { type: 'application/json' });
              const url = URL.createObjectURL(dataBlob);
              const link = document.createElement('a');
              link.href = url;
              link.download = `submissions_${new Date().toISOString().split('T')[0]}.json`;
              link.click();
              URL.revokeObjectURL(url);
            }}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            JSON으로 다운로드
          </button>
        </div>
      </div>
    </div>
  );
}
