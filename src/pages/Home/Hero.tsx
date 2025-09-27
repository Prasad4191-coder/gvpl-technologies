import Button from '../../components/Button';
import Typewriter from '../../components/Typewriter';
import heroVideo from '../../assets/video/hero.mp4';
import heroVideo1 from '../../assets/video/hero_compressed.mp4';

const Hero = () => {

  return (
    <section className="absolute top-0 left-0 w-full h-screen bg-black overflow-hidden z-10">
      {/* Video Background */}
      <div className="relative h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src={heroVideo1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="absolute inset-0">
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Specialists In{' '}
                <Typewriter 
                  words={['CFD Analysis', 'FEA Analysis', 'Product Animation']}
                  typingSpeed={150}
                  deletingSpeed={100}
                  pauseTime={2000}
                  className="text-[#009DFF]"
                />
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8">
                Delivering excellence through advanced technology and expertise in engineering simulations
              </p>
              {/* <div className="flex gap-4">
                <Button variant="primary">Talk to Us</Button>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Portfolio →
                </Button>
              </div> */}
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
