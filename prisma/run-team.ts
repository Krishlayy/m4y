import { PrismaClient } from '@prisma/client';
import { seedTeam } from './seed-team';

const prisma = new PrismaClient();

async function main() {
  await seedTeam(prisma);
}

main().finally(() => prisma.$disconnect());
