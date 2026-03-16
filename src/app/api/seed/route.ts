import { NextResponse } from 'next/server';
import { getDataSource } from '@/lib/database';
import { Project } from '@/entities/Project';
import { Experience } from '@/entities/Experience';

export async function GET() {
  try {
    const ds = await getDataSource();
    const projectRepo = ds.getRepository(Project);
    const experienceRepo = ds.getRepository(Experience);

    const existingProjects = await projectRepo.count();
    if (existingProjects > 0) {
      return NextResponse.json({ message: 'Database already seeded', seeded: false });
    }

    const projects: Partial<Project>[] = [
      {
        title: 'E-Commerce Platform',
        description:
          'A full-featured e-commerce platform built with the MERN stack. Includes product management, shopping cart, payment integration with Stripe, order tracking, and an admin dashboard with analytics.',
        techStack: JSON.stringify(['React', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Stripe', 'Tailwind CSS']),
        thumbnail: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        liveDemo: 'https://ecommerce-demo.example.com',
        githubRepo: 'https://github.com/alexmorgan/ecommerce-platform',
        featured: true,
        sortOrder: 1,
      },
      {
        title: 'Real-Time Chat Application',
        description:
          'A real-time messaging application with WebSocket support using Socket.io. Features include private messaging, group chats, file sharing, message encryption, and online status indicators.',
        techStack: JSON.stringify(['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Express']),
        thumbnail: 'https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80',
        liveDemo: 'https://chat-app.example.com',
        githubRepo: 'https://github.com/alexmorgan/realtime-chat',
        featured: true,
        sortOrder: 2,
      },
      {
        title: 'Task Management SaaS',
        description:
          'A project management tool inspired by Trello and Asana. Built with Next.js and TypeScript, featuring drag-and-drop boards, team collaboration, deadline tracking, and email notifications.',
        techStack: JSON.stringify(['Next.js', 'TypeScript', 'MongoDB', 'Prisma', 'Tailwind CSS', 'NextAuth']),
        thumbnail: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80',
        liveDemo: 'https://taskmanager.example.com',
        githubRepo: 'https://github.com/alexmorgan/task-manager',
        featured: true,
        sortOrder: 3,
      },
      {
        title: 'Developer Blog Platform',
        description:
          'A full-stack blogging platform with markdown support, syntax highlighting, SEO optimization, commenting system, and newsletter subscription. Built with Next.js and headless CMS integration.',
        techStack: JSON.stringify(['Next.js', 'TypeScript', 'MongoDB', 'GraphQL', 'Apollo', 'MDX']),
        thumbnail: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80',
        liveDemo: 'https://devblog.example.com',
        githubRepo: 'https://github.com/alexmorgan/dev-blog',
        featured: false,
        sortOrder: 4,
      },
      {
        title: 'Fitness Tracker API',
        description:
          'A RESTful API for a fitness tracking application. Features include workout logging, progress analytics, nutrition tracking, and integration with wearable devices. Deployed on AWS with Docker.',
        techStack: JSON.stringify(['Node.js', 'Express', 'MongoDB', 'Docker', 'AWS', 'JWT', 'Redis']),
        thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
        liveDemo: 'https://api-docs.fitness.example.com',
        githubRepo: 'https://github.com/alexmorgan/fitness-api',
        featured: false,
        sortOrder: 5,
      },
      {
        title: 'Social Media Dashboard',
        description:
          'An analytics dashboard that aggregates data from multiple social media platforms. Features include real-time metrics, customizable widgets, data visualization with Chart.js, and scheduled reports.',
        techStack: JSON.stringify(['React', 'TypeScript', 'Node.js', 'GraphQL', 'MongoDB', 'Chart.js', 'Redis']),
        thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
        liveDemo: 'https://social-dashboard.example.com',
        githubRepo: 'https://github.com/alexmorgan/social-dashboard',
        featured: true,
        sortOrder: 6,
      },
    ];

    await projectRepo.save(projects);

    const experiences: Partial<Experience>[] = [
      {
        company: 'TechNova Solutions',
        role: 'Senior MERN Stack Developer',
        duration: 'Jan 2022 – Present',
        location: 'San Francisco, CA (Remote)',
        accomplishments: JSON.stringify([
          'Led development of a microservices-based e-commerce platform serving 500K+ users, reducing page load time by 40%',
          'Architected and implemented real-time features using WebSockets, handling 10K concurrent connections',
          'Mentored a team of 4 junior developers, conducting code reviews and technical training sessions',
          'Implemented CI/CD pipelines with GitHub Actions and Docker, reducing deployment time by 60%',
          'Optimized MongoDB queries and implemented Redis caching, improving API response times by 55%',
        ]),
        current: true,
        sortOrder: 1,
      },
      {
        company: 'DataStream Inc.',
        role: 'Full Stack Developer',
        duration: 'Mar 2020 – Dec 2021',
        location: 'Austin, TX',
        accomplishments: JSON.stringify([
          'Built and maintained 3 customer-facing React applications with 100K+ monthly active users',
          'Developed RESTful APIs with Node.js/Express serving mobile and web clients',
          'Migrated legacy jQuery codebase to React, improving performance by 35% and developer productivity',
          'Integrated third-party APIs including Stripe, Twilio, and SendGrid for payment and communication features',
          'Implemented automated testing with Jest and Cypress, achieving 80%+ code coverage',
        ]),
        current: false,
        sortOrder: 2,
      },
      {
        company: 'WebCraft Agency',
        role: 'Junior Web Developer',
        duration: 'Jun 2018 – Feb 2020',
        location: 'New York, NY',
        accomplishments: JSON.stringify([
          'Developed 15+ client websites using React and Node.js with tight deadlines',
          'Collaborated with UX/UI designers to implement pixel-perfect responsive designs',
          'Built custom CMS solutions using MongoDB and Express for content management',
          'Reduced website loading times by 45% through code splitting, lazy loading, and image optimization',
          'Participated in Agile sprints and daily standups, contributing to a 20% increase in team velocity',
        ]),
        current: false,
        sortOrder: 3,
      },
    ];

    await experienceRepo.save(experiences);

    return NextResponse.json({ message: 'Database seeded successfully', seeded: true });
  } catch (error) {
    console.error('Seed error:', error);
    return NextResponse.json(
      { error: 'Failed to seed database', details: String(error) },
      { status: 500 }
    );
  }
}
