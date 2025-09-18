import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import localHeroImg from '@/assets/images/bg.jpeg';
import Slide1 from '@/assets/gvpl website images/About/DetailingProduct.png';
import Slide2 from '@/assets/gvpl website images/About/InnovativeEngineeringSolutions.png';
import Slide3 from '@/assets/gvpl website images/About/GlobaltechnicalExcellence.png';

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    console.log('local image URL:', localHeroImg);

    const slides = [
        {
            title: "Crafting Every Single Product With Detailed",
            description: "We will help to develop every smallest thing into a big one for your company",
            image: Slide1 // Local image
        },
        {
            title: "Innovative Engineering Solutions",
            description: "Delivering excellence through advanced technology and expertise",
            image: Slide2 // Unsplash
        },
        {
            title: "Global Technical Excellence",
            description: "Providing world-class engineering services across industries",
            image: Slide3 // Unsplash
        }
    ];

    // Auto-slide functionality
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(timer);
    }, []);

    // Manual navigation
    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <section className="relative h-screen-hero bg-black overflow-hidden">
            {/* Slides */}
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover opacity-60 max-w-full"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent"></div>
                    </div>
                ))}
            </div>

            {/* Content */}
            <div className="absolute inset-0">
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col justify-center h-full">
                        <div className="max-w-2xl">
                            <h1
                                className="text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-500 transform"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }}
                            >
                                {slides[currentSlide].title}
                            </h1>
                            <p
                                className="text-lg md:text-xl text-gray-200 mb-8 transition-all duration-500 delay-200"
                                style={{
                                    opacity: 1,
                                    transform: 'translateY(0)'
                                }}
                            >
                                {slides[currentSlide].description}
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <Button variant="primary">Talk to Us</Button>
                                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                                    Portfolio →
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
            >
                ←
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/30 text-white hover:bg-black/50 transition-all"
            >
                →
            </button>

            {/* Carousel Navigation */}
            <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`h-3 rounded-full transition-all duration-300 ${currentSlide === index
                            ? 'w-6 bg-[#009DFF]'
                            : 'w-3 bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero; 