export async function seedServices(prisma: any) {
  const services = [
    // --- Web Development ---
    {
      name: 'Custom Web Application Development',
      slug: 'custom-web-app-development',
      category: 'Web Development',
      shortDescription: 'Build scalable, high-performance web applications tailored to your enterprise needs.',
      fullDescription: 'Our Custom Web Application Development service delivers robust, secure, and scalable solutions that drive business growth. Leveraging cutting-edge technologies like React, Next.js, and Node.js, we build web apps that are not just visually stunning but incredibly performant under heavy loads. Whether you need an internal enterprise portal or a consumer-facing SaaS product, our engineering team ensures flawless execution from architecture to deployment.',
      icon: 'Monitor',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800',
      features: ['Scalable Architecture', 'High Performance', 'Robust Security', 'API Integrations', 'Custom Dashboards'],
      deliverables: ['Source Code', 'Technical Documentation', 'Deployment Scripts', 'Quality Assurance Report'],
      process: [
        { step: 'Discovery', desc: 'Understanding your business requirements and technical constraints.' },
        { step: 'Architecture', desc: 'Designing scalable backend and frontend structures.' },
        { step: 'Development', desc: 'Agile sprints with regular client check-ins.' },
        { step: 'Deployment', desc: 'Seamless launch to your production environment.' }
      ],
      benefits: ['Increased Operational Efficiency', 'Future-proof Tech Stack', 'Enhanced User Engagement', 'Data Security'],
      faq: [
        { q: 'What technologies do you use?', a: 'We primarily use React, Next.js, Node.js, and PostgreSQL.' },
        { q: 'Do you provide ongoing support?', a: 'Yes, we offer comprehensive post-launch maintenance packages.' }
      ],
      relatedServices: ['ecommerce-platform-development', 'corporate-website-design'],
      startingPrice: '₹1,50,000',
      ctaText: 'Start Your Web Project',
      ctaLink: '/contact',
      displayOrder: 1
    },
    {
      name: 'E-Commerce Platform Development',
      slug: 'ecommerce-platform-development',
      category: 'Web Development',
      shortDescription: 'Launch powerful, conversion-optimized online stores that drive sales.',
      fullDescription: 'Transform your retail business with our bespoke e-commerce solutions. We build customized online stores using Shopify Plus, Magento, or headless commerce architectures. Our focus is on seamless user journeys, blazing-fast checkouts, and integrated inventory management to maximize your revenue potential.',
      icon: 'ShoppingCart',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800',
      features: ['Custom Storefront', 'Secure Checkout', 'Inventory Management', 'Payment Gateway Integration', 'Mobile Optimized'],
      deliverables: ['Fully Functional Store', 'Admin Panel Setup', 'Integration Docs', 'Training Manuals'],
      process: [
        { step: 'Strategy', desc: 'Mapping the customer journey and product catalog structure.' },
        { step: 'Design', desc: 'Creating high-converting product and checkout pages.' },
        { step: 'Development', desc: 'Building the store and integrating payment gateways.' },
        { step: 'Launch', desc: 'Final testing and going live with your new digital storefront.' }
      ],
      benefits: ['Higher Conversion Rates', 'Global Reach', 'Streamlined Operations', 'Enhanced Customer Loyalty'],
      faq: [
        { q: 'Can you migrate my existing store?', a: 'Absolutely, we handle seamless migrations from WooCommerce, Magento, and more.' }
      ],
      relatedServices: ['ecommerce-seo', 'conversion-rate-optimization'],
      startingPrice: '₹2,00,000',
      ctaText: 'Build Your Store',
      ctaLink: '/contact',
      displayOrder: 2
    },
    {
      name: 'Corporate Website Design',
      slug: 'corporate-website-design',
      category: 'Web Development',
      shortDescription: 'Elevate your brand presence with a premium corporate website.',
      fullDescription: 'Your website is your digital headquarters. We design and develop premium corporate websites that reflect your brand\'s authority and credibility. Utilizing modern design systems and headless CMS solutions, we ensure your marketing team has total control over content while delivering a lightning-fast experience for visitors.',
      icon: 'Globe',
      image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800',
      features: ['Premium Brand Integration', 'CMS Setup', 'SEO Ready', 'Fast Loading', 'Accessibility Compliant'],
      deliverables: ['Website Design Files', 'Live Website', 'CMS Training Session'],
      process: [
        { step: 'Brand Alignment', desc: 'Ensuring digital translation of your corporate identity.' },
        { step: 'Wireframing', desc: 'Structuring content for maximum impact.' },
        { step: 'Development', desc: 'Pixel-perfect implementation of approved designs.' }
      ],
      benefits: ['Stronger Brand Authority', 'Better Lead Generation', 'Easier Content Management'],
      faq: [
        { q: 'Which CMS do you recommend?', a: 'We typically recommend Sanity, Contentful, or WordPress depending on your needs.' }
      ],
      relatedServices: ['brand-identity-design-systems', 'comprehensive-technical-seo'],
      startingPrice: '₹1,20,000',
      ctaText: 'Elevate Your Brand',
      ctaLink: '/contact',
      displayOrder: 3
    },
    {
      name: 'Landing Page Optimization',
      slug: 'landing-page-optimization',
      category: 'Web Development',
      shortDescription: 'High-converting landing pages engineered for maximum ROI.',
      fullDescription: 'Stop wasting ad spend on poorly performing pages. Our Landing Page Optimization service combines psychological design principles with A/B testing framework to create pages that convert visitors into leads and customers. We focus on compelling copy, clear CTAs, and frictionless user experiences.',
      icon: 'Target',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      features: ['A/B Testing Ready', 'Conversion Copywriting', 'Heatmap Integration', 'Lightning Fast', 'Mobile First'],
      deliverables: ['Optimized Landing Page', 'Integration Setup', 'A/B Test Blueprint'],
      process: [
        { step: 'Audit', desc: 'Reviewing current performance and identifying bottlenecks.' },
        { step: 'Redesign', desc: 'Creating a conversion-focused layout and copy.' },
        { step: 'Implementation', desc: 'Building the page with tracking integrated.' }
      ],
      benefits: ['Lower Cost Per Acquisition', 'Higher ROI on Ad Spend', 'Better Lead Quality'],
      faq: [
        { q: 'How much can conversion rates improve?', a: 'Clients typically see a 20-50% lift in conversions within the first month.' }
      ],
      relatedServices: ['google-search-ads-management', 'conversion-rate-optimization'],
      startingPrice: '₹45,000',
      ctaText: 'Boost Conversions',
      ctaLink: '/contact',
      displayOrder: 4
    },
    {
      name: 'Progressive Web Apps (PWA)',
      slug: 'progressive-web-apps',
      category: 'Web Development',
      shortDescription: 'App-like experiences directly in the mobile browser.',
      fullDescription: 'Bridge the gap between web and mobile apps with Progressive Web Apps. We build PWAs that offer offline capabilities, push notifications, and device hardware access, delivering a native app-like experience without the friction of app store downloads.',
      icon: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      features: ['Offline Mode', 'Push Notifications', 'Installable', 'Fast Performance', 'Cross-Platform'],
      deliverables: ['PWA Source Code', 'Service Worker Setup', 'Manifest Configuration'],
      process: [
        { step: 'Planning', desc: 'Defining offline features and app shell architecture.' },
        { step: 'Development', desc: 'Implementing service workers and caching strategies.' },
        { step: 'Testing', desc: 'Ensuring seamless offline and online transitions.' }
      ],
      benefits: ['Increased Engagement', 'Lower Development Costs vs Native', 'Zero App Store Friction'],
      faq: [
        { q: 'Does it work on iOS and Android?', a: 'Yes, modern PWAs are supported across major platforms.' }
      ],
      relatedServices: ['custom-web-app-development', 'react-native-cross-platform-apps'],
      startingPrice: '₹1,80,000',
      ctaText: 'Build Your PWA',
      ctaLink: '/contact',
      displayOrder: 5
    },

    // --- App Development ---
    {
      name: 'iOS App Development',
      slug: 'ios-app-development',
      category: 'App Development',
      shortDescription: 'Premium, native iOS applications for the Apple ecosystem.',
      fullDescription: 'Tap into the lucrative Apple user base with our native iOS app development services. Our Swift and SwiftUI experts build beautiful, highly performant applications that strictly adhere to Apple\'s Human Interface Guidelines. From iPhones to Apple Watches, we deliver seamless experiences.',
      icon: 'Apple',
      image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800',
      features: ['Native Swift/Objective-C', 'CoreData Integration', 'Apple Pay Setup', 'Push Notifications', 'App Store Optimization'],
      deliverables: ['iOS Source Code', 'App Store Submission', 'API Documentation'],
      process: [
        { step: 'Prototyping', desc: 'Creating interactive iOS mockups.' },
        { step: 'Development', desc: 'Writing clean, native Swift code.' },
        { step: 'QA & App Store', desc: 'Rigorous testing and handling the submission process.' }
      ],
      benefits: ['Access to High-Value Users', 'Superior Performance', 'Enhanced Security'],
      faq: [
        { q: 'Do you handle the App Store submission?', a: 'Yes, we manage the entire review and launch process.' }
      ],
      relatedServices: ['mobile-app-ux-design', 'android-app-development'],
      startingPrice: '₹2,50,000',
      ctaText: 'Launch on iOS',
      ctaLink: '/contact',
      displayOrder: 6
    },
    {
      name: 'Android App Development',
      slug: 'android-app-development',
      category: 'App Development',
      shortDescription: 'Scalable and secure native Android applications.',
      fullDescription: 'Reach billions of users globally with a custom native Android app. Our Kotlin developers build robust applications tailored to perform flawlessly across the vast ecosystem of Android devices and screen sizes. We focus on material design, optimal battery usage, and secure data handling.',
      icon: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=800',
      features: ['Kotlin Native Development', 'Material Design', 'Offline Synchronization', 'In-App Purchases', 'Play Store Deployment'],
      deliverables: ['Android Source Code', 'Play Store Submission', 'Technical Architecture Doc'],
      process: [
        { step: 'UI/UX Design', desc: 'Adhering to Material Design principles.' },
        { step: 'Development', desc: 'Building the app using Kotlin and Jetpack.' },
        { step: 'Device Testing', desc: 'Testing across a multitude of Android devices.' }
      ],
      benefits: ['Massive Market Reach', 'High Customizability', 'Seamless Google Integration'],
      faq: [
        { q: 'Will the app work on older Android versions?', a: 'We typically support Android 8.0 and above, covering 95%+ of active devices.' }
      ],
      relatedServices: ['mobile-app-ux-design', 'ios-app-development'],
      startingPrice: '₹2,20,000',
      ctaText: 'Build for Android',
      ctaLink: '/contact',
      displayOrder: 7
    },
    {
      name: 'React Native Cross-Platform Apps',
      slug: 'react-native-cross-platform-apps',
      category: 'App Development',
      shortDescription: 'One codebase, two platforms. Efficient mobile app development.',
      fullDescription: 'Accelerate your time-to-market and reduce development costs with our React Native solutions. We build a single, robust codebase that deploys as native-feeling applications on both iOS and Android. Enjoy near-native performance without paying for two separate development teams.',
      icon: 'Layers',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=800',
      features: ['Shared Codebase', 'Fast Refresh', 'Native Modules', 'Over-The-Air Updates', 'Cost-Effective'],
      deliverables: ['React Native Source Code', 'iOS & Android Builds', 'Store Submissions'],
      process: [
        { step: 'Shared Architecture', desc: 'Designing a structure that works for both platforms.' },
        { step: 'Development', desc: 'Coding with React Native and custom native bridges.' },
        { step: 'Dual QA', desc: 'Simultaneous testing on Apple and Android hardware.' }
      ],
      benefits: ['Faster Time to Market', 'Lower Maintenance Costs', 'Consistent UI Across Platforms'],
      faq: [
        { q: 'Is React Native slower than native?', a: 'For most business apps, the performance difference is imperceptible to users.' }
      ],
      relatedServices: ['custom-web-app-development', 'mobile-app-ux-design'],
      startingPrice: '₹3,00,000',
      ctaText: 'Develop Faster',
      ctaLink: '/contact',
      displayOrder: 8
    },
    {
      name: 'Flutter Mobile Development',
      slug: 'flutter-mobile-development',
      category: 'App Development',
      shortDescription: 'Beautiful, natively compiled multi-platform applications.',
      fullDescription: 'Create visually stunning, high-performance apps for mobile, web, and desktop from a single codebase using Google\'s Flutter framework. Our Dart experts craft highly customized, fluid interfaces that operate at 60fps, providing an unparalleled user experience across all devices.',
      icon: 'Feather',
      image: 'https://images.unsplash.com/photo-1616469829581-73993eb86b02?auto=format&fit=crop&q=80&w=800',
      features: ['Single Codebase', 'Custom UI/UX', '60fps Performance', 'Web & Desktop Ready', 'Rapid Development'],
      deliverables: ['Flutter Source Code', 'Multi-Platform Builds', 'Comprehensive Testing Report'],
      process: [
        { step: 'Widget Design', desc: 'Creating custom, reusable UI components.' },
        { step: 'Development', desc: 'Building logic and state management with Dart.' },
        { step: 'Deployment', desc: 'Launching across iOS, Android, and Web.' }
      ],
      benefits: ['Stunning Animations', 'Reduced Development Time', 'Broad Platform Support'],
      faq: [
        { q: 'Why choose Flutter over React Native?', a: 'Flutter is often better for highly customized, complex UI animations that need to look identical on all platforms.' }
      ],
      relatedServices: ['react-native-cross-platform-apps', 'brand-identity-design-systems'],
      startingPrice: '₹2,80,000',
      ctaText: 'Explore Flutter',
      ctaLink: '/contact',
      displayOrder: 9
    },
    {
      name: 'Enterprise Mobility Solutions',
      slug: 'enterprise-mobility-solutions',
      category: 'App Development',
      shortDescription: 'Secure mobile tools to empower your workforce.',
      fullDescription: 'Digitally transform your internal operations with our Enterprise Mobility Solutions. We build secure, compliant, and deeply integrated mobile applications designed to increase employee productivity, streamline logistics, and manage corporate data on the go.',
      icon: 'Briefcase',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      features: ['MDM Integration', 'Enterprise-Grade Security', 'Legacy System Integration', 'Offline Sync', 'Role-Based Access'],
      deliverables: ['Enterprise App', 'Security Audit Report', 'Admin Dashboard', 'Deployment via Apple Business Manager / Google Enterprise'],
      process: [
        { step: 'Security Audit', desc: 'Defining data security and compliance requirements.' },
        { step: 'Development', desc: 'Building app with deep internal API integrations.' },
        { step: 'Internal Rollout', desc: 'Phased deployment to your workforce.' }
      ],
      benefits: ['Increased Productivity', 'Secure Data Handling', 'Streamlined Internal Processes'],
      faq: [
        { q: 'How do you handle distribution?', a: 'We use Apple Business Manager, Google Play Managed Enterprise, or internal MDMs.' }
      ],
      relatedServices: ['custom-web-app-development', 'crm-hubspot-implementation'],
      startingPrice: '₹4,00,000',
      ctaText: 'Empower Your Team',
      ctaLink: '/contact',
      displayOrder: 10
    },

    // --- UI/UX Design ---
    {
      name: 'Comprehensive UI/UX Audit',
      slug: 'comprehensive-ui-ux-audit',
      category: 'UI/UX Design',
      shortDescription: 'Identify friction points and optimize your digital product\'s experience.',
      fullDescription: 'Is your app suffering from high churn or low engagement? Our Comprehensive UI/UX Audit uncovers usability issues, navigational flaws, and visual inconsistencies. We provide an actionable roadmap detailing exactly how to improve user satisfaction and conversion rates through heuristic evaluation and user testing.',
      icon: 'Search',
      image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800',
      features: ['Heuristic Evaluation', 'Usability Testing', 'Accessibility Check', 'Competitor Benchmarking', 'Conversion Funnel Analysis'],
      deliverables: ['Detailed Audit Report', 'Actionable Improvement Roadmap', 'Video Walkthrough of Issues'],
      process: [
        { step: 'Discovery', desc: 'Understanding your user demographics and business goals.' },
        { step: 'Evaluation', desc: 'Expert review against standard usability heuristics.' },
        { step: 'Reporting', desc: 'Presenting findings and strategic recommendations.' }
      ],
      benefits: ['Actionable Insights', 'Improved User Retention', 'Higher Conversion Rates'],
      faq: [
        { q: 'How long does an audit take?', a: 'Typically 1-2 weeks depending on the complexity of the platform.' }
      ],
      relatedServices: ['web-app-interface-design', 'conversion-rate-optimization'],
      startingPrice: '₹50,000',
      ctaText: 'Audit Your Product',
      ctaLink: '/contact',
      displayOrder: 11
    },
    {
      name: 'Web App Interface Design',
      slug: 'web-app-interface-design',
      category: 'UI/UX Design',
      shortDescription: 'Intuitive, beautiful, and highly functional web app interfaces.',
      fullDescription: 'We design web applications that people actually love to use. Our UI/UX team focuses on reducing cognitive load, organizing complex data structures logically, and wrapping it all in a visually stunning, modern aesthetic. We deliver pixel-perfect Figma prototypes ready for development.',
      icon: 'Layout',
      image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&q=80&w=800',
      features: ['User Flow Mapping', 'Wireframing', 'High-Fidelity UI', 'Interactive Prototyping', 'Design Handoff Assets'],
      deliverables: ['Figma Source Files', 'Interactive Prototype', 'Design System Basics'],
      process: [
        { step: 'Research', desc: 'User persona creation and journey mapping.' },
        { step: 'Wireframing', desc: 'Establishing structural hierarchy without visual bias.' },
        { step: 'Visual Design', desc: 'Applying brand aesthetics and micro-interactions.' }
      ],
      benefits: ['Reduced Support Tickets', 'Faster User Onboarding', 'Premium Brand Perception'],
      faq: [
        { q: 'Do you provide HTML/CSS?', a: 'This service provides design files (Figma). Development is offered separately.' }
      ],
      relatedServices: ['custom-web-app-development', 'wireframing-prototyping'],
      startingPrice: '₹1,20,000',
      ctaText: 'Design Your Web App',
      ctaLink: '/contact',
      displayOrder: 12
    },
    {
      name: 'Mobile App UX Design',
      slug: 'mobile-app-ux-design',
      category: 'UI/UX Design',
      shortDescription: 'Engaging, thumb-friendly mobile app experiences.',
      fullDescription: 'Mobile design requires a specialized approach focusing on touch targets, gesture navigation, and limited screen real estate. Our Mobile App UX Design service crafts intuitive and addictive interfaces for iOS and Android, ensuring your app feels native, fast, and user-friendly.',
      icon: 'Smartphone',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
      features: ['iOS & Android Guidelines', 'Gesture Mapping', 'Thumb-Zone Optimization', 'Dark Mode Design', 'Micro-interactions'],
      deliverables: ['Mobile UI Screens', 'Clickable Prototype', 'Animation Specs'],
      process: [
        { step: 'UX Mapping', desc: 'Defining seamless mobile user journeys.' },
        { step: 'UI Design', desc: 'Designing screen-by-screen aesthetics.' },
        { step: 'Prototyping', desc: 'Linking screens for realistic user testing.' }
      ],
      benefits: ['Higher App Store Ratings', 'Increased Daily Active Users', 'Lower Abandonment Rates'],
      faq: [
        { q: 'Do you design for both platforms simultaneously?', a: 'Yes, we create unified experiences that respect platform-specific guidelines.' }
      ],
      relatedServices: ['ios-app-development', 'android-app-development'],
      startingPrice: '₹1,00,000',
      ctaText: 'Design Mobile Experience',
      ctaLink: '/contact',
      displayOrder: 13
    },
    {
      name: 'Wireframing & Prototyping',
      slug: 'wireframing-prototyping',
      category: 'UI/UX Design',
      shortDescription: 'Validate your digital product idea before writing a line of code.',
      fullDescription: 'Save thousands in development costs by visualizing and testing your product concept first. We create low to high-fidelity wireframes and clickable prototypes that simulate the final product. Perfect for pitching to investors, aligning stakeholders, and gathering early user feedback.',
      icon: 'PenTool',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800',
      features: ['Low-Fidelity Sketches', 'High-Fidelity Wireframes', 'Clickable Prototypes', 'User Testing Ready', 'Rapid Iteration'],
      deliverables: ['Wireframe Documents', 'Interactive Prototype Link', 'Feedback Summary'],
      process: [
        { step: 'Concepting', desc: 'Brainstorming core functionalities and layouts.' },
        { step: 'Drafting', desc: 'Creating structural wireframes.' },
        { step: 'Linking', desc: 'Connecting screens into a navigable prototype.' }
      ],
      benefits: ['Risk Mitigation', 'Faster Stakeholder Buy-in', 'Clear Developer Roadmap'],
      faq: [
        { q: 'Can this be used for investor pitches?', a: 'Absolutely, high-fidelity prototypes are highly effective for fundraising.' }
      ],
      relatedServices: ['web-app-interface-design', 'mobile-app-ux-design'],
      startingPrice: '₹60,000',
      ctaText: 'Prototype Your Idea',
      ctaLink: '/contact',
      displayOrder: 14
    },
    {
      name: 'Brand Identity & Design Systems',
      slug: 'brand-identity-design-systems',
      category: 'UI/UX Design',
      shortDescription: 'Cohesive, scalable design languages for your digital presence.',
      fullDescription: 'Inconsistency kills trust. We build comprehensive Brand Identities and Digital Design Systems that serve as a single source of truth for your designers and developers. From color tokens and typography to complex component libraries, we ensure your brand looks premium and consistent everywhere.',
      icon: 'Palette',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
      features: ['Logo & Branding', 'Color Palette & Typography', 'Component Library', 'Usage Guidelines', 'Figma Variables Setup'],
      deliverables: ['Brand Book', 'Figma Design System', 'Exported Assets'],
      process: [
        { step: 'Brand Strategy', desc: 'Defining brand voice and visual direction.' },
        { step: 'Asset Creation', desc: 'Designing core brand elements.' },
        { step: 'Systematization', desc: 'Building reusable UI components in Figma.' }
      ],
      benefits: ['Faster Design Workflow', 'Consistent Brand Experience', 'Easier Developer Handoff'],
      faq: [
        { q: 'Is a design system overkill for a startup?', a: 'Not at all. Starting with a system prevents massive design debt later.' }
      ],
      relatedServices: ['corporate-website-design', 'custom-web-app-development'],
      startingPrice: '₹1,50,000',
      ctaText: 'Build Your Brand',
      ctaLink: '/contact',
      displayOrder: 15
    },

    // --- SEO ---
    {
      name: 'Comprehensive Technical SEO',
      slug: 'comprehensive-technical-seo',
      category: 'SEO',
      shortDescription: 'Fix under-the-hood issues preventing your site from ranking.',
      fullDescription: 'Great content cannot rank on a broken foundation. Our Technical SEO service performs deep crawls of your infrastructure to identify and fix indexing issues, optimize Core Web Vitals, fix broken links, and implement schema markup. We ensure search engines can effortlessly crawl, understand, and rank your website.',
      icon: 'Code',
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=800',
      features: ['Site Speed Optimization', 'Schema Markup', 'Crawl Error Fixes', 'XML Sitemap Management', 'Mobile Usability Fixes'],
      deliverables: ['Technical Audit Report', 'Implementation of Fixes', 'Before/After Performance Metrics'],
      process: [
        { step: 'Deep Crawl', desc: 'Using advanced tools to scan entire site architecture.' },
        { step: 'Prioritization', desc: 'Ranking issues by SEO impact.' },
        { step: 'Implementation', desc: 'Working with devs to deploy fixes.' }
      ],
      benefits: ['Higher Organic Rankings', 'Better User Experience', 'Increased Crawl Budget'],
      faq: [
        { q: 'Do you fix the code or just provide a report?', a: 'We can do both. We prefer to handle the implementation directly.' }
      ],
      relatedServices: ['corporate-website-design', 'content-marketing-seo'],
      startingPrice: '₹75,000/mo',
      ctaText: 'Fix Your Technical SEO',
      ctaLink: '/contact',
      displayOrder: 16
    },
    {
      name: 'Local SEO Optimization',
      slug: 'local-seo-optimization',
      category: 'SEO',
      shortDescription: 'Dominate local search results and Google Maps.',
      fullDescription: 'Capture high-intent customers in your geographic area. We optimize your Google Business Profile, build high-authority local citations, and generate localized content to ensure you appear in the coveted "Local Pack". Perfect for clinics, retail stores, real estate, and local service providers.',
      icon: 'MapPin',
      image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=800',
      features: ['Google Business Profile Setup', 'Local Citation Building', 'Review Management Strategy', 'Localized Content Creation', 'Local Link Building'],
      deliverables: ['GBP Optimization', 'Monthly Citation Report', 'Local Ranking Tracker'],
      process: [
        { step: 'GBP Claim & Setup', desc: 'Optimizing your core Google listing.' },
        { step: 'Directory Submissions', desc: 'Ensuring NAP consistency across the web.' },
        { step: 'Ongoing Local Content', desc: 'Publishing area-specific pages and posts.' }
      ],
      benefits: ['Increased Foot Traffic', 'More Phone Calls', 'Dominate Local Competitors'],
      faq: [
        { q: 'How long until I see local results?', a: 'Local SEO often shows improvements within 30-60 days.' }
      ],
      relatedServices: ['google-search-ads-management', 'conversion-rate-optimization'],
      startingPrice: '₹40,000/mo',
      ctaText: 'Dominate Local Search',
      ctaLink: '/contact',
      displayOrder: 17
    },
    {
      name: 'E-Commerce SEO',
      slug: 'ecommerce-seo',
      category: 'SEO',
      shortDescription: 'Drive high-intent organic traffic to your product pages.',
      fullDescription: 'E-commerce SEO requires managing thousands of URLs, facet navigation, and product schema. We implement advanced structural SEO for large stores, optimize category and product descriptions, and manage out-of-stock URL strategies to maximize organic revenue for your online store.',
      icon: 'ShoppingBag',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=800',
      features: ['Product Schema Markup', 'Faceted Navigation Optimization', 'Category Page SEO', 'Image Optimization', 'Cannibalization Fixes'],
      deliverables: ['E-Commerce SEO Strategy', 'On-page Optimizations', 'Revenue Tracking Dashboard'],
      process: [
        { step: 'Architecture Review', desc: 'Fixing URL structures and pagination.' },
        { step: 'Category Optimization', desc: 'Ranking high-volume category hubs.' },
        { step: 'Product Optimization', desc: 'Targeting long-tail buyer keywords.' }
      ],
      benefits: ['Sustainable Revenue Growth', 'Lower Customer Acquisition Cost', 'Higher Average Order Value'],
      faq: [
        { q: 'Can you handle stores with 10k+ products?', a: 'Yes, we specialize in programmatic SEO strategies for large catalogs.' }
      ],
      relatedServices: ['ecommerce-platform-development', 'link-building-strategy'],
      startingPrice: '₹90,000/mo',
      ctaText: 'Grow Organic Sales',
      ctaLink: '/contact',
      displayOrder: 18
    },
    {
      name: 'Content Marketing & SEO',
      slug: 'content-marketing-seo',
      category: 'SEO',
      shortDescription: 'Data-driven content that ranks, educates, and converts.',
      fullDescription: 'We don\'t just write blog posts; we create semantic topical authority. Our Content Marketing service involves in-depth keyword research, competitor gap analysis, and the creation of long-form, high-quality assets (blogs, whitepapers, guides) designed to rank on page 1 and drive qualified leads.',
      icon: 'FileText',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=800',
      features: ['Keyword Research', 'Topic Clustering', 'Long-form Content Creation', 'On-Page Optimization', 'Content Refreshing'],
      deliverables: ['Monthly Content Calendar', '4-8 SEO Optimized Articles', 'Performance Reporting'],
      process: [
        { step: 'Strategy', desc: 'Building a topical map and keyword plan.' },
        { step: 'Creation', desc: 'Writing expert-level, engaging content.' },
        { step: 'Optimization', desc: 'Implementing internal links and meta data.' }
      ],
      benefits: ['Establish Industry Authority', 'Compounding Traffic Growth', 'Educate Prospects'],
      faq: [
        { q: 'Who writes the content?', a: 'We use industry-specific expert writers and subject matter experts.' }
      ],
      relatedServices: ['link-building-strategy', 'email-marketing-automation'],
      startingPrice: '₹80,000/mo',
      ctaText: 'Scale Your Content',
      ctaLink: '/contact',
      displayOrder: 19
    },
    {
      name: 'Link Building Strategy',
      slug: 'link-building-strategy',
      category: 'SEO',
      shortDescription: 'Earn high-authority backlinks to boost domain rating.',
      fullDescription: 'Backlinks remain a top ranking factor. We employ ethical, white-hat outreach strategies to secure high-quality backlinks from authoritative websites in your niche. Through digital PR, guest posting, and broken link building, we safely increase your Domain Authority and push your key pages to the top of Google.',
      icon: 'Link',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      features: ['Manual Outreach', 'Digital PR', 'Guest Posting', 'Unlinked Brand Mentions', 'Toxic Link Disavowal'],
      deliverables: ['Monthly Link Report', 'Guaranteed DA/DR Metrics', 'Outreach Transparency'],
      process: [
        { step: 'Prospecting', desc: 'Finding highly relevant, authoritative websites.' },
        { step: 'Outreach', desc: 'Pitching content and building relationships.' },
        { step: 'Placement', desc: 'Securing permanent, do-follow links.' }
      ],
      benefits: ['Increased Domain Authority', 'Faster Indexing', 'Massive Ranking Boosts'],
      faq: [
        { q: 'Do you use PBNs?', a: 'Never. We only use 100% white-hat manual outreach.' }
      ],
      relatedServices: ['content-marketing-seo', 'comprehensive-technical-seo'],
      startingPrice: '₹1,00,000/mo',
      ctaText: 'Build Authority',
      ctaLink: '/contact',
      displayOrder: 20
    },

    // --- Paid Advertising (Ads) ---
    {
      name: 'Google Search Ads Management',
      slug: 'google-search-ads-management',
      category: 'Paid Advertising',
      shortDescription: 'Capture high-intent searches with precision Google Ads.',
      fullDescription: 'Be there when your customers are searching for you. We build and manage highly structured Google Ads campaigns focused on minimizing wasted spend and maximizing ROAS. From complex keyword bidding strategies to compelling ad copy and negative keyword management, we turn search traffic into revenue.',
      icon: 'MousePointerClick',
      image: 'https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?auto=format&fit=crop&q=80&w=800',
      features: ['SKAG/STAG Account Structures', 'Advanced Bidding Strategies', 'Ad Copy Testing', 'Negative Keyword Mining', 'Conversion Tracking Setup'],
      deliverables: ['Campaign Setup', 'Ongoing Optimization', 'Live Performance Dashboard'],
      process: [
        { step: 'Research', desc: 'Keyword mapping and competitor ad analysis.' },
        { step: 'Build', desc: 'Structuring campaigns, ad groups, and writing copy.' },
        { step: 'Optimize', desc: 'Daily/weekly bid adjustments and A/B testing.' }
      ],
      benefits: ['Immediate Traffic', 'High Conversion Intent', 'Scalable Lead Gen'],
      faq: [
        { q: 'What budget do I need?', a: 'We recommend a minimum ad spend of ₹1,00,000/mo for optimal data collection.' }
      ],
      relatedServices: ['landing-page-optimization', 'conversion-rate-optimization'],
      startingPrice: '₹50,000/mo (Mgmt Fee)',
      ctaText: 'Launch Google Ads',
      ctaLink: '/contact',
      displayOrder: 21
    },
    {
      name: 'Facebook & Instagram Ads',
      slug: 'facebook-instagram-ads',
      category: 'Paid Advertising',
      shortDescription: 'Scroll-stopping creative and hyper-targeted social campaigns.',
      fullDescription: 'Drive massive awareness and direct sales with Meta Ads. We combine stunning visual creatives with advanced audience targeting (Lookalikes, Custom Audiences, Retargeting) to put your brand in front of the right people. Our continuous testing framework ensures we find winning creatives faster.',
      icon: 'Instagram',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800',
      features: ['Creative Strategy', 'Audience Building', 'CAPI Integration', 'Dynamic Product Ads', 'A/B Testing'],
      deliverables: ['Ad Creatives (Image/Video)', 'Campaign Management', 'Meta Pixel Setup'],
      process: [
        { step: 'Creative Production', desc: 'Designing high-converting ad visuals.' },
        { step: 'Audience Targeting', desc: 'Setting up precise demographics and lookalikes.' },
        { step: 'Scaling', desc: 'Increasing budget on winning ad sets efficiently.' }
      ],
      benefits: ['Massive Brand Awareness', 'High ROI for E-commerce', 'Visual Storytelling'],
      faq: [
        { q: 'Do you create the images and videos?', a: 'Yes, our internal design team handles all ad creatives.' }
      ],
      relatedServices: ['ecommerce-seo', 'retargeting-campaigns'],
      startingPrice: '₹60,000/mo (Mgmt Fee)',
      ctaText: 'Scale on Social',
      ctaLink: '/contact',
      displayOrder: 22
    },
    {
      name: 'LinkedIn B2B Advertising',
      slug: 'linkedin-b2b-advertising',
      category: 'Paid Advertising',
      shortDescription: 'Target decision-makers and generate high-value B2B leads.',
      fullDescription: 'Stop guessing and start targeting exactly who you want. LinkedIn Ads allow us to target by job title, company size, industry, and seniority. We manage Lead Gen Forms, Sponsored Content, and InMail campaigns to fill your sales pipeline with qualified B2B prospects.',
      icon: 'Linkedin',
      image: 'https://images.unsplash.com/photo-1611944212129-29977ae1398c?auto=format&fit=crop&q=80&w=800',
      features: ['Account-Based Marketing (ABM)', 'Lead Gen Forms', 'InMail Campaigns', 'Job Title Targeting', 'CRM Integration'],
      deliverables: ['Campaign Setup', 'Ad Copy & Creative', 'Lead Routing to CRM'],
      process: [
        { step: 'Audience Definition', desc: 'Pinpointing your exact B2B buyer persona.' },
        { step: 'Offer Creation', desc: 'Developing lead magnets (Whitepapers, Webinars).' },
        { step: 'Execution', desc: 'Running and optimizing campaigns for CPL.' }
      ],
      benefits: ['Highly Qualified Leads', 'Direct Access to C-Suite', 'Perfect for High-Ticket B2B'],
      faq: [
        { q: 'Isn\'t LinkedIn expensive?', a: 'Clicks are higher, but the lead quality and deal sizes make the ROI exceptional for B2B.' }
      ],
      relatedServices: ['crm-hubspot-implementation', 'sales-pipeline-automation'],
      startingPrice: '₹65,000/mo (Mgmt Fee)',
      ctaText: 'Generate B2B Leads',
      ctaLink: '/contact',
      displayOrder: 23
    },
    {
      name: 'YouTube Video Ads',
      slug: 'youtube-video-ads',
      category: 'Paid Advertising',
      shortDescription: 'Engage audiences visually and drive action through video.',
      fullDescription: 'Harness the power of the world\'s second-largest search engine. We create and manage YouTube TrueView and bumper ad campaigns. By targeting specific channels, viewer interests, and search terms, we deliver your video message to highly engaged audiences at a fraction of traditional TV costs.',
      icon: 'Youtube',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800',
      features: ['In-Stream Ads', 'Bumper Ads', 'Placement Targeting', 'Brand Lift Measurement', 'Remarketing Lists'],
      deliverables: ['Video Strategy', 'Campaign Management', 'View-Through Analytics'],
      process: [
        { step: 'Targeting Strategy', desc: 'Identifying relevant channels and search terms.' },
        { step: 'Launch', desc: 'Deploying various video formats.' },
        { step: 'Optimization', desc: 'Adjusting bids based on view rates and conversions.' }
      ],
      benefits: ['Cheap Cost Per View', 'High Brand Recall', 'Visual Product Demonstration'],
      faq: [
        { q: 'Do you offer video production?', a: 'Yes, we can provide full script-to-screen video production services as an add-on.' }
      ],
      relatedServices: ['google-search-ads-management', 'brand-identity-design-systems'],
      startingPrice: '₹50,000/mo (Mgmt Fee)',
      ctaText: 'Launch on YouTube',
      ctaLink: '/contact',
      displayOrder: 24
    },
    {
      name: 'Omnichannel Retargeting',
      slug: 'retargeting-campaigns',
      category: 'Paid Advertising',
      shortDescription: 'Bring bounced visitors back to convert across the web.',
      fullDescription: '98% of visitors won\'t convert on their first visit. Our Omnichannel Retargeting service ensures your brand follows them across the internet—on Facebook, Google Display Network, YouTube, and LinkedIn. We use dynamic ads to show them the exact products or services they viewed, drastically increasing your overall conversion rate.',
      icon: 'Repeat',
      image: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=800',
      features: ['Dynamic Product Ads', 'Cross-Platform Sync', 'Frequency Capping', 'Cart Abandonment Ads', 'Custom Audience Rules'],
      deliverables: ['Tracking Setup', 'Dynamic Creatives', 'Multi-channel Campaign Setup'],
      process: [
        { step: 'Pixel/Tag Setup', desc: 'Ensuring flawless tracking across your site.' },
        { step: 'Segmentation', desc: 'Creating lists (Cart abandoners, blog readers, etc).' },
        { step: 'Activation', desc: 'Deploying tailored ads to each segment.' }
      ],
      benefits: ['Highest ROI of all Ads', 'Maximized Ad Spend Efficiency', 'Top-of-mind Brand Presence'],
      faq: [
        { q: 'Will this annoy my customers?', a: 'We strictly implement frequency caps to prevent ad fatigue and brand annoyance.' }
      ],
      relatedServices: ['ecommerce-seo', 'landing-page-optimization'],
      startingPrice: '₹40,000/mo (Mgmt Fee)',
      ctaText: 'Start Retargeting',
      ctaLink: '/contact',
      displayOrder: 25
    },

    // --- AI Chatbots ---
    {
      name: 'Customer Support AI Bot',
      slug: 'customer-support-ai-bot',
      category: 'AI Chatbots',
      shortDescription: 'Automate 80% of your customer support with intelligent AI.',
      fullDescription: 'Stop paying human agents to answer repetitive questions. We build custom-trained AI chatbots utilizing LLMs (like GPT-4) integrated with your company\'s knowledge base. It provides instant, accurate, 24/7 support in natural language, seamlessly escalating complex issues to human agents only when necessary.',
      icon: 'MessageSquare',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800',
      features: ['GPT-4 Integration', 'Knowledge Base Training', 'Human Handoff', 'Omnichannel (Web, WhatsApp, FB)', 'Sentiment Analysis'],
      deliverables: ['Custom AI Model', 'Widget Integration', 'Analytics Dashboard', 'Staff Training'],
      process: [
        { step: 'Data Ingestion', desc: 'Feeding your FAQs and docs to the AI.' },
        { step: 'Bot Persona Design', desc: 'Tuning tone of voice to match your brand.' },
        { step: 'Testing & Launch', desc: 'Rigorous testing before going live.' }
      ],
      benefits: ['24/7 Availability', 'Drastically Reduced Support Costs', 'Instant Resolution Times'],
      faq: [
        { q: 'Can it hallucinate or give wrong info?', a: 'We use RAG (Retrieval-Augmented Generation) to strictly confine the bot to your provided knowledge base.' }
      ],
      relatedServices: ['lead-generation-chatbot', 'multilingual-ai-assistants'],
      startingPrice: '₹1,50,000',
      ctaText: 'Automate Support',
      ctaLink: '/contact',
      displayOrder: 26
    },
    {
      name: 'Lead Generation Chatbot',
      slug: 'lead-generation-chatbot',
      category: 'AI Chatbots',
      shortDescription: 'Engage visitors and qualify leads interactively, 24/7.',
      fullDescription: 'Transform passive website traffic into qualified leads. Our conversational Lead Generation bots interact with visitors, ask qualifying questions, collect contact information, and automatically route high-value leads directly into your CRM or to your sales team\'s calendar.',
      icon: 'UserPlus',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800',
      features: ['Lead Qualification Flow', 'Calendar Integration', 'CRM Sync', 'Conversational Forms', 'Exit-Intent Triggers'],
      deliverables: ['Lead Bot Setup', 'CRM Integration', 'A/B Testing of Flows'],
      process: [
        { step: 'Scripting', desc: 'Designing the optimal conversational flow.' },
        { step: 'Integration', desc: 'Connecting with Calendly, HubSpot, or Salesforce.' },
        { step: 'Deployment', desc: 'Installing on high-traffic landing pages.' }
      ],
      benefits: ['Higher Conversion Rates than Forms', 'Instant Lead Qualification', 'Fills Sales Pipeline Automatically'],
      faq: [
        { q: 'Can it book meetings?', a: 'Yes, it can integrate with calendars to let qualified leads book instantly.' }
      ],
      relatedServices: ['landing-page-optimization', 'crm-hubspot-implementation'],
      startingPrice: '₹1,20,000',
      ctaText: 'Capture More Leads',
      ctaLink: '/contact',
      displayOrder: 27
    },
    {
      name: 'E-Commerce Recommendation Bot',
      slug: 'ecommerce-recommendation-bot',
      category: 'AI Chatbots',
      shortDescription: 'An AI personal shopper for your online store.',
      fullDescription: 'Increase Average Order Value (AOV) and conversion rates by providing personalized shopping assistance. Our AI e-commerce bot connects to your product catalog, answers product-specific questions, and makes personalized cross-sell and up-sell recommendations based on natural language queries.',
      icon: 'ShoppingBag',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800',
      features: ['Catalog Sync', 'Dynamic Recommendations', 'Cart Recovery', 'Order Tracking Info', 'Multilingual Setup'],
      deliverables: ['Shopify/WooCommerce Integration', 'AI Model Training', 'Performance Tracking'],
      process: [
        { step: 'Catalog Sync', desc: 'Integrating your product data feed.' },
        { step: 'Logic Rules', desc: 'Setting up cross-sell and up-sell parameters.' },
        { step: 'Launch', desc: 'Deploying the digital personal shopper.' }
      ],
      benefits: ['Increased AOV', 'Reduced Cart Abandonment', 'Enhanced Shopping Experience'],
      faq: [
        { q: 'Does it work with Shopify?', a: 'Yes, we have deep, seamless integrations for Shopify and Shopify Plus.' }
      ],
      relatedServices: ['ecommerce-platform-development', 'ecommerce-seo'],
      startingPrice: '₹1,80,000',
      ctaText: 'Boost E-Com Sales',
      ctaLink: '/contact',
      displayOrder: 28
    },
    {
      name: 'Internal HR/IT AI Assistant',
      slug: 'internal-hr-it-ai-assistant',
      category: 'AI Chatbots',
      shortDescription: 'Streamline internal ops and empower your employees.',
      fullDescription: 'Free up your HR and IT departments from repetitive queries. We build secure internal AI assistants that integrate with Slack or Microsoft Teams. Employees can ask about PTO policies, reset passwords, or find internal documents instantly using natural language.',
      icon: 'Users',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
      features: ['Slack/Teams Integration', 'Enterprise Security', 'Policy Database Search', 'Ticketing System Sync', 'Automated Workflows'],
      deliverables: ['Internal Bot Deployment', 'Security Compliance Check', 'Admin Dashboard'],
      process: [
        { step: 'Policy Ingestion', desc: 'Securely uploading internal documents.' },
        { step: 'Workflow Setup', desc: 'Automating tasks like password resets.' },
        { step: 'Rollout', desc: 'Training staff on how to use the assistant.' }
      ],
      benefits: ['Reduced IT Ticket Volume', 'Faster Employee Onboarding', 'Increased Productivity'],
      faq: [
        { q: 'Is our internal data secure?', a: 'Yes, we use enterprise-grade LLM APIs with strict zero-retention data policies.' }
      ],
      relatedServices: ['enterprise-mobility-solutions', 'custom-web-app-development'],
      startingPrice: '₹2,00,000',
      ctaText: 'Automate Internal Ops',
      ctaLink: '/contact',
      displayOrder: 29
    },

    // --- CRM Automation ---
    {
      name: 'HubSpot CRM Implementation',
      slug: 'crm-hubspot-implementation',
      category: 'CRM Automation',
      shortDescription: 'End-to-end setup and customization of HubSpot CRM.',
      fullDescription: 'Maximize your HubSpot investment. We handle complex HubSpot setups, data migrations from legacy systems, and custom object configurations. We ensure your sales, marketing, and service hubs are perfectly aligned and tailored to your specific business processes.',
      icon: 'Database',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      features: ['Data Migration', 'Custom Properties & Objects', 'Dashboard Creation', 'Sales Pipeline Setup', 'Team Training'],
      deliverables: ['Fully Configured HubSpot', 'Migration Report', 'Standard Operating Procedures (SOPs)'],
      process: [
        { step: 'Process Mapping', desc: 'Understanding your sales and marketing flow.' },
        { step: 'Configuration', desc: 'Setting up the CRM architecture.' },
        { step: 'Migration & Training', desc: 'Moving data and onboarding your team.' }
      ],
      benefits: ['Single Source of Truth', 'Better Sales Visibility', 'Higher Adoption Rates'],
      faq: [
        { q: 'Do you help with HubSpot licensing?', a: 'Yes, as a partner agency, we can often secure better terms or onboarding waivers.' }
      ],
      relatedServices: ['marketing-automation-workflows', 'sales-pipeline-automation'],
      startingPrice: '₹1,50,000',
      ctaText: 'Setup HubSpot',
      ctaLink: '/contact',
      displayOrder: 30
    },
    {
      name: 'Salesforce Customization',
      slug: 'salesforce-customization',
      category: 'CRM Automation',
      shortDescription: 'Tailor Salesforce to fit your complex enterprise workflows.',
      fullDescription: 'Salesforce is powerful but complex. Our certified Salesforce developers customize your instance to match your exact business logic. From Apex coding and Lightning component development to complex API integrations, we make Salesforce work for you, not against you.',
      icon: 'Cloud',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800',
      features: ['Apex Development', 'Lightning Web Components', 'API Integrations', 'Process Builder', 'Custom Reporting'],
      deliverables: ['Custom Codebase', 'Integration Sandbox', 'User Acceptance Testing'],
      process: [
        { step: 'Requirement Gathering', desc: 'Detailed scoping of technical needs.' },
        { step: 'Development', desc: 'Coding and configuring in a Sandbox.' },
        { step: 'Deployment', desc: 'Pushing changes to production seamlessly.' }
      ],
      benefits: ['Highly Scalable System', 'Automated Complex Logic', 'Improved Data Integrity'],
      faq: [
        { q: 'Can you integrate Salesforce with our proprietary software?', a: 'Yes, we specialize in complex REST/SOAP API integrations.' }
      ],
      relatedServices: ['enterprise-mobility-solutions', 'custom-web-app-development'],
      startingPrice: '₹3,00,000',
      ctaText: 'Customize Salesforce',
      ctaLink: '/contact',
      displayOrder: 31
    },
    {
      name: 'Marketing Automation Workflows',
      slug: 'marketing-automation-workflows',
      category: 'CRM Automation',
      shortDescription: 'Nurture leads automatically while you sleep.',
      fullDescription: 'Stop letting leads slip through the cracks. We build complex, multi-touch marketing automation workflows using tools like ActiveCampaign, Marketo, or HubSpot. We segment your audience and deliver hyper-personalized email and SMS sequences based on user behavior and lead scoring.',
      icon: 'Mail',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=800',
      features: ['Lead Scoring Systems', 'Behavioral Triggers', 'Drip Campaigns', 'Multi-channel Nurturing', 'A/B Testing Automation'],
      deliverables: ['Workflow Maps', 'Copywriting for Sequences', 'Live Automation Setup'],
      process: [
        { step: 'Strategy', desc: 'Mapping out the customer nurture journey.' },
        { step: 'Asset Creation', desc: 'Writing emails and designing templates.' },
        { step: 'Automation Build', desc: 'Configuring triggers and conditions in the CRM.' }
      ],
      benefits: ['Higher Lead-to-Close Rate', 'Massive Time Savings', 'Personalized Customer Experience'],
      faq: [
        { q: 'Do you write the emails?', a: 'Yes, our copywriting team handles all the messaging for the sequences.' }
      ],
      relatedServices: ['email-marketing-automation', 'crm-hubspot-implementation'],
      startingPrice: '₹90,000',
      ctaText: 'Automate Marketing',
      ctaLink: '/contact',
      displayOrder: 32
    },
    {
      name: 'Sales Pipeline Automation',
      slug: 'sales-pipeline-automation',
      category: 'CRM Automation',
      shortDescription: 'Remove friction from your sales process.',
      fullDescription: 'Empower your sales team to focus on selling, not data entry. We automate your sales pipeline, setting up auto-task generation, meeting scheduling links, automated follow-up reminders, and quote generation workflows. We ensure every deal moves smoothly from prospect to closed-won.',
      icon: 'TrendingUp',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
      features: ['Automated Task Creation', 'Quote & Proposal Gen', 'Meeting Scheduling', 'Deal Stage Triggers', 'Sales Analytics Dashboard'],
      deliverables: ['Pipeline Architecture', 'Automation Rules Setup', 'Sales Team Training'],
      process: [
        { step: 'Pipeline Audit', desc: 'Identifying bottlenecks in your current process.' },
        { step: 'Rule Setup', desc: 'Building logic for deal movement.' },
        { step: 'Optimization', desc: 'Refining processes based on sales team feedback.' }
      ],
      benefits: ['Shorter Sales Cycles', 'Zero Missed Follow-ups', 'Accurate Revenue Forecasting'],
      faq: [
        { q: 'Can this integrate with our accounting software?', a: 'Yes, we frequently integrate CRMs with Xero, QuickBooks, etc., for automated invoicing upon Closed-Won.' }
      ],
      relatedServices: ['crm-hubspot-implementation', 'salesforce-customization'],
      startingPrice: '₹1,00,000',
      ctaText: 'Accelerate Sales',
      ctaLink: '/contact',
      displayOrder: 33
    },

    // --- Marketing Analytics & Strategy ---
    {
      name: 'Conversion Rate Optimization (CRO)',
      slug: 'conversion-rate-optimization',
      category: 'Marketing',
      shortDescription: 'Turn more of your existing traffic into paying customers.',
      fullDescription: 'Traffic is useless if it doesn\'t convert. Our CRO service uses data science, heatmapping (Hotjar/Clarity), and rigorous A/B testing to identify friction points on your website. We implement iterative design and copy changes proven to maximize your conversion rates and revenue.',
      icon: 'BarChart2',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      features: ['Heatmap Analysis', 'User Session Recording', 'A/B & Multivariate Testing', 'Friction Point Removal', 'Statistical Analysis'],
      deliverables: ['Monthly Testing Roadmap', 'Implemented Test Variations', 'Detailed Performance Reports'],
      process: [
        { step: 'Data Collection', desc: 'Installing tracking tools and gathering baseline data.' },
        { step: 'Hypothesis Creation', desc: 'Identifying areas for improvement.' },
        { step: 'Testing & Rollout', desc: 'Running experiments and hardcoding winners.' }
      ],
      benefits: ['More Revenue without More Traffic', 'Better User Experience', 'Data-Backed Decisions'],
      faq: [
        { q: 'How much traffic do I need for CRO?', a: 'We typically need at least 10,000 visitors/month to reach statistical significance quickly.' }
      ],
      relatedServices: ['landing-page-optimization', 'comprehensive-ui-ux-audit'],
      startingPrice: '₹75,000/mo',
      ctaText: 'Start Optimizing',
      ctaLink: '/contact',
      displayOrder: 34
    },
    {
      name: 'Analytics & Data Tracking Setup',
      slug: 'analytics-data-tracking-setup',
      category: 'Marketing',
      shortDescription: 'Flawless data tracking infrastructure for your digital business.',
      fullDescription: 'Bad data leads to bad decisions. We provide expert setup of Google Analytics 4 (GA4), Google Tag Manager (GTM), Server-Side Tracking, and customized Looker Studio dashboards. We ensure every click, form submit, and purchase is tracked accurately across domains and devices.',
      icon: 'PieChart',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      features: ['GA4 Migration/Setup', 'Google Tag Manager', 'Server-Side Tracking (CAPI)', 'Custom Event Tracking', 'Looker Studio Dashboards'],
      deliverables: ['Tracking Architecture', 'Live Data Dashboards', 'Tag Manager Container Export'],
      process: [
        { step: 'Measurement Plan', desc: 'Defining KPIs and necessary events.' },
        { step: 'Implementation', desc: 'Installing data layers and GTM tags.' },
        { step: 'QA & Visualization', desc: 'Verifying data accuracy and building reports.' }
      ],
      benefits: ['100% Data Accuracy', 'Bypass Ad Blockers (Server-Side)', 'Clear ROI Measurement'],
      faq: [
        { q: 'Can you fix my broken GA4?', a: 'Yes, audits and fixes of existing messy setups are a core part of this service.' }
      ],
      relatedServices: ['google-search-ads-management', 'conversion-rate-optimization'],
      startingPrice: '₹60,000',
      ctaText: 'Fix Your Data',
      ctaLink: '/contact',
      displayOrder: 35
    },
    {
      name: 'Competitor Analysis & Go-To-Market Strategy',
      slug: 'competitor-analysis-strategy',
      category: 'Marketing',
      shortDescription: 'Data-driven roadmaps to outmaneuver your industry rivals.',
      fullDescription: 'Entering a new market or losing market share? We conduct deep-dive research into your top competitors—analyzing their ad spend, SEO strategies, pricing models, and brand positioning. We then deliver a comprehensive Go-To-Market strategy detailing exactly how to disrupt the market and win.',
      icon: 'Crosshair',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800',
      features: ['Competitor Ad Spying', 'Backlink & Keyword Gap Analysis', 'SWOT Analysis', 'Buyer Persona Development', 'Pricing Strategy Review'],
      deliverables: ['Comprehensive Strategy Deck', 'Actionable Execution Roadmap', 'Executive Presentation'],
      process: [
        { step: 'Intelligence Gathering', desc: 'Using enterprise tools to scrape competitor data.' },
        { step: 'Analysis', desc: 'Identifying market gaps and weaknesses.' },
        { step: 'Strategy Formulation', desc: 'Creating the tactical plan for your growth.' }
      ],
      benefits: ['Reduced Risk of Failure', 'Clear Direction for Teams', 'Uncovering Hidden Opportunities'],
      faq: [
        { q: 'How deep does the research go?', a: 'We look at everything from their tech stack and estimated ad budgets to their customer reviews.' }
      ],
      relatedServices: ['brand-identity-design-systems', 'google-search-ads-management'],
      startingPrice: '₹1,50,000',
      ctaText: 'Get The Blueprint',
      ctaLink: '/contact',
      displayOrder: 36
    }
  ];

  console.log(`Seeding ${services.length} services...`);
  
  for (const service of services) {
    await prisma.service.create({
      data: service
    });
  }
  
  console.log('Services seeded successfully.');
}
