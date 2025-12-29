import ServicePage from '../../components/ServicePage';
import icon1 from '@/assets/icon/icon1.png';
import icon2 from '@/assets/icon/icon2.png';
import icon3 from '@/assets/icon/icon3.png';
import icon5 from '@/assets/icon/icon5.png';

const hero = {
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  title: 'Reverse Engineering Solutions',
  subtitle: 'Unlock Innovation with GVPL Technologies',
};

const intro = [
  'At GVPL Technologies, we specialize in providing advanced reverse engineering services tailored for various sectors. Our expertise enables companies to analyze existing products, optimize formulations, and accelerate the development of high-quality generic medications. By leveraging cutting-edge analytical techniques, we help you gain a competitive edge in the market.'
];

const features = [
  {
    title: 'Product Analysis',
    image: 'https://www.shutterstock.com/shutterstock/photos/71536909/display_1500/stock-photo-built-walls-of-a-house-on-construction-drawings-71536909.jpg',
    bullets: [
      'Component Identification: Utilizing sophisticated analytical methods, we break down products to identify their specifications.',
      'Quantitative Analysis: Determine the precise concentration of each component to ensure accuracy.',
      'Structural Characterization: Analyze the structure and forms to understand their stability and efficacy.'
    ],
  },
  {
    title: 'Comparative Product Analysis',
    image: 'https://www.shutterstock.com/image-photo/2d-cad-drafting-260nw-1939640736.jpg',
    bullets: [
      'Benchmarking Studies: Compare your products against competitors to identify areas of improvement and innovation.',
      'Quality Assessment: Evaluate the quality and performance of existing products to ensure they meet industry standards.',
      'Regulatory Compliance: Ensure that your products comply with global regulatory requirements, facilitating smoother approval processes.'
    ],
  },
  {
    title: 'Product Optimization',
    image: 'https://www.shutterstock.com/image-photo/software-proficiency-260nw-1939640737.jpg',
    bullets: [
      'Enhancing Availability: Modify products to improve the availability and effectiveness of the products.',
      'Stability Testing: Conduct rigorous testing to ensure product stability under various environmental conditions.',
      'Cost Reduction: Identify alternative products or processes that maintain quality while reducing production costs.'
    ],
  }
];

const benefits = {
  title: 'Why Choose GVPL Technologies?',
  benefits: [
    {
      icon: icon1,
      title: 'Advanced Analytical Techniques',
      desc: 'We employ state-of-the-art instruments and methodologies to deliver precise and reliable results.',
    },
    {
      icon: icon2,
      title: 'Experienced Team',
      desc: 'Our team comprises seasoned professionals with extensive backgrounds in pharmaceutical sciences and engineering.',
    },
    {
      icon: icon3,
      title: 'Confidentiality Assurance',
      desc: 'We prioritize the confidentiality of your proprietary information, ensuring secure handling of all projects.',
    },
    {
      icon: icon5,
      title: 'Customized Solutions',
      desc: 'We tailor our services to meet your specific needs, providing flexible and efficient project execution.',
    }
  ],
  image: 'https://www.shutterstock.com/image-photo/benefits-cad-260nw-1939640738.jpg',
};

export default function CAD() {
  return (
    <ServicePage
      hero={hero}
      intro={intro}
      features={features}
      featuresTitle="Our Reverse Engineering Services"
      featuresDescription="Learn how People leaders everywhere transform their approach to performance, engagement, and development."
      benefits={benefits}
    />
  );
} 