import { NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Experience } from '@/entities/Experience';

export async function GET() {
  try {
    const ds = await getDataSource();
    const experienceRepo = ds.getRepository(Experience);
    const experiences = await experienceRepo.find({
      order: { sortOrder: 'ASC' },
    });

    const parsed = experiences.map((e) => ({
      ...e,
      accomplishments: (() => {
        try {
          return JSON.parse(e.accomplishments);
        } catch {
          return [e.accomplishments];
        }
      })(),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error('Experience fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch experience', details: String(error) },
      { status: 500 }
    );
  }
}
