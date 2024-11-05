'use client';

import { useState, useEffect } from 'react';

const TestimonialSlider = () => {
    const testimonials = [
        {
            name: "Johndue",
            company: "Farm & CO",
            image: "images/tes.jpg",
            text: "ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            name: "Jane Doe",
            company: "Green Fields",
            image: "images/tes.jpg",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            name: "John Smith",
            company: "Fresh Produce",
            image: "images/product_img1.jpg",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 3000); 

        return () => clearInterval(intervalId); 
    }, []);

    return (
        <div className="clients_red">
            <div className="container mx-auto">
                <div className="relative">
                    <div className="carousel-inner">
                        {testimonials.map((testimonial, index) => (
                            <div
                                className="testimonial-section"
                                key={index}
                                style={{ display: currentIndex === index ? 'block' : 'none' }}
                            >
                                <div className="flex justify-center">
                                    <div className="w-1/4 pr-4">
                                        <div className="testimonial_img">
                                            <img src={testimonial.image} alt={testimonial.name} className="rounded-full" />
                                        </div>
                                    </div>
                                    <div className="w-3/4 pl-4">
                                        <div className="cross_inner">
                                            <h3>
                                                {testimonial.name}<br />
                                                <strong className="text-orange-500">{testimonial.company}</strong>
                                            </h3>
                                            <p>
                                                <img src="icon/1.png" alt="#" className="inline" /> {testimonial.text}
                                                <img src="icon/2.png" alt="#" className="inline" />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialSlider;
