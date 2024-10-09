'use client';
import React, { useEffect } from 'react';
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import homeBanner from "@/../public/backgroundhome.png";
import pic from '@/../public/dash.png'
// import ReactPlayer from 'react-player';



gsap.registerPlugin(ScrollTrigger);

function MainHome() {
  useEffect(() => {
    gsap.to(".scroll-element", {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".scroll-element",
        start: "top 75%",
        end: "bottom 25%",
        scrub: true,
        markers: false,
      }
    });
  }, []);

  return (
    <>

      <div className='top-4 h-[70vh] sm:h-[80vh] md:h-[30vh] lg:h-[80vh] xl:h-[80vh] 2xl:h-[90vh] 3xl:h-[90vh] relative w-full'>
        <Image
          src={homeBanner}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
        />

        <div className="absolute top-8 lg:top-32 text-2xl 3xl:top-32 md:text-2xl xl:text-[40px] 2xl:text-5xl 3xl:text-6xl font-bold left-[7vw] leading-[118%] sm:left-[10vw] md:left-[7vw] md:w-[32vw] 2xl:w-[35vw] xl:w-[38vw] 3xl:w-[35vw] scroll-element">
          <p className="text-[#ffff]">Transform Your Attack Surface with Next Gen Powerful Toolkit </p>
        </div>

        <div className="absolute text-lg bottom-[40vh] md:text-sm md:bottom-36 xl:bottom-64 2xl:bottom-72 3xl:bottom-96  xl:text-lg 2xl:text-lg left-[7vw] leading-[158%] sm:left-[7vw] md:left-[7vw] md:w-[35vw] xl:w-[38vw] 2xl:w-[35vw] 3xl:w-[32w] scroll-element">
          <p className="text-[#ffff]">Monitor, assess, and act on potential threats effortlessly with dashboards designed to enhance your security operations.</p>
        </div>

        <div className="absolute bottom-5 md:bottom-16 2xl:bottom-36 xl:bottom-32 3xl:bottom-48 text-xs xl:text-sm  2xl:text-lg left-[7vw] leading-[158%] sm:left-[7vw] md:left-[7vw] xl:left-20 2xl:left-32 3xl:left-[7vw] scroll-element">
          <a href="https://asmuser.securethread.io/" target="_blank" rel="noopener noreferrer">
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded-md  md:w-28  xl:w-40 2xl:w-50">
              Login
            </button>
          </a>
        </div>

        <div className="absolute bottom-5 md:bottom-16 2xl:bottom-36 xl:bottom-32 3xl:bottom-48 text-xs xl:text-sm  2xl:text-lg leading-[158%] left-32 sm:left-[7vw] md:left-[24vw] xl:left-[20vw] 2xl:left-[18vw]  3xl:left-[18vw] scroll-element">
          <a href="https://asmuser.securethread.io/signup" target="_blank" rel="noopener noreferrer">
            <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-md md:w-28 xl:w-40 2xl:w-50">
              Signup
            </button>
          </a>
        </div>
      </div>

      <div className="absolute top-96  md:top-48 lg:top-52 lg:left-[57vw] sm:left-[10vw] md:left-[47vw] xl:left-[45vw] scroll-element">
        <Image src={pic} alt="Description of the image" className='rounded-xl px-2 h-[25vh] md:h-[18vh] lg:h-[48vh] xl:h-[50vh] 2xl:h-[60vh]' />
      </div>

      {/* <div className=" rounded-xl xl:mx-12 absolute top-96 md:top-48 lg:top-52 lg:left-[57vw] sm:left-[10vw] md:left-[47vw] xl:left-[45vw] scroll-element">
        <ReactPlayer
          url="https://d2hx5rstbapx4p.cloudfront.net/VN20241008_114122.mp4"
          className='rounded-xl px-2 h-[25vh] md:h-[18vh] lg:h-[48vh] xl:h-[50vh] 2xl:h-[60vh]'
          width='100%'
          height='100%'
          playing={true}
          controls={false}
          loop
          muted={true}
        />
      </div> */}

    </>
  );
}

export default MainHome;


