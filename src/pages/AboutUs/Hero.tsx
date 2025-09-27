import React from 'react';

const Hero = () => {
    return (
        <section className="absolute top-0 left-0 w-full h-[50vh] text-white text-center overflow-hidden z-10 flex items-center justify-center">
            <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="About Hero"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow">About GVPL Technologies</h1>
                <p className="text-lg md:text-2xl font-medium drop-shadow">Engineering Excellence Through Innovation</p>
            </div>
        </section>
    );
};

export default Hero; 