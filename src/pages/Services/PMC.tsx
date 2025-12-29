import ServicePage from '../../components/ServicePage';
import pmcPoster from '@/assets/gvpl website images/Services/S - PMC/Poster.png';
import pmcAccuratelyDetermineProjectDevelopmentCosts from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/PMC/Accurately Determine Project Development Costs.png';
import pmcOptimizeProductDevelopmentWithExpertControlMethods from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/PMC/Optimize Product Development with Expert Control Methods.png';
import pmcIdentifyMarketValueWithTechnicalFeasibilityStudies from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/PMC/Identify Market Value with Technical Feasibility Studies.png';
import pmcEnsureEcoFriendlyProductDevelopmentWithEnvironmentalImpactAssessment from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/PMC/Eco-Friendly Product Development with Environmental Impact Assessment.png';
import pmcComprehensiveProjectManagementForNewProductDevelopment from '@/assets/gvpl website images/Services/Services Page Images/Services Page Images/PMC/Comprehensive Project Management for New Product Development.png';

const hero = {
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  title: 'Project Management Consultant',
  subtitle: '',
};

const intro = [
  'GVPL Technologies offers top-tier project management consultation to ensure the successful execution of your projects from concept to completion. Our experienced consultants provide comprehensive planning, risk management, and resource allocation strategies tailored to your specific needs.',
  'We conduct detailed technical and financial feasibility studies to validate your project’s potential and optimize performance. Our goal is to streamline processes, enhance efficiency, and achieve project milestones within budget and on time.',
  'Trust GVPL Technologies for expert guidance and innovative solutions that drive project success and deliver exceptional results.'
];

const features = [
  {
    title: 'Accurately Determine Project Development Costs',
    image: pmcAccuratelyDetermineProjectDevelopmentCosts,
    bullets: [
      'Ensure precise cost estimation for new product development with GVPL Technologies. Our thorough review process examines all aspects, from initial design to final production, identifying cost-saving opportunities and ensuring budget adherence. Trust our expertise to accurately determine total project development costs, enhancing efficiency and maximizing profitability. Optimize your budget with our comprehensive cost analysis services.'
    ],
  },
  {
    title: 'Optimize Product Development with Expert Control Methods',
    image: pmcOptimizeProductDevelopmentWithExpertControlMethods,
    bullets: [
      'Enhance your new product development with GVPL Technologies expert recommendations for process optimization.Our specialized control methods streamline production, reduce costs, and improve efficiency.By thoroughly analyzing your processes, we identify key areas for improvement, ensuring optimal performance and quality.Trust our expertise to recommend effective control methods that drive success and innovation.',
    ],
  },
  {
    title: 'Identify Market Value with Technical Feasibility Studies',
    image: pmcIdentifyMarketValueWithTechnicalFeasibilityStudies,
    bullets: [
      'Ensure your new product`s success with GVPL Technologies technical feasibility studies. We identify market value and create a strong value proposition by thoroughly analyzing technical aspects and market potential. Our expert assessments provide insights for strategic decision-making, ensuring your product meets market demands and stands out. Trust us to enhance your product development process with precise feasibility studies.'
    ],
  },
  {
    title: 'Ensure Eco-Friendly Product Development with Environmental Impact Assessment',
    image: pmcEnsureEcoFriendlyProductDevelopmentWithEnvironmentalImpactAssessment,
    bullets: [
      'Optimize your new product development with GVPL Technologies` Environmental Impact Assessment.We ensure your product meets environmental constraints and sustainability goals through comprehensive analysis.Our assessments identify potential impacts, providing actionable insights to minimize environmental footprint.Trust our expertise to develop eco - friendly products that comply with regulations and appeal to environmentally conscious consumers.'
    ],
  },
  {
    title: 'Comprehensive Project Management for New Product Development',
    image: pmcComprehensiveProjectManagementForNewProductDevelopment,
    bullets: [
      'GVPL Technologies excels in managing and assessing every step of your new product development journey. From initiation and planning to design, production, monitoring, controlling, and completion, our expert team ensures efficient project execution. Trust us for meticulous oversight and strategic guidance that ensures your project meets deadlines and exceeds expectations.'
    ],
  }
];

export default function CAD() {
  return (
    <ServicePage
      hero={hero}
      intro={intro}
      features={features}
      featuresTitle="We ensure seamless project execution"
      featuresDescription="by closely monitoring from start to finish, maintaining transparent communication between our team and clients."
    />
  );
} 
