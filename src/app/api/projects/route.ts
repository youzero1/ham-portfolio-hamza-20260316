import { NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Project } from '@/entities/Project';

export async function GET() {
  try {
    const ds = await getDataSource();
    const projectRepo = ds.getRepository(Project);
    const projects = await projectRepo.find({
      order: { sortOrder: 'ASC', createdAt: 'DESC' },
    });

    const parsed = projects.map((p) => ({
      ...p,
      techStack: (() => {
        try {
          return JSON.parse(p.techStack);
        } catch {
          return [p.techStack];
        }
      })(),
    }));

    return NextResponse.json(parsed);
  } catch (error) {
    console.error('Projects fetch error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch projects', details: String(error) },
      { status: 500 }
    );
  }
}
