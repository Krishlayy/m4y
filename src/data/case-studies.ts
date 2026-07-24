export interface CaseStudyResult {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

export interface ChartData {
  labels: string[];
  revenue: number[];
  leads: number[];
}

export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  thumbnail: string;
  challenge: string;
  solution: string;
  approach: string[];
  timeline: string;
  services: string[];
  results: CaseStudyResult[];
  testimonialQuote: string;
  testimonialAuthor: string;
  testimonialRole: string;
  roi: string;
  chartData: ChartData;
  tags: string[];
  gradient: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs-1',
    title: 'Scaling a D2C Fashion Brand to $10M Revenue',
    slug: 'd2c-fashion-growth',
    client: 'Aura Apparel',
    industry: 'Fashion',
    thumbnail: '/case-studies/d2c-fashion-growth.jpg',
    challenge: 'Aura Apparel launched with great designs but struggled to acquire customers cost-effectively. Their CAC was eating into margins, and their organic reach was virtually non-existent despite high-quality products.',
    solution: 'We implemented a full-funnel performance marketing strategy backed by user-generated content and aggressive conversion rate optimization on their Shopify store.',
    approach: [
      'Audited and rebuilt the Shopify storefront for conversion optimization',
      'Launched a massive UGC campaign leveraging micro-influencers',
      'Restructured Meta Ads account with a focus on broad targeting and dynamic creative testing',
      'Implemented automated email flows to capture abandoned carts and drive repeat purchases',
      'Introduced TikTok Shop integration and TikTok Ads'
    ],
    timeline: '18 months',
    services: ['Performance Marketing', 'Conversion Rate Optimization', 'Influencer Marketing', 'Email Automation'],
    results: [
      { metric: 'Annual Revenue', before: '$150K', after: '$10.2M', improvement: '6700% Increase' },
      { metric: 'Customer Acquisition Cost (CAC)', before: '$45', after: '$18', improvement: '60% Decrease' },
      { metric: 'Conversion Rate', before: '1.2%', after: '3.8%', improvement: '216% Increase' }
    ],
    testimonialQuote: 'M4Y didn\'t just run our ads; they fundamentally transformed our business model. Their data-driven approach to creative and media buying scaled us faster than we thought possible.',
    testimonialAuthor: 'Sarah Jenkins',
    testimonialRole: 'Founder & CEO',
    roi: '12x ROAS',
    chartData: {
      labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12', 'Month 18'],
      revenue: [150, 450, 1200, 3500, 6800, 10200],
      leads: [500, 1500, 4000, 12000, 25000, 40000]
    },
    tags: ['E-commerce', 'Meta Ads', 'TikTok Ads', 'UGC'],
    gradient: 'from-[#6C4DFF] to-[#FF5DB1]'
  },
  {
    id: 'cs-2',
    title: 'Boosting SaaS MRR from $5K to $150K',
    slug: 'saas-mrr-growth',
    client: 'CloudSync',
    industry: 'Software as a Service (SaaS)',
    thumbnail: '/case-studies/saas-mrr-growth.jpg',
    challenge: 'CloudSync had built an incredible product but failed to gain traction beyond their initial beta users. They were relying heavily on cold outreach, which was yielding poor conversion rates and high churn.',
    solution: 'We shifted their acquisition model to inbound marketing and paid search, capturing high-intent users while building a robust content engine for long-term organic growth.',
    approach: [
      'Developed a comprehensive SEO strategy targeting bottom-of-the-funnel keywords',
      'Launched targeted Google Search and LinkedIn Ads to capture high-intent B2B buyers',
      'Created a series of high-value lead magnets (whitepapers and webinars)',
      'Implemented a sophisticated lead scoring and nurturing automation in HubSpot',
      'Optimized the pricing page and checkout flow to reduce drop-offs'
    ],
    timeline: '12 months',
    services: ['B2B Marketing', 'SEO', 'Paid Search', 'Marketing Automation'],
    results: [
      { metric: 'Monthly Recurring Revenue (MRR)', before: '$5,000', after: '$150,000', improvement: '2900% Increase' },
      { metric: 'Cost Per Lead (CPL)', before: '$120', after: '$45', improvement: '62.5% Decrease' },
      { metric: 'Free Trial to Paid Conversion', before: '4%', after: '14%', improvement: '250% Increase' }
    ],
    testimonialQuote: 'The team at M4Y cracked our growth code. They understood our technical product and translated it into marketing that actually drove qualified leads and closed deals.',
    testimonialAuthor: 'David Chen',
    testimonialRole: 'VP of Growth',
    roi: '850% ROI',
    chartData: {
      labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12'],
      revenue: [5, 20, 65, 110, 150],
      leads: [20, 85, 300, 550, 800]
    },
    tags: ['SaaS', 'B2B', 'SEO', 'LinkedIn Ads'],
    gradient: 'from-[#00D9FF] to-[#6C4DFF]'
  },
  {
    id: 'cs-3',
    title: 'Tripling Footfall for a Regional Restaurant Chain',
    slug: 'restaurant-footfall-tripled',
    client: 'Burger Crafters',
    industry: 'Food & Beverage',
    thumbnail: '/case-studies/restaurant-footfall-tripled.jpg',
    challenge: 'Despite having great food, Burger Crafters was losing market share to new competitors. Their digital presence was outdated, and they had no way to track whether marketing was actually driving people into their locations.',
    solution: 'We deployed a hyper-local SEO and influencer marketing strategy combined with targeted geo-fenced advertising to drive measurable foot traffic.',
    approach: [
      'Overhauled Google Business Profiles for all 15 locations for maximum local SEO visibility',
      'Partnered with 50+ local food influencers for a coordinated launch campaign',
      'Ran geo-fenced Meta and TikTok ads targeting users within a 5-mile radius',
      'Launched an SMS marketing loyalty program to drive repeat visits',
      'Implemented QR-code tracking to attribute in-store sales to digital campaigns'
    ],
    timeline: '6 months',
    services: ['Local SEO', 'Influencer Marketing', 'Social Media', 'SMS Marketing'],
    results: [
      { metric: 'Monthly Foot Traffic', before: '12,000', after: '36,500', improvement: '204% Increase' },
      { metric: 'Local Search Visibility', before: 'Rank #8', after: 'Rank #1', improvement: 'Top Position' },
      { metric: 'Loyalty Program Members', before: '0', after: '15,000+', improvement: 'Infinite' }
    ],
    testimonialQuote: 'We\'ve never seen our restaurants this busy. The influencer campaign went viral locally, and the ongoing local SEO ensures we stay packed every weekend.',
    testimonialAuthor: 'Maria Rodriguez',
    testimonialRole: 'Chief Marketing Officer',
    roi: '600% ROI',
    chartData: {
      labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
      revenue: [250, 320, 480, 550, 680, 850],
      leads: [12000, 15000, 22000, 28000, 33000, 36500]
    },
    tags: ['Local SEO', 'Influencer', 'F&B'],
    gradient: 'from-[#FF5DB1] to-[#FFD93D]'
  },
  {
    id: 'cs-4',
    title: 'Generating 2000+ Qualified Leads for Luxury Real Estate',
    slug: 'real-estate-lead-gen',
    client: 'Horizon Developments',
    industry: 'Real Estate',
    thumbnail: '/case-studies/real-estate-lead-gen.jpg',
    challenge: 'Horizon Developments was launching a $100M luxury condo project but struggled to attract qualified high-net-worth buyers. Traditional print media was proving expensive and untrackable.',
    solution: 'We built a high-end digital lead generation funnel utilizing AI-driven targeting, immersive 3D virtual tours, and premium brand positioning.',
    approach: [
      'Developed a highly converting landing page featuring immersive 3D property tours',
      'Launched high-ticket Google Search campaigns targeting luxury real estate keywords',
      'Executed Meta Ads targeting affluent demographics and expat investors',
      'Implemented an AI chatbot to pre-qualify leads 24/7 before routing to the sales team',
      'Created a high-touch email sequence for lead nurturing'
    ],
    timeline: '6 months',
    services: ['Lead Generation', 'Web Development', 'Paid Search', 'AI Automation'],
    results: [
      { metric: 'Qualified Leads', before: '45/month', after: '350+/month', improvement: '677% Increase' },
      { metric: 'Cost Per Qualified Lead', before: '$450', after: '$185', improvement: '58% Decrease' },
      { metric: 'Project Units Sold', before: '5%', after: '85%', improvement: 'Sold Out' }
    ],
    testimonialQuote: 'The quality of leads we received was unprecedented. The AI pre-qualification saved our sales team hundreds of hours and allowed them to focus on closing.',
    testimonialAuthor: 'James Sterling',
    testimonialRole: 'Sales Director',
    roi: '4500% ROI',
    chartData: {
      labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
      revenue: [1000, 5000, 12000, 25000, 45000, 85000],
      leads: [150, 450, 800, 1200, 1600, 2100]
    },
    tags: ['Real Estate', 'Lead Gen', 'Google Ads'],
    gradient: 'from-[#00E676] to-[#00D9FF]'
  },
  {
    id: 'cs-5',
    title: 'Achieving 500K App Downloads for a HealthTech Startup',
    slug: 'healthtech-app-growth',
    client: 'VitalityApp',
    industry: 'Healthcare / Tech',
    thumbnail: '/case-studies/healthtech-app-growth.jpg',
    challenge: 'VitalityApp faced a highly competitive app store environment. Despite a great UI and solid features, user acquisition costs were too high to sustain growth.',
    solution: 'We executed an App Store Optimization (ASO) strategy combined with viral TikTok campaigns and strategic content marketing to drive cost-effective installs.',
    approach: [
      'Completely overhauled ASO strategy, optimizing keywords, screenshots, and descriptions',
      'Launched a series of educational yet entertaining TikTok and Reels campaigns',
      'Partnered with health and wellness micro-influencers for authentic reviews',
      'Set up Apple Search Ads and Google App Campaigns for targeted acquisition',
      'Implemented robust analytics to track in-app events and optimize for LTV'
    ],
    timeline: '9 months',
    services: ['App Store Optimization', 'Social Media Ads', 'Content Marketing', 'Analytics'],
    results: [
      { metric: 'Total Downloads', before: '15,000', after: '520,000', improvement: '3300% Increase' },
      { metric: 'Cost Per Install (CPI)', before: '$4.50', after: '$0.85', improvement: '81% Decrease' },
      { metric: 'Daily Active Users (DAU)', before: '2,500', after: '145,000', improvement: '5700% Increase' }
    ],
    testimonialQuote: 'M4Y took our user acquisition from a crawl to an absolute sprint. Their understanding of the app ecosystem and organic viral loops is unmatched.',
    testimonialAuthor: 'Dr. Emily Chen',
    testimonialRole: 'Co-Founder',
    roi: '420% ROI',
    chartData: {
      labels: ['Month 1', 'Month 3', 'Month 5', 'Month 7', 'Month 9'],
      revenue: [10, 45, 120, 250, 400],
      leads: [25000, 100000, 250000, 400000, 520000]
    },
    tags: ['App Marketing', 'ASO', 'TikTok Ads'],
    gradient: 'from-[#6C4DFF] to-[#00D9FF]'
  },
  {
    id: 'cs-6',
    title: 'Reducing CAC by 70% with AI Marketing Automation',
    slug: 'edtech-cac-reduction',
    client: 'LearnSphere',
    industry: 'EdTech',
    thumbnail: '/case-studies/edtech-cac-reduction.jpg',
    challenge: 'LearnSphere was scaling fast but their customer acquisition cost was unsustainable. Their manual sales process was bottlenecking growth, and leads were falling through the cracks.',
    solution: 'We completely rebuilt their marketing technology stack, introducing AI-powered automation to score, nurture, and close leads with minimal human intervention.',
    approach: [
      'Implemented an AI-driven lead scoring system based on behavioral data',
      'Built automated WhatsApp and email nurturing sequences for different user personas',
      'Restructured Paid Search campaigns using value-based bidding',
      'Created dynamic landing pages that personalized content based on the user\'s ad click',
      'Integrated the entire stack with Salesforce for closed-loop reporting'
    ],
    timeline: '6 months',
    services: ['Marketing Automation', 'AI Solutions', 'Paid Media', 'CRM Integration'],
    results: [
      { metric: 'Customer Acquisition Cost', before: '$350', after: '$105', improvement: '70% Decrease' },
      { metric: 'Lead-to-Customer Rate', before: '2.5%', after: '8.2%', improvement: '228% Increase' },
      { metric: 'Sales Team Efficiency', before: 'Manual Follow-ups', after: '90% Automated', improvement: '10x Faster' }
    ],
    testimonialQuote: 'The automation systems M4Y built for us feel like magic. We are closing more students than ever, and our sales team is only talking to highly qualified prospects.',
    testimonialAuthor: 'Michael O\'Connor',
    testimonialRole: 'Director of Marketing',
    roi: '550% ROI',
    chartData: {
      labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
      revenue: [50, 100, 200, 350, 500, 750],
      leads: [1000, 2500, 4000, 6000, 8500, 12000]
    },
    tags: ['EdTech', 'Automation', 'AI'],
    gradient: 'from-[#FFD93D] to-[#FF5DB1]'
  },
  {
    id: 'cs-7',
    title: 'Building a $5M Online Presence for a Heritage Jeweler',
    slug: 'luxury-jewelry-ecommerce',
    client: 'Opal & Gold',
    industry: 'Luxury Retail',
    thumbnail: '/case-studies/luxury-jewelry-ecommerce.jpg',
    challenge: 'A multi-generational brick-and-mortar jewelry brand wanted to transition to ecommerce but was afraid of losing their premium, exclusive brand feel in the digital space.',
    solution: 'We crafted a bespoke, high-end digital experience and paired it with a sophisticated digital PR and targeted paid media strategy to attract high-net-worth shoppers.',
    approach: [
      'Designed and developed a headless Shopify Plus storefront with a premium aesthetic',
      'Produced high-end editorial video content and 3D product renders',
      'Executed a digital PR strategy getting placements in Vogue, Harper\'s Bazaar, and Elle',
      'Ran highly segmented Pinterest and Meta Ads targeting luxury buyers',
      'Implemented a white-glove virtual concierge service via website chat'
    ],
    timeline: '12 months',
    services: ['Web Development', 'Brand Strategy', 'Digital PR', 'Premium Media Buying'],
    results: [
      { metric: 'Online Revenue', before: '$0', after: '$5.2M', improvement: 'Infinite' },
      { metric: 'Average Order Value (AOV)', before: 'N/A', after: '$2,850', improvement: 'Industry Leading' },
      { metric: 'Brand Search Volume', before: '1,200/mo', after: '45,000/mo', improvement: '3650% Increase' }
    ],
    testimonialQuote: 'M4Y successfully translated our 80-year-old heritage into a modern digital experience without compromising our prestige. The results have completely transformed our business.',
    testimonialAuthor: 'Eleanor Vance',
    testimonialRole: 'Managing Director',
    roi: '900% ROI',
    chartData: {
      labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12'],
      revenue: [0, 400, 1500, 3200, 5200],
      leads: [0, 50, 200, 450, 800]
    },
    tags: ['Luxury', 'Ecommerce', 'Web Design'],
    gradient: 'from-[#000000] to-[#6C4DFF]'
  },
  {
    id: 'cs-8',
    title: 'Scaling a B2B SaaS to 50K Users via LinkedIn & Content',
    slug: 'b2b-saas-linkedin-growth',
    client: 'DataFlow Inc.',
    industry: 'Enterprise Software',
    thumbnail: '/case-studies/b2b-saas-linkedin-growth.jpg',
    challenge: 'DataFlow needed to reach enterprise CTOs and Data Engineers, a notoriously difficult and ad-blind demographic. Traditional outbound was failing miserably.',
    solution: 'We pivoted entirely to a demand generation model, utilizing executive thought leadership on LinkedIn, high-depth technical content, and targeted account-based marketing (ABM).',
    approach: [
      'Developed an Account-Based Marketing (ABM) strategy targeting 500 ideal companies',
      'Ghostwrote and managed LinkedIn thought leadership for the CEO and CTO',
      'Produced deep-dive technical engineering blogs that ranked for niche, high-intent keywords',
      'Ran LinkedIn Document Ads offering valuable industry research reports',
      'Hosted monthly technical webinars that drove high-quality pipeline'
    ],
    timeline: '14 months',
    services: ['B2B SEO', 'Content Marketing', 'LinkedIn Marketing', 'ABM'],
    results: [
      { metric: 'Active Enterprise Users', before: '2,500', after: '52,000', improvement: '1980% Increase' },
      { metric: 'Pipeline Generated', before: '$1.2M', after: '$18.5M', improvement: '1440% Increase' },
      { metric: 'Enterprise Deals Closed', before: '4', after: '47', improvement: '1075% Increase' }
    ],
    testimonialQuote: 'The content engine M4Y built for us established our brand as the definitive authority in our niche. We now have inbound deals closing that we previously couldn\'t even get a meeting with.',
    testimonialAuthor: 'Marcus Chen',
    testimonialRole: 'Chief Revenue Officer',
    roi: '1100% ROI',
    chartData: {
      labels: ['Month 1', 'Month 3', 'Month 6', 'Month 9', 'Month 12', 'Month 14'],
      revenue: [100, 300, 800, 1500, 2800, 4200],
      leads: [2500, 8000, 18000, 30000, 42000, 52000]
    },
    tags: ['B2B', 'LinkedIn', 'Content Marketing'],
    gradient: 'from-[#00D9FF] to-[#00E676]'
  }
];
