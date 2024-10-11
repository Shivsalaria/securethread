'use client';
import React, { useEffect } from 'react';
import Image from "next/image";
import homeBanner from "@/../public/signin.png";
import logo from "@/../public/logo.png";
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

function SigninForm() {

    // useEffect(() => {
    //     gsap.fromTo(
    //         ".form-section",
    //         { opacity: 0, y: 50 },
    //         {
    //             opacity: 1,
    //             y: 0,
    //             duration: 1,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ".form-section",
    //                 start: "top 80%",
    //                 end: "bottom 20%",
    //                 scrub: true,
    //                 markers: false, 
    //             }
    //         }
    //     );
        
    //     gsap.fromTo(
    //         ".heading-section",
    //         { opacity: 0, x: -100 },
    //         {
    //             opacity: 1,
    //             x: 0,
    //             duration: 1.2,
    //             ease: "power3.out",
    //             scrollTrigger: {
    //                 trigger: ".heading-section",
    //                 start: "top 85%",
    //                 end: "bottom 15%",
    //                 scrub: true,
    //             }
    //         }
    //     );
    // }, []);

    return (
        <>
            <div className='top-4 mt-12 h-[70vh] md:h-[60vh] relative w-full'>
                <Image
                    src={homeBanner}
                    alt="Background"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    className="z-0"
                />
                <div className="hidden sm:block absolute px-4 md:px-16 xl:px-40">
                    <Image src={logo} alt="Logo" className='h-auto w-40 md:w-60' />
                </div>
                <div className="relative z-10 top-40 md:top-0 flex justify-center items-center h-full px-4 sm:px-8 md:px-12 xl:px-20 2xl:px-40 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-opacity-50 p-4 sm:p-8 rounded-md">
                        <div className="heading-section flex flex-col justify-center text-left text-gray-600">
                            <h1 className="text-xl xl:text-4xl 2xl:text-[55px] font-bold 2xl:leading-[120%] mb-8">
                                Sign Up for Comprehensive <br />  
                                Attack Surface Management <br />& VAPT
                            </h1>
                            <p className="text-md text-gray-500 leading-relaxed">
                                Join our platform to gain real-time insights, actionable reports, and powerful penetration testing tools.
                            </p>
                        </div>

                        <div className="form-section flex justify-center md:justify-end items-end mt-8 md:mt-0">
                            <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg p-4 sm:p-8  space-y-6 rounded-md">
                                <div className="flex justify-center">
                                    <h2 className="text-2xl sm:text-xl font-bold text-gray-900 relative inline-block text-center">
                                        Sign up
                                        <span className="absolute left-0 top-8 sm:top-8 w-full h-[8px] bg-amber-500"></span>
                                    </h2>
                                </div>
                                <form className="space-y-4 sm:space-y-2 xl:space-y-6">
                                    <div className="flex flex-col sm:flex-row gap-4">
                                        <input type="text" placeholder="First name" disabled className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                        <input type="text" placeholder="Last name" disabled className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                    </div>
                                    <input type="email" placeholder="Email" disabled className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                    <div className="relative">
                                        <input type="password" placeholder="Password" disabled className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                                        <div className="absolute right-3 top-2">
                                            👁️
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-500">
                                        By creating an account, you are agreeing to our
                                        <a href="#" className="text-indigo-500"> Privacy Policy</a>, and
                                        <a href="#" className="text-indigo-500"> Electronics Communication Policy</a>.
                                    </p>
                                    <button  className="w-full py-3 px-4 bg-green-500 text-white rounded-md hover:bg-green-600">
                                        Sign Up
                                    </button>
                                </form>
                                <div className="text-center text-gray-500">
                                    Already have an account? <a href="#" className="text-indigo-500">Sign In</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SigninForm;