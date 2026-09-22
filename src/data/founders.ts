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
    name: 'Krishlay Sharma',
    role: 'Co-Founder & CEO',
    department: 'Technology & Software Engineering',
    bio: 'Krishlay leads product engineering, AI development, web platforms, automation systems, scalable software architecture and digital innovation. He ensures every client receives future-ready technology that delivers measurable business growth.',
    avatar: '/founder-krishlay.png',
    socials: {
      linkedin: 'https://linkedin.com/in/krishlaysharma',
      twitter: 'https://twitter.com/krishlaysharma'
    },
    skills: ['AI Development', 'Software Architecture', 'Product Engineering', 'Innovation'],
    gradient: 'from-[#6C4DFF] to-[#FF5DB1]'
  },
  {
    id: 'f-2',
    name: 'Ayushman',
    role: 'Co-Founder & CTO',
    department: 'Software Engineering & Growth Systems',
    bio: 'Ayushman specializes in backend engineering, cloud systems, custom software, scalable infrastructure and technical architecture, transforming ambitious ideas into enterprise-grade digital products.',
    avatar: '/founder-ayushman.png',
    socials: {
      linkedin: 'https://linkedin.com/in/ayushman',
      twitter: 'https://twitter.com/ayushman'
    },
    skills: ['Backend Engineering', 'Cloud Systems', 'Technical Architecture', 'Growth Systems'],
    gradient: 'from-[#00D9FF] to-[#6C4DFF]'
  },
];
