import { NextRequest, NextResponse } from "next/server";
import { redirect } from 'next/navigation';
import { cookies } from 'next/headers';

export async function POST(request) {

  const body = await request.json()
  console.log(body.data)

  cookies().set('archetype', `${body.data.archetype}`)
  cookies().set('willigness', `${body.data.willingness}`)
  cookies().set('capacity', `${body.data.capacity}`)

  return NextResponse.json(body.data);
} 

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const data = searchParams.get('age')

  console.log(data)

  return NextResponse.json({ searchParams: data });
} 