export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  images?: string[];
  publishDate: string;
  category: string;
  author?: string;
  tags?: string[];
  readTime?: number;
  relatedPosts?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'industrial-motor-maintenance-guide',
    title: 'Complete Guide to Industrial Motor Maintenance',
    excerpt: 'Learn essential maintenance practices for electric motors to ensure optimal performance and extend equipment lifespan in industrial environments.',
    content: `
      <h2>Introduction</h2>
      <p>Industrial motors are the backbone of manufacturing operations. Proper maintenance is crucial for ensuring reliability, efficiency, and safety in your production facility.</p>

      <h2>Regular Inspection Checklist</h2>
      <ul>
        <li>Visual inspection for unusual wear or damage</li>
        <li>Vibration analysis to detect bearing issues</li>
        <li>Temperature monitoring to prevent overheating</li>
        <li>Electrical testing for insulation breakdown</li>
      </ul>

      <h2>Preventive Maintenance Schedule</h2>
      <p>Establish a regular maintenance schedule based on manufacturer recommendations and operating conditions. Key maintenance tasks include:</p>
      <ul>
        <li>Lubrication of bearings and moving parts</li>
        <li>Cleaning of motor housing and cooling fins</li>
        <li>Checking electrical connections and terminals</li>
        <li>Testing protective devices and safety features</li>
      </ul>

      <h2>Common Issues and Solutions</h2>
      <p>Understanding common motor problems helps in early detection and resolution:</p>
      <ul>
        <li><strong>Overheating:</strong> Check ventilation, load conditions, and ambient temperature</li>
        <li><strong>Unusual Noise:</strong> Inspect bearings, alignment, and mounting</li>
        <li><strong>Vibration:</strong> Verify proper installation and balance</li>
        <li><strong>Reduced Performance:</strong> Test electrical parameters and mechanical components</li>
      </ul>

      <h2>Professional Maintenance Services</h2>
      <p>For complex repairs or when in doubt, consult certified technicians. Regular professional servicing ensures compliance with safety standards and warranty requirements.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    images: [
      'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
    ],
    publishDate: '2024-01-15',
    category: 'Maintenance',
    author: 'Ahmet Yılmaz',
    tags: ['motors', 'maintenance', 'industrial', 'safety'],
    readTime: 8,
    relatedPosts: ['2', '3']
  },
  {
    id: '2',
    slug: 'gearbox-selection-industrial-applications',
    title: 'Gearbox Selection Guide for Industrial Applications',
    excerpt: 'Comprehensive guide to selecting the right gearbox for your industrial machinery, considering factors like torque, speed, and environmental conditions.',
    content: `
      <h2>Understanding Gearbox Types</h2>
      <p>Different industrial applications require specific gearbox designs. Understanding the characteristics of each type helps in making informed decisions.</p>

      <h2>Key Selection Criteria</h2>
      <ul>
        <li><strong>Torque Requirements:</strong> Calculate the torque needed for your application</li>
        <li><strong>Speed Ratio:</strong> Determine the required speed reduction or increase</li>
        <li><strong>Environmental Conditions:</strong> Consider temperature, humidity, and contamination</li>
        <li><strong>Mounting Configuration:</strong> Choose between foot, flange, or shaft mounting</li>
      </ul>

      <h2>Common Gearbox Types</h2>
      <h3>Worm Gearboxes</h3>
      <p>Ideal for high reduction ratios and self-locking applications. Excellent for conveyor systems and lifting equipment.</p>

      <h3>Helical Gearboxes</h3>
      <p>Provide smooth, quiet operation with high efficiency. Suitable for most industrial applications requiring precision.</p>

      <h3>Bevel Gearboxes</h3>
      <p>Perfect for changing shaft direction. Commonly used in automotive and industrial machinery.</p>

      <h2>Installation and Maintenance</h2>
      <p>Proper installation and regular maintenance are essential for gearbox longevity and performance.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1640556795357-71d4078d6228?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    images: [
      'https://images.unsplash.com/photo-1640556795357-71d4078d6228?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
    ],
    publishDate: '2024-01-10',
    category: 'Technical Guide',
    author: 'Mehmet Kaya',
    tags: ['gearboxes', 'selection', 'industrial', 'engineering'],
    readTime: 12,
    relatedPosts: ['1', '4']
  },
  {
    id: '3',
    slug: 'energy-efficient-motors-benefits',
    title: 'Benefits of Energy-Efficient Motors in Manufacturing',
    excerpt: 'Explore how upgrading to energy-efficient motors can reduce operational costs and improve sustainability in industrial operations.',
    content: `
      <h2>The Cost of Inefficient Motors</h2>
      <p>Traditional motors consume significant energy, contributing to high operational costs and environmental impact in manufacturing facilities.</p>

      <h2>Energy Efficiency Standards</h2>
      <p>Modern motors comply with international efficiency standards like IE3 and IE4, offering substantial energy savings.</p>

      <h2>Financial Benefits</h2>
      <ul>
        <li>Reduced electricity consumption by 20-40%</li>
        <li>Lower operational costs and improved profitability</li>
        <li>Government incentives and tax benefits</li>
        <li>Extended motor lifespan and reduced maintenance</li>
      </ul>

      <h2>Environmental Impact</h2>
      <p>Energy-efficient motors contribute to reduced carbon footprint and support corporate sustainability goals.</p>

      <h2>Return on Investment</h2>
      <p>Calculate the payback period for motor upgrades and understand the long-term financial benefits.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1563456019498-843e11bdaae0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    images: [
      'https://images.unsplash.com/photo-1563456019498-843e11bdaae0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
    ],
    publishDate: '2024-01-05',
    category: 'Energy Efficiency',
    author: 'Ayşe Demir',
    tags: ['energy', 'efficiency', 'motors', 'sustainability'],
    readTime: 6,
    relatedPosts: ['1', '5']
  },
  {
    id: '4',
    slug: 'industrial-automation-trends-2024',
    title: 'Industrial Automation Trends for 2024',
    excerpt: 'Stay ahead of the curve with the latest trends in industrial automation, from IoT integration to AI-powered predictive maintenance.',
    content: `
      <h2>The Rise of Smart Manufacturing</h2>
      <p>Industry 4.0 continues to transform manufacturing with intelligent systems and data-driven decision making.</p>

      <h2>Key Trends</h2>
      <ul>
        <li><strong>IoT Integration:</strong> Connected devices and real-time monitoring</li>
        <li><strong>AI and Machine Learning:</strong> Predictive maintenance and optimization</li>
        <li><strong>Robotics:</strong> Advanced automation and collaborative robots</li>
        <li><strong>Digital Twins:</strong> Virtual modeling for process optimization</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>Successful automation requires careful planning and phased implementation to minimize disruption and maximize benefits.</p>

      <h2>Future Outlook</h2>
      <p>The future of manufacturing lies in intelligent, connected systems that optimize efficiency and quality.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1667233169941-7b31a54ec223?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    images: [
      'https://images.unsplash.com/photo-1667233169941-7b31a54ec223?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
    ],
    publishDate: '2024-01-01',
    category: 'Industry News',
    author: 'Can Özkan',
    tags: ['automation', 'industry 4.0', 'IoT', 'trends'],
    readTime: 10,
    relatedPosts: ['2', '5']
  },
  {
    id: '5',
    slug: 'safety-standards-industrial-equipment',
    title: 'Safety Standards for Industrial Equipment',
    excerpt: 'Understanding and implementing safety standards to protect workers and ensure compliance in industrial environments.',
    content: `
      <h2>Importance of Safety Standards</h2>
      <p>Safety standards protect workers, prevent accidents, and ensure legal compliance in industrial operations.</p>

      <h2>Key Standards and Regulations</h2>
      <ul>
        <li><strong>ISO 45001:</strong> Occupational health and safety management</li>
        <li><strong>IEC Standards:</strong> Electrical safety and equipment standards</li>
        <li><strong>ATEX:</strong> Equipment for explosive atmospheres</li>
        <li><strong>CE Marking:</strong> European safety conformity</li>
      </ul>

      <h2>Risk Assessment</h2>
      <p>Conduct thorough risk assessments to identify potential hazards and implement appropriate safety measures.</p>

      <h2>Safety Training</h2>
      <p>Regular training ensures all personnel understand safety procedures and emergency protocols.</p>

      <h2>Compliance and Certification</h2>
      <p>Maintain compliance with local and international standards through regular audits and certifications.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    images: [
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
    ],
    publishDate: '2023-12-28',
    category: 'Safety',
    author: 'Fatma Yıldız',
    tags: ['safety', 'standards', 'compliance', 'industrial'],
    readTime: 9,
    relatedPosts: ['3', '4']
  },
  {
    id: '6',
    slug: 'company-updates-q4-2023',
    title: 'Imamak Company Updates - Q4 2023',
    excerpt: 'Review of our achievements, new partnerships, and upcoming initiatives in the industrial spare parts and machinery sector.',
    content: `
      <h2>Quarter Highlights</h2>
      <p>Q4 2023 has been a period of significant growth and strategic developments for Imamak.</p>

      <h2>New Product Lines</h2>
      <p>We've expanded our product portfolio with premium European manufacturers and enhanced our inventory management systems.</p>

      <h2>Partnership Developments</h2>
      <ul>
        <li>Strategic partnership with leading Turkish manufacturers</li>
        <li>Expanded distribution network across key industrial regions</li>
        <li>Enhanced technical support capabilities</li>
      </ul>

      <h2>Customer Success Stories</h2>
      <p>Highlighting successful projects and satisfied customers from various industrial sectors.</p>

      <h2>Looking Ahead</h2>
      <p>Our vision for continued excellence and innovation in serving the industrial sector.</p>
    `,
    featuredImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0'
    ],
    publishDate: '2023-12-20',
    category: 'Company News',
    author: 'Imamak Team',
    tags: ['company', 'updates', 'partnerships', 'growth'],
    readTime: 5,
    relatedPosts: ['4', '1']
  }
];

export const blogCategories = [
  'All',
  'Maintenance',
  'Technical Guide',
  'Energy Efficiency',
  'Industry News',
  'Safety',
  'Company News'
];
