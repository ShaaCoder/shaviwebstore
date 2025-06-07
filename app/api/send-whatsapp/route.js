export const dynamic = 'force-dynamic'; // Ensure the route is dynamic

import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { name, email, phone, projectType, budget, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !projectType || !budget || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, phone, projectType, budget, and message are required' },
        { status: 400 }
      );
    }

    // Format the WhatsApp message
    const formattedMessage = `New Contact Form Submission:
Name: ${name}
Email: ${email}
Phone: ${phone}
Project Type: ${projectType}
Budget: ${budget}
Message: ${message || 'No message provided'}`;

    // Encode the message for URL
    const encodedMessage = encodeURIComponent(formattedMessage);

    // WhatsApp API URL with the provided phone number
    const whatsappNumber = '+918810524651';
    const whatsappUrl = `https://api.whatsapp.com/send/?phone=${encodeURIComponent(whatsappNumber)}&text=${encodedMessage}&type=phone_number&app_absent=0`;

    // Return the WhatsApp URL to the client
    return NextResponse.json({ url: whatsappUrl });
  } catch (error) {
    console.error('Error in send-whatsapp:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}