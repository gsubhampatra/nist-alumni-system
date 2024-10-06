import React, { useState, useEffect } from 'react';

const Hero = () => {
    const banners = [
        {
            id: 1,
            title: "DISTINGUISHED ALUMNI",

            image: "https://alumni.nist.edu/images/slides/slide-3.jpg",
        },
        {
            id: 2,
            title: "DISTINGUISHED ALUMNI",
            image: "https://alumni.nist.edu/images/slides/slide-4.jpg",
        },
        {
            id: 3,
            title: "DISTINGUISHED ALUMNI",
            image: "https://alumni.nist.edu/images/slides/slide-1.jpg",
        },
        {
            id: 4,
            title: "DISTINGUISHED ALUMNI",
            image: "https://alumni.nist.edu/images/slides/slide-2.jpg",
        },
        // Add more banners if needed
    ];

    const [currentBanner, setCurrentBanner] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBanner((prevBanner) => (prevBanner + 1) % banners.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [banners.length]);

    return (
        <section className="bg-gray-200  p-5">
            <div className="container mx-auto flex items-center">
                    <img
                        src={banners[currentBanner].image}
                        alt={banners[currentBanner].title}
                     
                    />
            
            </div>
        </section>
    );
};

export default Hero;
