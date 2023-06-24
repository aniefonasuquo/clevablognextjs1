import { NextResponse } from "next/server";
import { headers } from "next/headers";

export async function POST (request) {

  const body = await request.json()

  // console.log(request.headers)
  // const response = NextResponse.next()
  // response.headers.set('Content-Type','application/json')

  // post request to subscribers database

  // send response
  return NextResponse.json(body.data)
} 