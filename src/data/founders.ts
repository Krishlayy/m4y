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
    avatar: '/founders/krishlay.jpg',
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
    role: 'Co-Founder',
    department: 'Software Engineering & Product Development',
    bio: 'Ayushman specializes in backend engineering, cloud systems, custom software, scalable infrastructure and technical architecture, transforming ambitious ideas into enterprise-grade digital products.',
    avatar: '/founders/ayushman.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/ayushman',
      twitter: 'https://twitter.com/ayushman'
    },
    skills: ['Backend Engineering', 'Cloud Systems', 'Technical Architecture', 'Custom Software'],
    gradient: 'from-[#00D9FF] to-[#6C4DFF]'
  },
  {
    id: 'f-3',
    name: 'Arpit',
    role: 'Co-Founder',
    department: 'Marketing Strategy & Brand Growth',
    bio: 'Arpit develops data-driven marketing strategies, performance campaigns and growth systems that help businesses expand their reach, increase conversions and build lasting customer relationships.',
    avatar: '/founders/arpit.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/arpit',
      instagram: 'https://instagram.com/arpit'
    },
    skills: ['Marketing Strategy', 'Brand Growth', 'Data-Driven Campaigns', 'Conversion Optimization'],
    gradient: 'from-[#FF5DB1] to-[#FFD93D]'
  },
  {
    id: 'f-4',
    name: 'Priyanshu',
    role: 'Co-Founder',
    department: 'Performance Marketing & Creative Strategy',
    bio: 'Priyanshu focuses on paid advertising, campaign optimization, content strategy and customer acquisition using innovative digital marketing frameworks.',
    avatar: '/founders/priyanshu.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/priyanshu',
      twitter: 'https://twitter.com/priyanshu'
    },
    skills: ['Paid Advertising', 'Campaign Optimization', 'Content Strategy', 'Customer Acquisition'],
    gradient: 'from-[#00E676] to-[#00D9FF]'
  },
  {
    id: 'f-5',
    name: 'Bhavya',
    role: 'Co-Founder',
    department: 'Brand Partnerships & Influencer Marketing',
    bio: 'Bhavya leads influencer collaborations, creator partnerships, PR campaigns and brand communications, helping businesses build authentic audiences through meaningful relationships.',
    avatar: '/founders/bhavya.jpg',
    socials: {
      linkedin: 'https://linkedin.com/in/bhavya',
      instagram: 'https://instagram.com/bhavya'
    },
    skills: ['Influencer Marketing', 'Brand Partnerships', 'PR Campaigns', 'Communications'],
    gradient: 'from-[#FFD93D] to-[#FF5DB1]'
  }
];
