import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

interface SubmissionData {
  name: string;
  phone: string;
  fetalAge: string;
  timestamp: string;
}

export async function POST(request: NextRequest) {
  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!supabaseUrl || !supabaseAnonKey) {
      return NextResponse.json(
        { success: false, message: 'Supabase 설정 오류' },
        { status: 500 }
      );
    }
    
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    const data: SubmissionData = await request.json();
    
    const { error } = await supabase
      .from('submissions')
      .insert([
        {
          name: data.name,
          phone: data.phone,
          fetal_age: data.fetalAge,
          timestamp: data.timestamp,
        },
      ]);

    if (error) {
      console.error('Supabase 오류:', error);
      return NextResponse.json(
        { success: false, message: '데이터 저장 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, message: '제출되었습니다.' });
  } catch (error) {
    console.error('제출 오류:', error);
    return NextResponse.json(
      { success: false, message: '오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}