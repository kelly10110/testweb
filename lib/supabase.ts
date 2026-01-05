import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// 환경 변수가 없으면 에러 던지기 (런타임에만)
if (!supabaseUrl || !supabaseAnonKey) {
  if (typeof window !== 'undefined' || process.env.NODE_ENV === 'production') {
    throw new Error('Supabase 환경 변수가 설정되지 않았습니다.');
  }
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);