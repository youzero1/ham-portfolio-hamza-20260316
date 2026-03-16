import 'reflect-metadata';
import { DataSource } from 'typeorm';
import path from 'path';
import fs from 'fs';
import { Project } from '@/entities/Project';
import { Experience } from '@/entities/Experience';
import { ContactMessage } from '@/entities/ContactMessage';

const dbPath = process.env.DATABASE_PATH || './data/portfolio.db';
const resolvedDbPath = path.resolve(process.cwd(), dbPath);

// Ensure data directory exists
const dataDir = path.dirname(resolvedDbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

let dataSource: DataSource | null = null;

export async function getDataSource(): Promise<DataSource> {
  if (dataSource && dataSource.isInitialized) {
    return dataSource;
  }

  dataSource = new DataSource({
    type: 'better-sqlite3',
    database: resolvedDbPath,
    entities: [Project, Experience, ContactMessage],
    synchronize: true,
    logging: false,
  });

  await dataSource.initialize();
  return dataSource;
}
