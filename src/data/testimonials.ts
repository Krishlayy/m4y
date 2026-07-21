export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  rating: number;
  avatar: string;
  gradient: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sarah Jenkins',
    role: 'Founder & CEO',
    company: 'Aura Apparel',
    industry: 'Fashion',
    quote: 'M4Y completely changed the trajectory of our brand. They didn\'t just run ads; they acted as a true growth partner, scaling our revenue to eight figures in just 18 months.',
    rating: 5,
    avatar: '/avatars/SJ.png',
    gradient: 'from-[#6C4DFF] to-[#FF5DB1]'
  },
  {
    id: 't-2',
    name: 'David Chen',
    role: 'VP of Growth',
    company: 'CloudSync',
    industry: 'SaaS',
    quote: 'The inbound engine M4Y built for us is incredible. They understood our highly technical product and helped us boost our MRR from $5K to $150K flawlessly.',
    rating: 5,
    avatar: '/avatars/DC.png',
    gradient: 'from-[#00D9FF] to-[#6C4DFF]'
  },
  {
    id: 't-3',
    name: 'Maria Rodriguez',
    role: 'CMO',
    company: 'Burger Crafters',
    industry: 'Food & Beverage',
    quote: 'Our restaurants have never been this busy! The hyper-local SEO and influencer campaigns they ran literally tripled our weekend footfall.',
    rating: 5,
    avatar: '/avatars/MR.png',
    gradient: 'from-[#FF5DB1] to-[#FFD93D]'
  },
  {
    id: 't-4',
    name: 'James Sterling',
    role: 'Sales Director',
    company: 'Horizon Developments',
    industry: 'Real Estate',
    quote: 'Generating qualified leads for luxury real estate is tough, but M4Y nailed it. Their AI chatbot integration saved us hours and brought us 2000+ highly qualified prospects.',
    rating: 5,
    avatar: '/avatars/JS.png',
    gradient: 'from-[#00E676] to-[#00D9FF]'
  },
  {
    id: 't-5',
    name: 'Dr. Emily Chen',
    role: 'Co-Founder',
    company: 'VitalityApp',
    industry: 'Healthcare / Tech',
    quote: 'Taking our app to 500K downloads seemed impossible given our initial CAC. M4Y’s App Store Optimization and TikTok strategies proved to be absolute game-changers.',
    rating: 5,
    avatar: '/avatars/EC.png',
    gradient: 'from-[#6C4DFF] to-[#00D9FF]'
  },
  {
    id: 't-6',
    name: 'Michael O\'Connor',
    role: 'Director of Marketing',
    company: 'LearnSphere',
    industry: 'EdTech',
    quote: 'The AI automation systems M4Y deployed are nothing short of magic. We slashed our acquisition costs by 70% while improving our close rates significantly.',
    rating: 5,
    avatar: '/avatars/MO.png',
    gradient: 'from-[#FFD93D] to-[#FF5DB1]'
  },
  {
    id: 't-7',
    name: 'Eleanor Vance',
    role: 'Managing Director',
    company: 'Opal & Gold',
    industry: 'Luxury Retail',
    quote: 'M4Y successfully brought our 80-year heritage into the digital age. They crafted a premium digital experience that generated over $5M in online sales effortlessly.',
    rating: 5,
    avatar: '/avatars/EV.png',
    gradient: 'from-[#000000] to-[#6C4DFF]'
  },
  {
    id: 't-8',
    name: 'Marcus Chen',
    role: 'Chief Revenue Officer',
    company: 'DataFlow Inc.',
    industry: 'Enterprise Software',
    quote: 'They transformed our outbound struggles into a seamless inbound demand generation machine. M4Y is the definitive authority on B2B LinkedIn growth.',
    rating: 5,
    avatar: '/avatars/MC.png',
    gradient: 'from-[#00D9FF] to-[#00E676]'
  },
  {
    id: 't-9',
    name: 'Jessica Alba',
    role: 'Marketing Lead',
    company: 'FinTrust',
    industry: 'Finance',
    quote: 'M4Y’s compliance-first approach to our marketing was exactly what we needed. They drove high-value leads for our wealth management services reliably.',
    rating: 5,
    avatar: '/avatars/JA.png',
    gradient: 'from-[#6C4DFF] to-[#FF5DB1]'
  },
  {
    id: 't-10',
    name: 'Liam Neeson',
    role: 'E-commerce Director',
    company: 'Urban Threads',
    industry: 'Ecommerce',
    quote: 'Incredible attention to detail. From UX revamps to automated email flows, M4Y optimized every single touchpoint, doubling our overall conversion rate.',
    rating: 5,
    avatar: '/avatars/LN.png',
    gradient: 'from-[#FF5DB1] to-[#FFD93D]'
  },
  {
    id: 't-11',
    name: 'Sophia Patel',
    role: 'Operations Head',
    company: 'Zenith Hotels',
    industry: 'Hospitality',
    quote: 'We saw a 40% increase in direct bookings within three months. Their digital PR and targeted social media campaigns really put our new resorts on the map.',
    rating: 5,
    avatar: '/avatars/SP.png',
    gradient: 'from-[#00E676] to-[#00D9FF]'
  },
  {
    id: 't-12',
    name: 'Chris Hemsworth',
    role: 'Founder',
    company: 'Peak Performance',
    industry: 'Fitness',
    quote: 'M4Y built our brand from scratch. Their creative strategies and performance marketing expertise took us from a local gym to a nationally recognized fitness app.',
    rating: 5,
    avatar: '/avatars/CH.png',
    gradient: 'from-[#00D9FF] to-[#6C4DFF]'
  }
];
