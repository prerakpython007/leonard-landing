// lib/teamData.ts
export interface TeamMember {
  slug: string;
  name: string;
  position: string;
  image: string;
  role: string;
  introduction: string;
  education: string[];
  contact: {
    email: string;
    phone: string;
  };
  approach: string;
  specialties?: string[];
  languages?: string[];
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    slug: "manisha-sidhpura",
    name: "Manisha Sidhpura",
    position: "Founder & Principal Associate – Advocate",
    image: "/people1.png",
    role: "Leadership",
    introduction: "With over 18 years of experience in intellectual property law, Manisha Sidhpura is the visionary founder of Leonard Corporate Solutions. She established the firm in 2008 with a mission to provide comprehensive legal solutions for businesses of all sizes. Throughout her career, she has been dedicated to fostering innovation and protecting the creative works of individuals and corporations alike. Manisha combines deep industry knowledge with a passion for client success, ensuring that every case is handled with the utmost care and strategic insight.",
    education: [
      "LL.M. in Intellectual Property Law, University of Mumbai",
      "LL.B., Government Law College, Mumbai",
      "B.Com, Mumbai University"
    ],
    contact: {
      email: "manisha@leonardcorporate.com",
      phone: "+91 98765 43210"
    },
    approach: "Manisha believes in a client-centric approach, focusing on understanding each client's unique business needs to provide tailored legal solutions. She emphasizes proactive protection of intellectual property assets to prevent future disputes. Her guiding philosophy revolves around education and empowerment, helping clients understand their rights and the importance of timely legal measures. Manisha continuously updates her expertise to stay ahead in a rapidly evolving legal landscape, ensuring Leonard Corporate Solutions provides innovative and effective counsel.",
    specialties: [
      "Trademark Law & Registration",
      "Copyright Protection",
      "IP Litigation",
      "Brand Protection Strategies"
    ],
    languages: ["English", "Hindi", "Marathi", "Gujarati"]
  },
  {
    slug: "rohit-sidhpura",
    name: "Rohit Sidhpura",
    position: "COO – Business Head, Managing Partner",
    image: "/rohitbhai.webp",
    role: "Leadership",
    introduction: "Rohit Sidhpura serves as the Chief Operating Officer and Managing Partner at Leonard Corporate Solutions, bringing over 15 years of experience in business management and legal operations. He plays a pivotal role in translating the firm's vision into practical, operational success. Rohit is highly skilled at aligning internal processes with client expectations, ensuring the delivery of high-quality services while fostering a collaborative workplace culture. His leadership style combines strategic thinking with a hands-on approach to addressing challenges and optimizing performance.",
    education: [
      "MBA in Business Management, NMIMS Mumbai",
      "B.Com, Mumbai University"
    ],
    contact: {
      email: "rohit@leonardcorporate.com",
      phone: "+91 98765 43211"
    },
    approach: "Rohit focuses on operational excellence and strategic growth, ensuring that the firm delivers exceptional service while maintaining efficient processes. He believes in building long-term relationships with clients based on trust and results. His approach emphasizes data-driven decision making and continuous improvement, with an eye toward scaling solutions that benefit both the firm and its clients. Rohit fosters a culture of accountability and innovation, encouraging his teams to seek creative solutions within a robust framework of professionalism.",
    specialties: [
      "Business Strategy",
      "Operations Management",
      "Client Relations",
      "Strategic Planning"
    ],
    languages: ["English", "Hindi", "Marathi"]
  },
  {
    slug: "farrukh-khan",
    name: "Dr. Farrukh Khan",
    position: "Advocate, Senior Associate",
    image: "/people2.png",
    role: "Legal",
    introduction: "Dr. Farrukh Khan is a seasoned legal professional with expertise in intellectual property rights and corporate law. With a doctoral degree in law, he brings academic rigor and practical experience to complex legal matters. Dr. Khan's dedication to precision and thoroughness ensures his clients receive sound legal advice tailored to their specific needs. He has contributed to numerous landmark cases involving IP protection and compliance.",
    education: [
      "Ph.D. in Law, University of Delhi",
      "LL.M. in Corporate Law, NALSAR University",
      "LL.B., Faculty of Law, University of Delhi"
    ],
    contact: {
      email: "farrukh@leonardcorporate.com",
      phone: "+91 98765 43212"
    },
    approach: "Dr. Khan combines deep legal knowledge with practical solutions, focusing on preventing legal issues through careful planning and documentation. He is known for his meticulous attention to detail. His proactive and analytical approach helps clients navigate complex regulations smoothly, mitigating risks and ensuring compliance in a dynamic legal environment.",
    specialties: [
      "Corporate Law",
      "Contract Drafting",
      "IP Advisory",
      "Legal Compliance"
    ],
    languages: ["English", "Hindi", "Urdu"]
  },
  {
    slug: "paresh-dave",
    name: "Dr. Paresh Dave",
    position: "Patent Agent, Senior Associate",
    image: "/people3.png",
    role: "Legal",
    introduction: "Dr. Paresh Dave specializes in patent law with extensive experience in filing and prosecuting patents across various technology domains. His technical background gives him unique insight into complex inventions. Dr. Dave collaborates closely with clients and inventors to secure robust IP protection that maximizes commercial value and innovation potential.",
    education: [
      "Ph.D. in Biotechnology, IIT Delhi",
      "Registered Patent Agent, India",
      "M.Sc. in Biotechnology, University of Pune",
      "B.Sc. in Microbiology, Fergusson College"
    ],
    contact: {
      email: "paresh@leonardcorporate.com",
      phone: "+91 98765 43213"
    },
    approach: "Dr. Dave takes a comprehensive approach to patent protection, ensuring that inventions are properly documented and protected across multiple jurisdictions. He works closely with inventors to understand the technical nuances of their creations. His meticulous patent prosecution strategies help clients secure enforceable rights critical for business growth and competitive advantage.",
    specialties: [
      "Patent Filing & Prosecution",
      "Patent Search & Analysis",
      "Technology Transfer",
      "IP Due Diligence"
    ],
    languages: ["English", "Hindi", "Marathi"]
  },
  {
    slug: "chirag-chanani",
    name: "Chirag Chanani",
    position: "Advocate, Senior Associate",
    image: "/people4.png",
    role: "Legal",
    introduction: "Chirag Chanani specializes in intellectual property litigation and dispute resolution. With a strong courtroom presence and negotiation skills, he has successfully represented clients in numerous IP disputes. His strategic mindset helps clients resolve conflicts efficiently while protecting their critical intellectual assets.",
    education: [
      "LL.M. in Intellectual Property Rights, NLSIU Bangalore",
      "LL.B., Symbiosis Law School, Pune",
      "B.Com, Pune University"
    ],
    contact: {
      email: "chirag@leonardcorporate.com",
      phone: "+91 98765 43214"
    },
    approach: "Chirag believes in a strategic approach to litigation, exploring all possible avenues for resolution before proceeding to court. When litigation is necessary, he prepares meticulously to build strong cases. His negotiation expertise complements his litigation skills, helping clients achieve favorable outcomes both inside and outside the courtroom.",
    specialties: [
      "IP Litigation",
      "Dispute Resolution",
      "Trademark Opposition",
      "Enforcement Actions"
    ],
    languages: ["English", "Hindi", "Gujarati"]
  },
  {
    slug: "nabendu-bhattacharya",
    name: "Nabendu Bhattacharya",
    position: "Advocate, Senior Associate",
    image: "/people5.png",
    role: "Legal",
    introduction: "Nabendu Bhattacharya brings extensive experience in corporate law and commercial agreements. He has advised numerous businesses on compliance, governance, and transactional matters. Nabendu’s clear communication style makes complex legal concepts accessible to clients, enhancing decision-making.",
    education: [
      "LL.M. in Corporate Law, University of London",
      "LL.B., Jadavpur University, Kolkata",
      "B.A. in Economics, Presidency University, Kolkata"
    ],
    contact: {
      email: "nabendu@leonardcorporate.com",
      phone: "+91 98765 43215"
    },
    approach: "Nabendu focuses on practical solutions that balance legal requirements with business objectives. He is known for his ability to explain complex legal concepts in simple terms that clients can understand. His collaborative style fosters trust and helps clients navigate regulatory environments with confidence.",
    specialties: [
      "Corporate Governance",
      "Commercial Agreements",
      "M&A Advisory",
      "Regulatory Compliance"
    ],
    languages: ["English", "Hindi", "Bengali"]
  },
  {
    slug: "rr-padmanabhan",
    name: "R.R. Padmanabhan",
    position: "Advocate, Senior Associate",
    image: "/people6.png",
    role: "Legal",
    introduction: "R.R. Padmanabhan is a seasoned lawyer with expertise in taxation law and intellectual property. His dual specialization allows him to provide comprehensive advice on IP-driven businesses. He combines technical tax knowledge with strategic IP insights to benefit clients holistically.",
    education: [
      "LL.M. in Taxation Law, University of Mumbai",
      "LL.B., Madras Law College",
      "B.Com, University of Madras"
    ],
    contact: {
      email: "padmanabhan@leonardcorporate.com",
      phone: "+91 98765 43216"
    },
    approach: "Mr. Padmanabhan takes a holistic view of clients' legal needs, considering both protection and taxation implications of intellectual property assets. He is known for his innovative structuring solutions. His approach integrates tax planning with IP management to maximize value and compliance.",
    specialties: [
      "Taxation Law",
      "IP Valuation",
      "Tax Planning",
      "International Taxation"
    ],
    languages: ["English", "Hindi", "Tamil", "Malayalam"]
  },
  {
    slug: "prabodhan-makwana",
    name: "Prabodhan Makwana",
    position: "CFO – Taxation, Senior Associate",
    image: "/people6.png",
    role: "Strategy",
    introduction: "Prabodhan Makwana oversees the financial operations and taxation strategies at Leonard Corporate Solutions. With his expertise in finance and taxation, he ensures the firm's financial health and compliance. Prabodhan blends analytical rigor with strategic foresight to support sustainable growth.",
    education: [
      "Chartered Accountant, ICAI",
      "Company Secretary, ICSI",
      "B.Com, University of Mumbai"
    ],
    contact: {
      email: "prabodhan@leonardcorporate.com",
      phone: "+91 98765 43217"
    },
    approach: "Prabodhan believes in transparent financial practices and strategic tax planning that aligns with clients' business objectives. He focuses on creating value through efficient financial management. His approach emphasizes proactive risk management and adherence to evolving regulatory frameworks.",
    specialties: [
      "Financial Management",
      "Tax Planning",
      "Corporate Finance",
      "Compliance Reporting"
    ],
    languages: ["English", "Hindi", "Marathi"]
  },
  {
    slug: "urvee-sidhpura",
    name: "Urvee Sidhpura",
    position: "VP – Human Resources, Senior Associate",
    image: "/people7.png",
    role: "Strategy",
    introduction: "Urvee Sidhpura leads the human resources function at Leonard Corporate Solutions, focusing on talent acquisition, development, and retention. She plays a key role in maintaining the firm's culture of excellence. Urvee champions programs that foster employee engagement, growth, and well-being.",
    education: [
      "MBA in Human Resources, XLRI Jamshedpur",
      "B.A. in Psychology, St. Xavier's College, Mumbai"
    ],
    contact: {
      email: "urvee@leonardcorporate.com",
      phone: "+91 98765 43218"
    },
    approach: "Urvee believes that people are the foundation of any successful organization. She focuses on creating an environment where talented professionals can thrive and deliver their best work for clients. Her strategy includes nurturing leadership, promoting inclusivity, and aligning HR goals with organizational vision.",
    specialties: [
      "Talent Acquisition",
      "Performance Management",
      "Employee Engagement",
      "Organizational Development"
    ],
    languages: ["English", "Hindi", "Marathi", "Gujarati"]
  },
  {
    slug: "kaynat-dandekar",
    name: "Kaynat Dandekar",
    position: "VP – Operations, Senior Associate",
    image: "/people8.png",
    role: "Strategy",
    introduction: "Kaynat Dandekar oversees the firm's operations, ensuring smooth delivery of services and efficient processes. Her operational expertise has been instrumental in scaling the firm's capabilities. Kaynat applies data-driven methodologies to optimize workflows and enhance customer satisfaction.",
    education: [
      "MBA in Operations Management, SP Jain Institute",
      "B.E. in Industrial Engineering, Mumbai University"
    ],
    contact: {
      email: "kaynat@leonardcorporate.com",
      phone: "+91 98765 43219"
    },
    approach: "Kaynat focuses on creating efficient systems and processes that enhance service delivery while maintaining quality standards. She believes in continuous improvement and innovation in operations. Her leadership builds resilience and adaptability within teams to meet evolving client needs.",
    specialties: [
      "Process Optimization",
      "Quality Management",
      "Project Management",
      "Service Delivery"
    ],
    languages: ["English", "Hindi", "Marathi", "Urdu"]
  },
  {
    slug: "satyam-patel",
    name: "Satyam Patel",
    position: "VP – Business Development, Associate",
    image: "/people9.png",
    role: "Strategy",
    introduction: "Satyam Patel leads the business development efforts at Leonard Corporate Solutions, identifying growth opportunities and building strategic partnerships. His market insights have helped expand the firm's client base. Satyam is passionate about creating strategies that align market trends with firm capabilities.",
    education: [
      "MBA in Marketing, IIM Ahmedabad",
      "B.Tech in Computer Science, NIT Surat"
    ],
    contact: {
      email: "satyam@leonardcorporate.com",
      phone: "+91 98765 43220"
    },
    approach: "Satyam believes in building genuine relationships with clients based on understanding their needs and delivering value. He focuses on long-term partnerships rather than transactional engagements. His approach emphasizes agility, innovative marketing, and a client-centric business development model.",
    specialties: [
      "Business Development",
      "Client Relationship Management",
      "Market Research",
      "Strategic Partnerships"
    ],
    languages: ["English", "Hindi", "Gujarati"]
  },
  {
    slug: "prachi-jadhav",
    name: "Prachi Jadhav",
    position: "Administrative Manager, Senior Associate",
    image: "/people10.png",
    role: "Administrative",
    introduction: "Prachi Jadhav manages the administrative functions at Leonard Corporate Solutions, ensuring smooth day-to-day operations. Her organizational skills keep the firm running efficiently. Prachi is adept at streamlining office processes and enhancing communication within teams.",
    education: [
      "MBA in Administration, Welingkar Institute",
      "B.Com, University of Mumbai"
    ],
    contact: {
      email: "prachi@leonardcorporate.com",
      phone: "+91 98765 43221"
    },
    approach: "Prachi believes that excellent administration is the backbone of any successful organization. She focuses on creating systems that support the legal team's work and enhance client experiences. Her dedication to continuous improvement helps maintain a productive and harmonious work environment.",
    specialties: [
      "Office Management",
      "Administrative Systems",
      "Client Coordination",
      "Facility Management"
    ],
    languages: ["English", "Hindi", "Marathi"]
  },
  {
    slug: "abhijeet-powar",
    name: "Abhijeet Powar",
    position: "Foreign Filing Paralegal, Senior Associate",
    image: "/people11.png",
    role: "Administrative",
    introduction: "Abhijeet Powar specializes in managing foreign filing processes for intellectual property rights. His expertise ensures that clients' IP assets are protected across international jurisdictions. Abhijeet has a detailed understanding of global IP treaties and procedures, aiding seamless international IP management.",
    education: [
      "Post Graduate Diploma in IP Law, NALSAR University",
      "B.Sc. in Chemistry, Fergusson College",
      "Diploma in Patent Law"
    ],
    contact: {
      email: "abhijeet@leonardcorporate.com",
      phone: "+91 98765 43222"
    },
    approach: "Abhijeet is meticulous in managing international filing procedures, ensuring compliance with varying requirements across different countries. He keeps abreast of changing international IP laws. His careful coordination reduces risks and maximizes clients' IP portfolio value globally.",
    specialties: [
      "International IP Filings",
      "Patent Cooperation Treaty (PCT) Applications",
      "Madrid Protocol Trademark Filings",
      "Foreign IP Laws"
    ],
    languages: ["English", "Hindi", "Marathi"]
  },
  {
    slug: "vijay-bhattarai",
    name: "Vijay Bhattarai",
    position: "Licensing Coordinator, Associate",
    image: "/people12.png",
    role: "Administrative",
    introduction: "Vijay Bhattarai manages licensing coordination at Leonard Corporate Solutions, facilitating technology transfer and IP licensing agreements between clients and partners. He plays a key role in fostering successful collaborations that drive value creation and innovation.",
    education: [
      "M.Sc. in Biotechnology, University of Mumbai",
      "B.Sc. in Microbiology, Ramnarain Ruia College",
      "Diploma in IP Management"
    ],
    contact: {
      email: "vijay@leonardcorporate.com",
      phone: "+91 98765 43223"
    },
    approach: "Vijay focuses on creating win-win licensing arrangements that benefit all parties involved. He is skilled at negotiating terms that protect clients' interests while enabling productive partnerships. His pragmatic approach ensures clarity, compliance, and optimized outcomes in licensing deals.",
    specialties: [
      "Technology Licensing",
      "IP Agreements",
      "Royalty Management",
      "License Compliance"
    ],
    languages: ["English", "Hindi", "Nepali"]
  }
];
