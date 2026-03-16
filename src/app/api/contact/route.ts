import { NextRequest, NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { ContactMessage } from '@/entities/ContactMessage';

function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    const errors: Record<string, string> = {};

    if (!name || name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters long';
    }
    if (!email || !validateEmail(email.trim())) {
      errors.email = 'Please provide a valid email address';
    }
    if (!subject || subject.trim().length < 3) {
      errors.subject = 'Subject must be at least 3 characters long';
    }
    if (!message || message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters long';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 422 });
    }

    const ds = await getDataSource();
    const messageRepo = ds.getRepository(ContactMessage);

    const newMessage = messageRepo.create({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      read: false,
    });

    await messageRepo.save(newMessage);

    return NextResponse.json(
      { message: 'Your message has been received! I will get back to you soon.', id: newMessage.id },
      { status: 201 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
