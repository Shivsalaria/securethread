'use client';
import React, { useEffect } from 'react';
import { MdDevices } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const DomainCard = ({ title, description }) => {
  return (
    <div
      className={`max-w-sm bg-white transition-all hover:bg-green-500 cursor-pointer h-[35vh] md:h-[22vh] xl:h-[32vh] rounded-lg border border-blue-100 border-dotted shadow-sm p-6 text-center m-4 hover:text-white scroll-element`}
    >
      <div className="flex justify-center mb-4 text-green-500 hover:text-white">
        <MdDevices size={64} />
      </div>
      <h2 className="text-md md:text-base lg:text-sm xl:text-md 2xl:text-xl font-semibold text-gray-300 mb-2 hover:text-white">
        {title}
      </h2>
      <p className="text-gray-500 text-sm md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl hover:text-white">
        {description}
      </p>
    </div>
  );
};

const App = () => {
  useEffect(() => {
    gsap.utils.toArray(".scroll-element").forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.scroll-element-${index}`,
            start: "top 75%",
            end: "bottom 25%",
            scrub: true,
            markers: false, 
          },
        }
      );
    });
  }, []);

  const cardsArray = [
    {
      title: '{ Domain Enumeration }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
    {
      title: '{ Feature 2 }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
    {
      title: '{ Feature 3 }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
    {
      title: '{ Feature 4 }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
    {
      title: '{ Feature 5 }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
    {
      title: '{ Feature 6 }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
    {
      title: '{ Feature 7 }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
    {
      title: '{ Feature 8 }',
      description: 'Discover every digital asset tied to your domain for a comprehensive security overview.',
    },
  ];

  return (
    <>
      <div
        id="features-section"
        className="text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mt-12 font-semibold text-center leading-[118%]"
      >
        <p className="text-gray-800"># All features included in a</p>
        <p className="text-gray-800">single Toolkit</p>
      </div>
      <div className="mt-6">
        <p className="text-gray-700 text-center text-sm lg:text-base px-4">
          Venus main features. Most important and useful features of Template in a single design system tool.
        </p>
      </div>
      <div className="flex flex-wrap justify-center mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
        {cardsArray.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-0 scroll-element">
            <DomainCard title={card.title} description={card.description} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
