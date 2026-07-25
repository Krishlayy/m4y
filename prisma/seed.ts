import { PrismaClient } from '@prisma/client';
import { seedServices } from './seed-services';
import { seedCaseStudies } from './seed-case-studies';
import { seedBlogs } from './seed-blogs';
import { seedPricing } from './seed-pricing';
import { seedTeam } from './seed-team';

const prisma = new PrismaClient();

async function main() {
  console.log('Start seeding...');
  
  await seedPricing(prisma);
  await seedTeam(prisma);
  await seedServices(prisma);
  await seedCaseStudies(prisma);
  await seedBlogs(prisma);
  
  console.log('Seeding finished.');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
