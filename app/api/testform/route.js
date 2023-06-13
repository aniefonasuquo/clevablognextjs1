import { NextRequest, NextResponse } from "next/server";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation'

export async function POST(request) {

  const body = await request.json()

  if (body) {
    cookies().set('archetype', `${body.data.archetype}`)
    cookies().set('willigness', `${body.data.willingness}`)
    cookies().set('capacity', `${body.data.capacity}`)
    cookies().set('gender', `${body.data.gender}`)
    redirect(`/personality/${body.data.archetype}`)
  } else {
    NextResponse.error()
  }

} 