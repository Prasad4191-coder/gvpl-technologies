import { useState, useEffect, useRef } from 'react';
import Button from '../../components/Button';
import Typewriter from '../../components/Typewriter';
import heroVideo from '../../assets/video/hero.mp4';
import heroVideo1 from '../../assets/video/hero_compressed.mp4';

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleError = () => setVideoError(true);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('error', handleError);

    // Try to play the video
    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.log('Autoplay prevented:', error);
        // Video will show but won't autoplay - this is normal for Chrome
      }
    };

    playVideo();

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('error', handleError);
    };
  }, []);

  return (
    <section className="absolute top-0 left-0 w-full h-screen bg-black overflow-hidden z-10">
      {/* Video Background */}
      <div className="relative h-full">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-60"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect width='1920' height='1080' fill='%23000'/%3E%3C/svg%3E"
          >
            <source src={heroVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-2">GVPL Technologies</h2>
              <p className="text-gray-300">Innovative Engineering Solutions</p>
            </div>
          </div>
        )}

        {/* Play button overlay for Chrome autoplay prevention */}
        {!isPlaying && !videoError && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              onClick={() => {
                if (videoRef.current) {
                  videoRef.current.play().catch(console.log);
                }
              }}
              className="bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-4 transition-all duration-300 group"
              aria-label="Play video"
            >
              <svg
                className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        )}
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
