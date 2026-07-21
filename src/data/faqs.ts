export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'services' | 'pricing' | 'process' | 'technical' | 'ai' | 'results';
}

export const faqs: FAQ[] = [
  // General
  {
    id: 'faq-1',
    question: 'What is M4Y and what makes you different?',
    answer: 'M4Y (Marketing-Made For You) is a premium digital marketing agency that combines cutting-edge AI technology with creative strategy. We focus on scalable growth engines tailored to your specific business goals, ensuring every campaign is data-driven.',
    category: 'general'
  },
  {
    id: 'faq-2',
    question: 'Who are your typical clients?',
    answer: 'We partner with ambitious brands across SaaS, D2C Ecommerce, Healthcare, Real Estate, and Luxury sectors. Our ideal clients are those ready to scale aggressively and invest in long-term growth systems.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: 'Where is your agency located?',
    answer: 'While our core team operates out of major global hubs, we are a digital-first agency. This allows us to partner with businesses worldwide and tap into top-tier talent regardless of geographical boundaries.',
    category: 'general'
  },
  {
    id: 'faq-4',
    question: 'Do you work with startups?',
    answer: 'Yes, we love working with high-growth startups! However, we specialize in scaling rather than seed-stage ideation. We perform best when you have product-market fit and need to pour fuel on the fire.',
    category: 'general'
  },
  {
    id: 'faq-5',
    question: 'How do you stay ahead of marketing trends?',
    answer: 'Our team dedicates 20% of their time to R&D, testing emerging platforms, AI tools, and algorithmic shifts before they become mainstream. We leverage proprietary data models to anticipate market changes.',
    category: 'general'
  },
  
  // Services
  {
    id: 'faq-6',
    question: 'Do you offer a la carte services?',
    answer: 'While we can provide standalone services like SEO or Paid Ads, we highly recommend our holistic growth packages. Synergistic marketing across multiple channels historically yields a 3x higher ROI for our clients.',
    category: 'services'
  },
  {
    id: 'faq-7',
    question: 'Do you handle web development and design?',
    answer: 'Absolutely. We believe marketing is only as good as the destination it points to. Our in-house tech and design teams build high-converting landing pages, custom Shopify stores, and enterprise web applications.',
    category: 'services'
  },
  {
    id: 'faq-8',
    question: 'What platforms do you run paid ads on?',
    answer: 'We are platform-agnostic and go where your audience is. This typically includes Google Ads, Meta (Facebook/Instagram), TikTok, LinkedIn, Pinterest, and native programmatic advertising networks.',
    category: 'services'
  },
  {
    id: 'faq-9',
    question: 'Do you offer organic social media management?',
    answer: 'Yes, but we focus on community building and viral content (like TikTok and Reels) rather than generic posting. Our organic strategies are designed to drive real engagement and brand loyalty.',
    category: 'services'
  },
  {
    id: 'faq-10',
    question: 'Can you manage influencer campaigns?',
    answer: 'Yes, our dedicated partnerships team handles end-to-end influencer marketing. From discovering niche micro-influencers to negotiating contracts with top-tier creators, we manage the entire lifecycle.',
    category: 'services'
  },
  {
    id: 'faq-11',
    question: 'What is included in your SEO services?',
    answer: 'Our SEO goes beyond basic keywords. We provide technical site audits, AI-assisted content clusters, high-authority link building, and local SEO optimization to dominate organic search results.',
    category: 'services'
  },

  // Pricing
  {
    id: 'faq-12',
    question: 'How does your pricing structure work?',
    answer: 'We offer tailored retainers based on the scope of work, media spend, and required resources. We do not use a one-size-fits-all model, ensuring you only pay for the expertise that drives your specific goals.',
    category: 'pricing'
  },
  {
    id: 'faq-13',
    question: 'Do you lock clients into long-term contracts?',
    answer: 'We typically start with a 3 to 6-month initial engagement to allow strategies to gain traction and show measurable ROI. After the initial period, we offer flexible month-to-month or annual retention options.',
    category: 'pricing'
  },
  {
    id: 'faq-14',
    question: 'What is your minimum engagement size?',
    answer: 'To ensure we can deliver the high-impact results we are known for, our minimum monthly engagement starts at $5,000. This allows us to allocate the dedicated talent and technology required for success.',
    category: 'pricing'
  },
  {
    id: 'faq-15',
    question: 'Do you charge a percentage of ad spend?',
    answer: 'For paid media management, we use a hybrid model: a base management fee plus a tiered percentage of ad spend. This aligns our incentives with your growth while covering the baseline operational costs.',
    category: 'pricing'
  },
  {
    id: 'faq-16',
    question: 'Are there any hidden fees?',
    answer: 'Never. Transparency is a core M4Y value. All software costs, media budgets, and management fees are clearly outlined in our initial proposal. Media spend is always billed directly to your corporate cards.',
    category: 'pricing'
  },
  {
    id: 'faq-17',
    question: 'Do you offer performance-based pricing?',
    answer: 'In select cases where we have deep historical data and full control over the sales funnel, we offer performance-based or revenue-share models. This is evaluated on a case-by-case basis after an initial audit.',
    category: 'pricing'
  },

  // Process
  {
    id: 'faq-18',
    question: 'What happens during the onboarding process?',
    answer: 'Onboarding takes 1-2 weeks. We conduct deep-dive workshops, audit your existing accounts, establish tracking infrastructure, and align on KPIs. You will be introduced to your dedicated account manager and pod.',
    category: 'process'
  },
  {
    id: 'faq-19',
    question: 'How often will we communicate?',
    answer: 'We maintain continuous communication via a dedicated Slack/Teams channel. Additionally, we hold weekly tactical syncs and comprehensive monthly strategic reviews to analyze data and plan upcoming initiatives.',
    category: 'process'
  },
  {
    id: 'faq-20',
    question: 'Who will be managing my account?',
    answer: 'You are assigned a dedicated Growth Pod. This includes a Strategic Lead, a Performance Marketer, a Creative Director, and a Data Analyst. You get an entire expert team rather than a single generalist.',
    category: 'process'
  },
  {
    id: 'faq-21',
    question: 'How do you handle approvals for creative and copy?',
    answer: 'We use collaborative platforms like Figma and Frame.io for seamless creative review. Nothing goes live without your explicit approval, though we encourage trusting our data-backed creative testing methodology.',
    category: 'process'
  },
  {
    id: 'faq-22',
    question: 'Can we change our strategy mid-campaign?',
    answer: 'Agility is our strength. We continuously monitor performance and will proactively recommend pivots if the data suggests a better path. We are never stubbornly attached to a failing strategy.',
    category: 'process'
  },
  {
    id: 'faq-23',
    question: 'What do you need from us to be successful?',
    answer: 'We need access to your analytics, CRM, and ad accounts, prompt feedback on deliverables, and a willingness to test bold ideas. The best results come from a true partnership, not a traditional vendor relationship.',
    category: 'process'
  },

  // Technical
  {
    id: 'faq-24',
    question: 'What is your technology stack?',
    answer: 'We leverage enterprise-grade tools including HubSpot, Salesforce, Google Analytics 4, Segment, Tableau, and proprietary internal software for predictive modeling and automated media buying.',
    category: 'technical'
  },
  {
    id: 'faq-25',
    question: 'Can you integrate with our existing CRM?',
    answer: 'Yes. Our technical team is highly experienced in custom API integrations. We ensure seamless data flow between your marketing platforms, website, and CRM to enable closed-loop reporting.',
    category: 'technical'
  },
  {
    id: 'faq-26',
    question: 'How do you handle data privacy and compliance?',
    answer: 'We strictly adhere to GDPR, CCPA, and industry-specific regulations (like HIPAA for healthcare). We utilize robust consent management platforms and server-side tracking to ensure absolute compliance.',
    category: 'technical'
  },
  {
    id: 'faq-27',
    question: 'Do you implement server-side tracking?',
    answer: 'Yes, server-side tracking (like Facebook CAPI and Google Tag Manager Server-Side) is a standard inclusion in our onboarding. It is critical for accurate attribution in a post-iOS 14 privacy landscape.',
    category: 'technical'
  },
  {
    id: 'faq-28',
    question: 'What CMS platforms do you support?',
    answer: 'Our developers are proficient in modern web architectures. We actively build on Shopify Plus, Webflow, WordPress (headless), Next.js, and custom React applications.',
    category: 'technical'
  },

  // AI
  {
    id: 'faq-29',
    question: 'How does M4Y use AI in marketing?',
    answer: 'We integrate AI across our entire workflow: predictive analytics for media buying, programmatic SEO content generation, automated lead scoring, and generative AI for rapid creative iteration and personalization.',
    category: 'ai'
  },
  {
    id: 'faq-30',
    question: 'Will AI replace human creativity in my campaigns?',
    answer: 'Never. We view AI as an augmentative tool that handles heavy data processing and rapid prototyping. Human empathy, strategic vision, and brand voice remain at the core of all our creative output.',
    category: 'ai'
  },
  {
    id: 'faq-31',
    question: 'Can you build custom AI automation for my business?',
    answer: 'Yes. Our tech division builds bespoke AI solutions, including intelligent chatbots for customer service, automated email nurturing sequences, and predictive churn models integrated directly into your database.',
    category: 'ai'
  },
  {
    id: 'faq-32',
    question: 'Is AI-generated content safe for SEO?',
    answer: 'When done correctly, yes. We use AI to outline, research, and draft, but every piece of content undergoes rigorous human editorial review to ensure EEAT (Experience, Expertise, Authoritativeness, and Trustworthiness) standards are met.',
    category: 'ai'
  },
  {
    id: 'faq-33',
    question: 'How does AI improve paid media performance?',
    answer: 'We use machine learning algorithms to rapidly test thousands of micro-variations of ad copy and creative, instantly pausing underperforming assets and scaling winners faster than humanly possible.',
    category: 'ai'
  },

  // Results
  {
    id: 'faq-34',
    question: 'How quickly can I expect to see results?',
    answer: 'Paid media can show initial traction within weeks, though optimization takes 30-60 days. Organic strategies like SEO and Content Marketing typically take 3-6 months to demonstrate compounding growth.',
    category: 'results'
  },
  {
    id: 'faq-35',
    question: 'Do you guarantee results?',
    answer: 'We guarantee our process, execution, and transparency, but we never guarantee specific financial returns. Beware of agencies that do. We rely on data-backed projections and historically proven frameworks.',
    category: 'results'
  },
  {
    id: 'faq-36',
    question: 'How do you measure success?',
    answer: 'We align on North Star metrics during onboarding. While we track vanity metrics, our primary focus is on business impact: Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), Lead Quality, and ultimately, Revenue.',
    category: 'results'
  },
  {
    id: 'faq-37',
    question: 'Will I have access to reporting dashboards?',
    answer: 'Yes, you receive 24/7 access to customized, real-time Looker Studio or Tableau dashboards. These combine data from all your platforms into a single, easy-to-understand view of your marketing ecosystem.',
    category: 'results'
  },
  {
    id: 'faq-38',
    question: 'What happens if a campaign isn\'t performing?',
    answer: 'We run high-frequency testing. If a campaign underperforms, our data tells us exactly why. We immediately pause, analyze the bottleneck (creative, targeting, or landing page), and launch a revised iteration.',
    category: 'results'
  },
  {
    id: 'faq-39',
    question: 'Can you scale international campaigns?',
    answer: 'Absolutely. We have successfully launched and scaled brands across North America, Europe, and Asia. We understand localized nuances, linguistic adaptations, and regional advertising compliance.',
    category: 'results'
  },
  {
    id: 'faq-40',
    question: 'How do you prove ROI for brand awareness campaigns?',
    answer: 'Brand awareness is tracked via brand search volume lift, direct website traffic, micro-conversions, and reduced CPA on lower-funnel retargeting campaigns. We connect top-of-funnel metrics to bottom-line results.',
    category: 'results'
  }
];
