import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Get Google Script URL from environment variable
    const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL
    
    if (!GOOGLE_SCRIPT_URL) {
      console.error('GOOGLE_SCRIPT_URL is not set')
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      )
    }
    
    // Send data to Google Apps Script
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    
    const data = await response.json()
    
    if (!response.ok || !data.success) {
      throw new Error(data.error || 'Failed to submit form')
    }
    
    return NextResponse.json({ success: true }, { status: 200 })
  } catch (error) {
    console.error('Error submitting form:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    )
  }
}