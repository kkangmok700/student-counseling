// 관리자 비밀번호
const ADMIN_PASSWORD = '1234';

// Supabase 설정
const SUPABASE_URL = 'https://qikbmhabsktpoogzxflc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFpa2JtaGFic2t0cG9vZ3p4ZmxjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI2MDY0MjIsImV4cCI6MjA4ODE4MjQyMn0.pDgBMhE-9Fo810hrI8bzJPpnstumbLdwIHo_O3IHS5Q';

// Supabase 클라이언트 초기화
let supabase;
try {
  supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} catch (e) {
  console.error('Supabase 초기화 오류:', e);
}
