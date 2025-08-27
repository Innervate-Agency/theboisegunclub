import { NextResponse } from 'next/server';
import { getAllGuides } from '@/lib/guides';

export async function GET() {
  const guides = getAllGuides();
  return NextResponse.json(guides);
}
