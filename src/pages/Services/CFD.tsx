import ServicePage from '../../components/ServicePage';
import icon1 from '@/assets/icon/icon1.png';
import icon2 from '@/assets/icon/icon2.png';
import icon3 from '@/assets/icon/icon3.png';
import icon4 from '@/assets/icon/icon4.png';
import icon5 from '@/assets/icon/icon5.png';
import icn from '@/assets/Pages/CFD/Icon/icon1.png';
import cfdFluidPressureDropAnalysis from '@/assets/gvpl website images/Industries/I-Process/Process Images GTG/CFD/CFD Process  (2).png';
import cfdThermalManagementSolutions from '@/assets/gvpl website images/Industries/I-HAVC/HVAC Images GTG/Airflow Analysis and Thermal Management/Airflow Analysis HVAC (2).png';
import cfdAerodynamicAnalysis from '@/assets/gvpl website images/Industries/I - Aerospace Engineering/Aerospace Images GTG/CFD/Aerospace CFD  (2).png';
import cfdEnvironmentalAndHVACSolutions from '@/assets/gvpl website images/Industries/I-HAVC/HVAC Images GTG/Airflow Analysis and Thermal Management/Airflow Analysis HVAC (4).png';




const hero = {
  image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
  title: 'Computational Fluid Dynamics',
  subtitle: 'Optimizing Fluid Dynamics for Enhanced Performance and Efficiency',
};

const intro = [
  'At GVPL Technologies, we specialize in Computational Fluid Dynamics (CFD) analysis to solve complex engineering challenges involving fluid-fluid, fluid-solid, and fluid-gas interactions. Our high-resolution CFD simulations allow us to measure and predict pressure, temperature, velocity, and flow distribution across various conditions, helping industries optimize product designs, enhance efficiency, and reduce operational risks.'
];

const features = [
  {
    title: 'Industrial Equipment & Process Optimization',
    image: cfdFluidPressureDropAnalysis,
    bullets: [
      'Valve Flow Analysis: Improve pressure regulation and minimize losses in fluid control systems.',
      'Pump & Turbine Flow Analysis: Enhance energy efficiency and reduce cavitation risks.',
      'Dynamic Mixer Flow Analysis: Optimize mixing performance for industrial and pharmaceutical applications.',
      'Particle Separation in Cyclone Separators: Improve filtration and pollutant control.',
    ],
  },
  {
    title: 'Thermal Management Solutions',
    image: cfdThermalManagementSolutions,
    bullets: [
      'Battery Pack Thermal Analysis: Ensure optimal temperature regulation in electric vehicle (EV) and industrial batteries.',
      'Diesel Generator (DG) Set Thermal Analysis: Prevent overheating and increase operational efficiency.',
      'LED Fitting Thermal Management: Enhance heat dissipation for long-lasting lighting solutions.',
      'Economizer Thermal Analysis: Optimize heat recovery and reduce energy consumption.',
    ],
  },
  {
    title: 'Aerospace & Automotive CFD Applications',
    image: cfdAerodynamicAnalysis,
    bullets: [
      'Cabin Flow & Thermal Analysis: Improve passenger comfort and HVAC performance in vehicles and aircraft.',
      'Aerodynamic Analysis: Optimize airflow around automotive and aircraft designs for reduced drag and improved fuel efficiency.',
      'Combustion Simulation in Furnaces: Enhance combustion efficiency and reduce emissions in industrial burners.',
      'Condensation in Headlamps: Prevent fogging and moisture-related failures in automotive lighting systems.',
    ],
  },
  {
    title: 'Environmental & HVAC Solutions',
    image: cfdEnvironmentalAndHVACSolutions,
    bullets: [
      'Pollution Control in Buildings: Design effective air filtration and ventilation systems for improved indoor air quality.',
      'Thermal & Flow Analysis for Cleanrooms: Ensure contamination-free environments in pharmaceutical and semiconductor manufacturing.',
      'Smoke & Fire Propagation Studies: Improve fire safety measures in tunnels, buildings, and industrial facilities.',
    ],
  }
];

const benefits = {
  title: 'Why Choose GVPL Technologies?',
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

// --- CFD Capabilities Section ---
const cfdCapabilities = [
  {
    title: 'Fluid Pressure Drop Analysis',
    desc: 'We employ state-of-the-art instruments and methodologies to deliver precise and reliable results.',
    icon: icn,
  },
  {
    title: 'Velocity Measurement',
    desc: 'We employ state-of-the-art instruments and methodologies to deliver precise and reliable results.',
    icon: icn,
  },
  {
    title: 'Advanced Analytical Techniques',
    desc: 'We employ state-of-the-art instruments and methodologies to deliver precise and reliable results.',
    icon: icn,
  },
  {
    title: 'Advanced Analytical Techniques',
    desc: 'We employ state-of-the-art instruments and methodologies to deliver precise and reliable results.',
    icon: icn,
  },
  {
    title: 'Advanced Analytical Techniques',
    desc: 'We employ state-of-the-art instruments and methodologies to deliver precise and reliable results.',
    icon: icn,
  },
  {
    title: 'Flow and Distribution Studies',
    desc: 'Analyze fluid distribution in HVAC, automotive cooling, and combustion systems.',
    icon: icn,
  },
  {
    title: 'Flow and Distribution Studies',
    desc: 'Analyze fluid distribution in HVAC, automotive cooling, and combustion systems.',
    icon: icn,
  },
  {
    title: 'Flow and Distribution Studies',
    desc: 'Analyze fluid distribution in HVAC, automotive cooling, and combustion systems.',
    icon: icn,
  },
  {
    title: 'Flow and Distribution Studies',
    desc: 'Analyze fluid distribution in HVAC, automotive cooling, and combustion systems.',
    icon: icn,
  },
];

function CFDCapabilities() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-16">
      <h2 className="text-3xl font-bold text-center mb-2 bg-gradient-to-r from-[#05DF72] to-[#00BCFF] bg-clip-text text-transparent">
        Comprehensive CFD Capabilities
      </h2>
      <p className="text-center text-gray-500 mb-10">
        We provide in-depth virtual analysis of products based on the following flow conditions:
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {cfdCapabilities.map((cap, idx) => (
          <div key={idx} className="flex items-start gap-4 bg-white rounded-lg shadow-sm p-4">
            <img src={cap.icon} alt="icon" className="w-10 h-10 object-contain" />
            <div>
              <h3 className="font-semibold text-lg mb-1">{cap.title}</h3>
              <p className="text-gray-600 text-base">{cap.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function CAD() {
  return (
    <ServicePage
      hero={hero}
      intro={intro}
      features={features}
      featuresTitle="Our Expertise in CFD Analysis"
      featuresDescription="With years of experience in computational fluid dynamics, GVPL Technologies has successfully assisted numerous clients in enhancing product efficiency and system performance. Our key CFD applications include:"
      benefits={benefits}
      capabilitiesSection={<CFDCapabilities />}
    />
  );
} 