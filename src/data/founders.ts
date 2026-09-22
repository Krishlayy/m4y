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
    bio: 'After 4 intense years in engineering hostel rooms coding till 4 AM, Kishalay realized that traditional corporate desks were a creative trap. He channeled that raw late-night hustle into M4Y—building AI automation, high-converting platforms, and scalable growth systems for ambitious brands.',
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
    bio: 'From hostel room debates to scaling production software, Ayushman believed that marketing shouldn\'t just be fancy slogans—it must be engineered. He crafts backend engines, tracking infrastructure, and creative marketing systems that turn clicks into measurable revenue.',
    avatar: '/founder-ayushman.png',
    socials: {
      linkedin: 'https://www.linkedin.com/in/ayushmansingh21/',
      instagram: 'https://www.instagram.com/m4y.agency/'
    },
    skills: ['Scalable Infrastructure', 'Performance Marketing', 'Conversion Strategy', 'Cloud Systems'],
    gradient: 'from-[#FFD700] to-[#FF5500]'
  },
];
