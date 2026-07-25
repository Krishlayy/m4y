import { PrismaClient } from '@prisma/client';

export async function seedTeam(prisma: PrismaClient) {
  // Clear existing team
  await prisma.teamMember.deleteMany({});

  const members = [
    {
      name: "Krishlay Sharma",
      role: "Co-Founder",
      bio: "A visionary digital strategist with a passion for helping brands scale through innovative marketing and cutting-edge technology.",
      expertise: ["Digital Strategy", "Performance Marketing", "Brand Positioning"],
      achievements: ["Scaled 50+ Brands", "Tech Innovator"],
      displayOrder: 1,
    },
    {
      name: "Bhavya Chawla",
      role: "Co-Founder",
      bio: "The creative powerhouse behind M4Y's most viral campaigns, blending aesthetics with aggressive conversion psychology.",
      expertise: ["Creative Direction", "UI/UX Design", "Viral Marketing"],
      achievements: ["Award-winning Designer", "Brand Storyteller"],
      displayOrder: 2,
    },
    {
      name: "Ayushman Singh",
      role: "Co-Founder",
      bio: "The operational genius who ensures that every sprint is executed flawlessly and every client gets enterprise-grade delivery.",
      expertise: ["Operations", "Project Management", "Client Success"],
      achievements: ["Process Architect", "Scale Specialist"],
      displayOrder: 3,
    },
    {
      name: "Priyanshu Dhangar",
      role: "Co-Founder",
      bio: "A technical wizard who builds the AI automations, scalable SaaS ecosystems, and web architectures that power our clients.",
      expertise: ["Software Engineering", "AI Integration", "System Architecture"],
      achievements: ["Full-Stack Master", "Automation Expert"],
      displayOrder: 4,
    },
    {
      name: "Arpit Das",
      role: "Co-Founder",
      bio: "The analytical mastermind turning raw data into predictable, scalable revenue engines across omni-channel campaigns.",
      expertise: ["Data Analytics", "Growth Hacking", "Media Buying"],
      achievements: ["ROI Optimizer", "Data Scientist"],
      displayOrder: 5,
    }
  ];

  for (const member of members) {
    await prisma.teamMember.create({ data: member as any });
  }
  console.log('Team seeded.');
}
