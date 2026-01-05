import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const password = request.headers.get('x-admin-password');
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin1234';

    if (password !== adminPassword) {
      return NextResponse.json(
        { success: false, message: '인증 실패' },
        { status: 401 }
      );
    }

    const { data: submissions, error } = await supabase
      .from('submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase 조회 오류:', error);
      return NextResponse.json(
        { success: false, message: '데이터 조회 중 오류가 발생했습니다.' },
        { status: 500 }
      );
    }

    const formattedSubmissions = submissions?.map((sub) => ({
      name: sub.name,
      phone: sub.phone,
      fetalAge: sub.fetal_age,
      timestamp: sub.timestamp,
    })) || [];

    return NextResponse.json({ success: true, data: formattedSubmissions });
  } catch (error) {
    console.error('데이터 조회 오류:', error);
    return NextResponse.json(
      { success: false, message: '오류가 발생했습니다.' },
      { status: 500 }
    );
  }
}
