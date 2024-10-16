'use client';
import React, { useEffect } from 'react';
import { MdDevices } from 'react-icons/md';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { RiFolderChartFill } from "react-icons/ri";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { MdOutlineBugReport } from "react-icons/md";
import { BsFillPinMapFill } from "react-icons/bs";
import { GiMarsCuriosity } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";
import { motion } from "framer-motion";


gsap.registerPlugin(ScrollTrigger);

const DomainCard = ({ title, description, Icon }) => {

  useEffect(() => {
    gsap.utils.toArray(".scroll-element").forEach((element, index) => {
      gsap.fromTo(
        element,
        { y: 30, opacity: 0 },
        {
          y: 0,
          // opacity: 1,
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: `.scroll-element-${index}`,
            start: "top 20%",
            end: "bottom 25%",
            scrub: true,
            markers: false,

          },
        }
      );
    });
  }, []);


  return (
    <motion.div
      whileHover={{ scale: [null, 1.1, 1.05] }}
      transition={{ duration: 0.3 }}
      className={`max-w-sm bg-white cursor-pointer h-[35vh] md:h-[41vh] xl:h-[32vh] lg:mb-12 rounded-lg border border-blue-100 border-dotted shadow-sm p-6 text-center m-4 scroll-element hover:bg-green-500 group`}
    >
      <div className="flex justify-center mb-4 text-green-500 group-hover:text-white">
        <Icon size={64} />
      </div>
      <h2 className="text-md md:text-base lg:text-sm xl:text-md 2xl:text-xl font-semibold text-gray-500 mb-2 group-hover:text-white">
        {title}
      </h2>
      <p className="text-gray-500 text-sm md:text-sm lg:text-[10px] xl:text-sm 2xl:text-xl group-hover:text-white">
        {description}
      </p>
    </motion.div>
  );
};


const App = () => {


  const cardsArray = [
    {
      title: '{ Target Enumeration }',
      description: 'Gather details such as DNS Records, Subnets, Country Locations and screenshots for comprehensive target analysis.',
      Icon: MdDevices,
    },
    {
      title: '{Subdomains & Endpoints }',
      description: 'Identify and categorize Subdomains & Endpoints, minimizing potential entry points for unauthorized access.',
      Icon: RiFolderChartFill,
    },
    {
      title: '{ Port & Services }',
      description: 'Monitor and analyze open ports and active services to detect unauthorized access and uphold system integrity.',
      Icon: AiOutlineAppstoreAdd,
    },
    {
      title: '{ Vulnerability }',
      description: 'Assess and categorize system vulnerabilities, offering actionable recommendations to mitigate potential security threats.',
      Icon: FaServer,
    },
    {
      title: '{ App Vulnerablity Finder }',
      description: 'Detect application-specific vulnerabilities in product versions to enhance security measures and prevent potential exploitation.',
      Icon: MdOutlineBugReport,
    },
    {
      title: '{ Attack Surface Map }',
      description: 'Develop detailed maps and visualizations of attack surfaces to highlight critical exposure points and security gaps.',
      Icon: BsFillPinMapFill,
    },
    {
      title: '{ Exploit Search}',
      description: 'Perform comprehensive exploit searches to identify weaknesses and prioritize security measures effectively.',
      Icon: GiMarsCuriosity,
    },
    {
      title: '{ Secure Thread Pentest }',
      description: 'Conduct advanced penetration testing to evaluate security defenses and identify potential attack vectors.',
      Icon: MdOutlineSecurity,
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
          Secure Thread simplifies and accelerates security testing with essential features in one unified tool.</p>
      </div>
      <div className="flex flex-wrap justify-center mt-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
        {cardsArray.map((card, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-0 scroll-element">
            <DomainCard title={card.title} description={card.description} Icon={card.Icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
