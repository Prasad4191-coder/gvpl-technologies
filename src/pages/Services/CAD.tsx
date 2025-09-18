import ServicePage from '../../components/ServicePage';
import icon1 from '@/assets/icon/icon1.png';
import icon2 from '@/assets/icon/icon2.png';
import icon3 from '@/assets/icon/icon3.png';
import icon4 from '@/assets/icon/icon4.png';
import icon5 from '@/assets/icon/icon5.png';
import cadPoster from '@/assets/gvpl website images/Services/S - CAD/Poster.png';
import cad3D from '@/assets/gvpl website images/Services/S - CAD/3D.png';
import cad2DDrafting from '@/assets/gvpl website images/Services/S - CAD/2DDrafting.png';

const hero = {
  image: cadPoster,
  title: 'Computer Aided Design',
  subtitle: 'Transforming Ideas into Market-Ready Products with GVPL Technologies',
};

const intro = [
  'At GVPL Technologies, we specialize in delivering top-tier 3D Computer-Aided Design (CAD) modeling and drafting services tailored to meet the diverse needs of industries such as aerospace, automotive, manufacturing, and healthcare.Our expertise ensures that your concepts are transformed into precise, detailed models and technical drawings, facilitating seamless manufacturing, assembly, and installation processes.'
];

const features = [
  {
    title: 'Detailed 3D CAD Modeling',
    image: cad3D,
    bullets: [
      'Accurate Visualizations: Develop comprehensive 3D models that provide a realistic representation of your product.',
      'Design Optimization: Utilize advanced CAD tools to refine designs, ensuring functionality and manufacturability while reducing material waste.',
      'Virtual Prototyping: Create digital prototypes to simulate real-world performance, allowing for early detection of potential issues and reducing the need for physical prototypes.',
    ],
  },
  {
    title: 'Precise 2D Drafting',
    image: cad2DDrafting,
    bullets: [
      'Technical Drawings: Generate detailed 2D drawings that include essential information such as dimensions, tolerances, and annotations.',
      'Geometric Dimensioning and Tolerancing (GD&T): Apply GD&T standards to allow valuable variations in form and size, ensuring parts fit and function correctly.',
      'Assembly Instructions: Produce comprehensive assembly instructions to support error-free assembly processes.',
    ],
  },
  {
    title: 'Software Proficiency',
    image: 'https://www.shutterstock.com/image-photo/software-proficiency-260nw-1939640737.jpg',
    bullets: [
      'Expertise in leading CAD software such as AutoCAD, SolidWorks, CATIA, and more.',
      'Efficient design iteration and streamlined documentation processes.',
    ],
  },
];

const benefits = {
  title: 'Benefits of Our 3D CAD Services',
  benefits: [
    {
      icon: icon1,
      title: 'Improved Design Quality',
      desc: 'Leverage existing templates and standards to enhance accuracy and consistency in designs.',
    },
    {
      icon: icon2,
      title: 'Increased Productivity',
      desc: 'Visualize components in 3D during the initial stages, allowing for immediate modifications and reducing design time.',
    },
    {
      icon: icon3,
      title: 'Streamlined Documentation',
      desc: 'Simplify the documentation process with automated generation of technical drawings, material specifications, and bills of materials.',
    },
    {
      icon: icon4,
      title: 'International Standards Compliance',
      desc: 'Ensure designs adhere to global standards such as ISO, ANSI, and DIN, facilitating seamless collaboration and compliance.',
    },
    {
      icon: icon5,
      title: 'Efficient Design Iteration:',
      desc: 'Quickly implement and visualize design changes, enabling rapid prototyping and reducing time-to-market.',
    },
  ],
  image: 'https://www.shutterstock.com/image-photo/benefits-cad-260nw-1939640738.jpg',
};

export default function CAD() {
  return (
    <ServicePage
      hero={hero}
      intro={intro}
      features={features}
      featuresTitle="Our 3D CAD Modeling and Drafting Services"
      featuresDescription="Learn how People leaders everywhere transform their approach to performance, engagement, and development."
      benefits={benefits}
    />
  );
} 