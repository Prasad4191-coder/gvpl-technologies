import ServicePage from '../../components/ServicePage';
import icon1 from '@/assets/icon/icon1.png';
import icon2 from '@/assets/icon/icon2.png';
import icon4 from '@/assets/icon/icon4.png';
import npdPoster from '@/assets/gvpl website images/Services/S - NPD/Poster.png';
import npdMarketResearch from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/NPD/Market Research & Idea Generation.png';
import npdConceptDesign from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/NPD/Concept Design & Feasibility Analysis.png';
import npdDetailedEngineering from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/NPD/Detailed Engineering & Prototyping.png';
import npdTestingValidation from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/NPD/Testing & Validation.png';

const hero = {
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  title: 'New Product Development',
  subtitle: 'Transforming Ideas into Market-Ready Products with GVPL Technologies',
};

const intro = [
  'At GVPL Technologies, we specialize in providing end-to-end New Product Development (NPD) services that cater to a wide range of industries, including automotive, aerospace, manufacturing, and healthcare. Our holistic approach ensures that your product ideas are meticulously crafted from concept to commercialization, delivering innovative solutions that meet market demands and exceed customer expectations.'
];

const features = [
  {
    title: 'Market Research & Idea Generation',
    image: npdMarketResearch,
    bullets: [
      'In-Depth Market Analysis: Conduct comprehensive research to identify market trends, customer needs, and competitive landscapes, laying the foundation for informed product development.',
      'Ideation Workshops: Facilitate creative sessions to generate innovative product ideas aligned with your business objectives and market opportunities.',
    ],
  },
  {
    title: 'Concept Design & Feasibility Analysis',
    image: npdConceptDesign,
    bullets: [
      'Conceptual Modelling: Develop initial design concepts using advanced CAD tools to visualize product features and aesthetics.',
      'Feasibility Studies: Assess technical and financial viability through simulations, prototyping, and cost analysis to ensure the concept meets performance and budgetary requirements.'
    ],
  },
  {
    title: 'Detailed Engineering & Prototyping',
    image: npdDetailedEngineering,
    bullets: [
      '3D Modeling and Simulation: Create detailed 3D models and perform simulations to optimize design parameters and functionality.',
      'Prototype Development: Build functional prototypes for testing and validation, allowing for iterative improvements and refinement.',
    ],
  },
  {
    title: 'Testing & Validation',
    image: npdTestingValidation,
    bullets: [
      'Production Planning: Develop detailed manufacturing plans, including process selection, tooling design, and supply chain coordination.',
      'Market Launch Support: Provide assistance with marketing strategies, distribution planning, and post-launch monitoring to ensure successful product introduction.',
    ],
  }
];

const benefits = {
  title: 'Why Choose GVPL Technologies?',
  benefits: [
    {
      icon: icon1,
      title: 'Statistic and Analytic Tools',
      desc: 'We all are passionate to transform your ideas into reality. Collaborate with friends, family, and coworkers from any device.',
    },
    {
      icon: icon2,
      title: 'Realtime Inspection',
      desc: 'We all are passionate to transform your ideas into reality. Collaborate with friends, family, and coworkers from any device.',
    },
    {
      icon: icon4,
      title: 'Earn more Exposure',
      desc: 'We all are passionate to transform your ideas into reality. Collaborate with friends, family, and coworkers from any device.',
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
      featuresTitle="Our New Product Development Process"
      featuresDescription="Learn how People leaders everywhere transform their approach to performance, engagement, and development."
      benefits={benefits}
    />
  );
} 