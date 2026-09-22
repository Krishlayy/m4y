export interface Socials {
  linkedin?: string;
  twitter?: string;
  instagram?: string;
}

export interface Founder {
  id: string;
  name: string;
  role: string;
  department: string;
  bio: string;
  avatar: string;
  socials: Socials;
  skills: string[];
  gradient: string;
}

export const founders: Founder[] = [
  {
    id: 'f-1',
    name: 'Kishalay Sharma',
    role: 'Co-Founder & Tech Lead',
    department: 'Technology & AI Automation',
    bio: 'Specializing in AI automation, scalable software platforms, and algorithmic growth systems, Kishalay ensures partner brands deploy modern technical infrastructure that outperforms traditional marketing agencies. He leads engineering, web architecture, and automated conversion funnels.',
    avatar: '/founder-krishlay.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/kishalay-sharma-35752b223/',
      instagram: 'https://www.instagram.com/m4y.agency/'
    },
    skills: ['AI Architecture', 'Full-Stack Engineering', 'Automated Funnels', 'Growth Systems'],
    gradient: 'from-[#FF5500] to-[#FFD700]'
  },
  {
    id: 'f-2',
    name: 'Ayushman Singh',
    role: 'Co-Founder & Growth Engineer',
    department: 'Backend Engineering & Strategy',
    bio: 'Ayushman combines software engineering precision with aggressive performance marketing. He architects backend data pipelines, conversion tracking, and high-ROI growth loops, transforming customer acquisition into an exact science that generates predictable business revenue.',
    avatar: '/founder-ayushman.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ayushmansingh21/',
      instagram: 'https://www.instagram.com/m4y.agency/'
    },
    skills: ['Scalable Infrastructure', 'Performance Marketing', 'Conversion Strategy', 'Cloud Systems'],
    gradient: 'from-[#FFD700] to-[#FF5500]'
  },
];
