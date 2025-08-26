// lib/servicesData.js
import {
  BookOpen, FileText, Gavel, Shield, Globe as LucideGlobe,
  UserCheck, Package, Lock, Scale, PenTool, Watch, Truck,
  AlertTriangle, Utensils
} from 'lucide-react';

export const internationalServices = [
  {
    name: "International Trademark Filing",
    icon: Shield,
    description: "File trademarks via Madrid Protocol or national filings in USA, EU, UK, UAE, Australia, and more.",
    route: "service/international/trademark-filing",
    category: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our International Trademark Filing service helps businesses protect their brands globally through the Madrid Protocol system or direct national filings. We handle the entire process from initial search and analysis to registration and maintenance across multiple jurisdictions including USA, EU, UK, UAE, Australia, and more. With our expertise, you can ensure your brand is protected in all markets where you operate or plan to expand, preventing infringement and establishing your exclusive rights worldwide.",
    benefits: [
      "Single application for multiple countries",
      "Reduced costs compared to individual filings",
      "Expert guidance on trademark classification",
      "Monitoring and renewal reminders",
      "Conflict resolution and opposition handling"
    ],
    process: [
      "Trademark search and availability analysis",
      "Strategy session for jurisdiction selection",
      "Application preparation and filing",
      "Office action response management",
      "Registration certificate procurement",
      "International monitoring and renewal services"
    ],
    timeline: "6-18 months depending on jurisdictions",
    pricing: "Starting at $1,500 + government fees"
  },
  {
    name: "International Patent Filing",
    icon: PenTool,
    description: "File global patents via PCT applications and handle national phase entries efficiently.",
    route: "service/international/patent-filing",
    category: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our International Patent Filing service streamlines the complex process of protecting your inventions globally through the Patent Cooperation Treaty (PCT) system. We guide you through each stage from preliminary search to national phase entries in your target countries. Our team of experts ensures your intellectual property is safeguarded internationally, giving you competitive advantage and recognition for your innovations across borders.",
    benefits: [
      "Single application for up to 153 countries",
      "30-month window for national phase decisions",
      "International search and preliminary examination",
      "Strategic advice on patentability",
      "Cost-effective international protection"
    ],
    process: [
      "Prior art search and patentability assessment",
      "Drafting and filing PCT application",
      "International search and written opinion",
      "Optional international preliminary examination",
      "National phase entry guidance",
      "Coordination with local patent attorneys"
    ],
    timeline: "PCT process: 18-30 months + national phases",
    pricing: "Starting at $3,500 + government fees"
  },
  {
    name: "Global Copyright Protection",
    icon: BookOpen,
    description: "Secure your work internationally under the Berne Convention.",
    route: "service/international/copyright-protection",
    category: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our Global Copyright Protection service ensures your creative works are protected internationally under the Berne Convention, which provides automatic protection in all member countries. We help you establish evidence of creation, register works where beneficial, and enforce your rights across borders. From literary works to software, music, and artistic creations, we provide comprehensive copyright strategy and protection services.",
    benefits: [
      "Automatic protection in 179 Berne Convention countries",
      "Evidence creation for proof of authorship",
      "Strategic registration in key jurisdictions",
      "Enforcement support against infringement",
      "Licensing and assignment agreement drafting"
    ],
    process: [
      "Copyright eligibility assessment",
      "Creation of evidence for proof of authorship",
      "Strategic registration in selected countries",
      "Monitoring and enforcement planning",
      "Licensing and commercialization support",
      "Renewal and maintenance guidance"
    ],
    timeline: "Immediate protection upon creation, registration in 2-6 months",
    pricing: "Starting at $800 depending on jurisdictions and work types"
  },
  {
    name: "International Design Protection",
    icon: Scale,
    description: "File under the Hague Agreement for international industrial design rights.",
    route: "service/international/design-protection",
    category: "Intellectual Property",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our International Design Protection service helps businesses secure their industrial designs globally through the Hague System, which allows for a single application covering multiple countries. We assist with everything from design analysis and preparation to registration and enforcement, ensuring your product designs are protected against unauthorized copying in international markets.",
    benefits: [
      "Single application for up to 96 countries",
      "Simplified management of design rights",
      "Cost-effective international coverage",
      "Expert guidance on design representation",
      "Renewal management and monitoring"
    ],
    process: [
      "Design novelty and registrability assessment",
      "Preparation of design representations",
      "Filing international application under Hague System",
      "Examination procedure management",
      "Registration certificate procurement",
      "Renewal management and enforcement support"
    ],
    timeline: "12-18 months for international registration",
    pricing: "Starting at $2,200 + government fees"
  },
  {
    name: "IP & Legal Consulting Across Borders",
    icon: LucideGlobe,
    description: "Strategic advisory for multinational IP portfolios, licensing, and market entry strategies.",
    route: "service/international/ip-legal-consulting",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our IP & Legal Consulting service provides strategic guidance for businesses operating across international borders. We help develop comprehensive IP strategies, navigate complex regulatory environments, and structure market entry approaches that maximize protection while minimizing risk. Our consultants bring decades of experience in international IP law and business strategy.",
    benefits: [
      "Comprehensive IP portfolio strategy development",
      "Market-specific regulatory guidance",
      "Risk assessment and mitigation planning",
      "Licensing and franchising strategy",
      "Competitive intelligence analysis"
    ],
    process: [
      "Initial consultation and needs assessment",
      "IP portfolio and business strategy review",
      "Market-specific regulatory research",
      "Strategic recommendations development",
      "Implementation planning and support",
      "Ongoing advisory and adjustment"
    ],
    timeline: "Varies by project scope (typically 2-8 weeks)",
    pricing: "Project-based pricing starting at $2,500"
  },
  {
    name: "IP Watch Services",
    icon: Watch,
    description: "Monitor and protect trademarks, patents, and designs across jurisdictions.",
    route: "service/international/ip-watch",
    category: "Monitoring",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our IP Watch Services provide comprehensive monitoring of trademark, patent, and design databases across multiple jurisdictions. We alert you to potentially conflicting applications, infringements, and other threats to your intellectual property rights, enabling proactive protection of your assets in global markets.",
    benefits: [
      "Comprehensive monitoring across multiple jurisdictions",
      "Early detection of potential conflicts",
      "Customized monitoring parameters",
      "Regular detailed reports",
      "Strategic recommendations for action"
    ],
    process: [
      "Setting up customized watch parameters",
      "Regular monitoring of official databases",
      "Identification of potentially conflicting applications",
      "Detailed reporting and analysis",
      "Recommendations for opposition or other actions",
      "Ongoing adjustment of watch parameters"
    ],
    timeline: "Ongoing service with weekly or monthly reports",
    pricing: "Starting at $200/month per jurisdiction"
  },
  {
    name: "Anti-Counterfeiting for Exporters",
    icon: AlertTriangle,
    description: "Customs watchlisting, global cease & desist, and enforcement in international markets.",
    route: "service/international/anti-counterfeiting",
    category: "Enforcement",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our Anti-Counterfeiting service provides comprehensive protection against counterfeit products in international markets. We implement customs recordation programs, conduct investigations, and execute enforcement actions to prevent fake products from damaging your brand reputation and revenue streams across global markets.",
    benefits: [
      "Customs recordation in multiple countries",
      "Investigation of counterfeit networks",
      "Coordination with enforcement authorities",
      "Seizure of counterfeit goods",
      "Legal action against infringers"
    ],
    process: [
      "Counterfeiting risk assessment",
      "Customs recordation in target countries",
      "Market monitoring and investigation",
      "Coordination with customs and enforcement agencies",
      "Execution of raids and seizures",
      "Legal proceedings against infringers"
    ],
    timeline: "Customs recordation: 2-4 months, ongoing enforcement",
    pricing: "Project-based pricing starting at $3,000 + enforcement costs"
  },
  {
    name: "Customs Watch Listing in International Markets",
    icon: Truck,
    description: "Register IP with customs to stop counterfeits at borders.",
    route: "service/international/customs-watch",
    category: "Enforcement",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our Customs Watch Listing service registers your intellectual property with customs authorities in key markets worldwide, enabling officials to identify and detain counterfeit goods at borders. We handle the entire process from application to training customs officials about your genuine products.",
    benefits: [
      "Registration with customs authorities in multiple countries",
      "Training for customs officials on genuine products",
      "Rapid response to detention notices",
      "Coordination of enforcement actions",
      "Regular reporting on detentions and results"
    ],
    process: [
      "Assessment of appropriate countries for registration",
      "Preparation and submission of applications",
      "Provision of product identification guides",
      "Training sessions for customs officials",
      "Response to detention notices",
      "Coordination of enforcement actions"
    ],
    timeline: "2-6 months per country depending on procedures",
    pricing: "Starting at $1,500 per country + maintenance fees"
  },
  {
    name: "Cease & Desist + Enforcement in Foreign Jurisdictions",
    icon: Gavel,
    description: "Enforce IP rights through notices and legal actions abroad.",
    route: "service/international/enforcement",
    category: "Enforcement",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our International Enforcement service protects your intellectual property rights through cease and desist actions, litigation, and other enforcement measures in foreign jurisdictions. We work with local counsel worldwide to ensure effective protection of your rights regardless of where infringement occurs.",
    benefits: [
      "Cease and desist letters in local languages",
      "Coordination with local counsel worldwide",
      "Litigation management across jurisdictions",
      "Alternative dispute resolution options",
      "Comprehensive enforcement strategy development"
    ],
    process: [
      "Infringement assessment and evidence collection",
      "Selection of appropriate enforcement strategies",
      "Engagement of local counsel in relevant jurisdictions",
      "Drafting and sending cease and desist notices",
      "Negotiation and settlement discussions",
      "Litigation management if required"
    ],
    timeline: "Varies by case complexity and jurisdiction",
    pricing: "Case-based pricing starting at $1,500 per jurisdiction"
  },
  {
    name: "Commercial Contracts",
    icon: FileText,
    description: "Draft, negotiate, and vet business contracts with airtight legal precision.",
    route: "service/international/commercial-contracts",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our International Commercial Contracts service provides expert drafting, review, and negotiation of business agreements for cross-border transactions. We ensure your contracts account for jurisdictional differences, international law considerations, and protect your interests in global business dealings.",
    benefits: [
      "Drafting of cross-border commercial agreements",
      "Review and negotiation of international contracts",
      "Jurisdiction-specific legal considerations",
      "Dispute resolution clause optimization",
      "Ongoing contract management support"
    ],
    process: [
      "Understanding business objectives and transaction details",
      "Drafting or reviewing contract terms",
      "Identifying jurisdiction-specific requirements",
      "Negotiating with counterparties",
      "Finalizing execution documents",
      "Providing ongoing support for contract management"
    ],
    timeline: "1-4 weeks depending on contract complexity",
    pricing: "Starting at $800 per contract"
  },
  {
    name: "Employment & HR Law",
    icon: UserCheck,
    description: "Stay compliant with labour laws, HR policies, and employee agreements.",
    route: "service/international/employment-hr-law",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our International Employment & HR Law service helps businesses navigate the complex landscape of global labor regulations. We provide guidance on hiring practices, employment contracts, workplace policies, and compliance requirements across multiple jurisdictions, reducing legal risks in your international operations.",
    benefits: [
      "Compliance with local labor laws across jurisdictions",
      "Drafting of international employment contracts",
      "Development of global HR policies",
      "Resolution of cross-border employment disputes",
      "Guidance on termination and severance requirements"
    ],
    process: [
      "Assessment of employment needs in target countries",
      "Research of local labor law requirements",
      "Drafting of jurisdiction-appropriate contracts and policies",
      "Implementation guidance and training",
      "Ongoing compliance monitoring and updates",
      "Dispute resolution support"
    ],
    timeline: "Varies by jurisdiction and project scope",
    pricing: "Project-based pricing starting at $1,200 per jurisdiction"
  },
  {
    name: "Outsourcing & Procurement",
    icon: Package,
    description: "Manage vendor and procurement contracts with risk-free strategies.",
    route: "service/international/outsourcing-procurement",
    category: "Corporate Law",
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our International Outsourcing & Procurement service helps businesses structure and manage cross-border vendor relationships, supply chain agreements, and procurement contracts. We ensure your international sourcing arrangements are legally sound, protect your interests, and comply with relevant regulations in all involved jurisdictions.",
    benefits: [
      "Drafting and negotiation of international supplier contracts",
      "Risk assessment in global supply chains",
      "Compliance with international trade regulations",
      "Dispute resolution in cross-border procurement",
      "Ongoing management of vendor relationships"
    ],
    process: [
      "Assessment of procurement needs and risk factors",
      "Drafting or review of supplier agreements",
      "Negotiation of terms with international vendors",
      "Compliance check with trade regulations",
      "Implementation of contract management systems",
      "Ongoing support for vendor relationships"
    ],
    timeline: "2-6 weeks depending on contract complexity",
    pricing: "Starting at $1,500 per major supplier agreement"
  },
  {
    name: "Privacy & Data Protection",
    icon: Lock,
    description: "Get GDPR and international data protection compliance right with privacy-first legal consulting.",
    route: "service/international/privacy-data-protection",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our Privacy & Data Protection service ensures your business complies with international data protection regulations including GDPR, CCPA, and other privacy laws across jurisdictions. We help implement privacy-by-design approaches, draft necessary policies, and navigate the complex landscape of global data transfer regulations.",
    benefits: [
      "Compliance with GDPR and other international privacy laws",
      "Data protection impact assessments",
      "Drafting of privacy policies and notices",
      "Guidance on international data transfers",
      "Breach response planning and management"
    ],
    process: [
      "Assessment of data processing activities",
      "Gap analysis against applicable privacy laws",
      "Development of compliance roadmap",
      "Drafting of privacy policies and procedures",
      "Staff training and implementation support",
      "Ongoing compliance monitoring and updates"
    ],
    timeline: "3-8 weeks depending on organization size and complexity",
    pricing: "Project-based pricing starting at $2,500"
  },
  {
    name: "Extended Legal Support",
    icon: Gavel,
    description: "Comprehensive legal assistance for international business operations and compliance.",
    route: "service/international/extended-legal-support",
    category: "Legal Support",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our Extended Legal Support service provides ongoing comprehensive legal assistance for businesses operating internationally. We serve as your external legal department, offering continuous guidance on compliance, contracts, disputes, and strategic legal matters across all jurisdictions where you operate.",
    benefits: [
      "Dedicated legal team for ongoing support",
      "Regular compliance audits and updates",
      "Unlimited contract review and drafting",
      "Strategic legal advice for business decisions",
      "Crisis management and dispute resolution"
    ],
    process: [
      "Initial comprehensive legal assessment",
      "Development of ongoing support plan",
      "Regular check-ins and legal audits",
      "Prompt response to legal queries",
      "Strategic guidance for business initiatives",
      "Crisis management support when needed"
    ],
    timeline: "Ongoing retainer-based service",
    pricing: "Monthly retainer starting at $2,000 depending on needs"
  },
  {
    name: "FSSAI Licensing & Compliance",
    icon: Utensils,
    description: "Legal assistance for obtaining food licenses and staying compliant in the F&B industry internationally.",
    route: "service/international/fssai-licensing-compliance",
    category: "Compliance",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=800",
    detailedDescription: "Our FSSAI Licensing & Compliance service provides specialized assistance for food businesses operating internationally. We help navigate the complex regulatory landscape of food safety standards, licensing requirements, and compliance obligations across different countries and regions, ensuring your food products meet all necessary regulations for international markets.",
    benefits: [
      "Expert guidance on international food regulations",
      "Streamlined licensing process",
      "Ongoing compliance monitoring",
      "Labeling and packaging compliance review",
      "Representation during inspections and audits"
    ],
    process: [
      "Assessment of business activities and jurisdictions",
      "Document preparation and application filing",
      "Liaison with regulatory authorities",
      "Compliance gap analysis",
      "Training and policy development",
      "Renewal and amendment assistance"
    ],
    timeline: "2-6 months depending on jurisdictions",
    pricing: "Starting at $2,000 + government fees"
  }
];