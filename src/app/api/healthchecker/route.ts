import { NextResponse } from 'next/server'

export const GET = async () => {
  const res = {
    status: 'success',
    message: 'Server is running',
  }
  return new NextResponse(JSON.stringify(res), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  })
}
