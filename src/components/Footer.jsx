
'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import logo from '@/../public/logo.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Footer() {

    useEffect(() => {
        gsap.fromTo(
            ".footer-section",
            { y: 50 },
            {
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: "top 80%",
                    end: "bottom 20%",
                    scrub: true,
                    markers: false,
                }
            }
        );
    }, []);

    return (
        <footer className="footer-section  relative bg-blueGray-200 px-6 md:px-32 2xl:px-44 pt-12 ">
            <div className="">
                <div className="flex flex-wrap text-left lg:text-left">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className=" z-10 left-4 flex items-start ">
                            <Image src={logo} alt="Logo" className='w-auto h-28' />
                        </div>

                        <h4 className="text-3xl  xl:text-[36px] font-semibold text-gray-600">Let’s work together</h4>
                        <button
                            className="flex mt-6 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                            data-ripple-dark="true"
                        >
                        </button>
                    </div>

                    <div className="w-full lg:w-6/12 px-4 mt-5">
                        <div className="flex flex-wrap items-top mb-6">
                            <div className="w-full lg:w-4/12 px-4 ml-auto">
                                <span className="block text-gray-600 text-sm font-semibold mb-2">Useful Links</span>
                                <ul className="list-unstyled">
                                    <li>
                                        <a className="text-gray-400 block pb-3 text-md" href="#">About Us</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-400 block pb-3 text-md" href="#">Features</a>
                                    </li>
                                    <li>
                                        <a className="text-gray-400 block pb-3 text-md" href="#">Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="w-full lg:w-4/12 px-4">

                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='flex items-center justify-between pb-12'>
                    <div className=" z-10 left-4 flex items-center ">
                        {/* <Image src={logo} alt="Logo" className='w-full h-24' /> */}
                    </div>

                    <div className="flex justify-center mt-8 space-x-6">
                        <a href="https://www.linkedin.com/company/people-maketh/" target="_blank" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Linkedin</span>
                            {/* <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd"></path>
                            </svg> */}
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.025-3.036-1.85-3.036-1.853 0-2.137 1.447-2.137 2.939v5.666H9.35V9.749h3.414v1.455h.049c.476-.9 1.637-1.85 3.368-1.85 3.599 0 4.264 2.37 4.264 5.454v6.644zM5.337 8.294c-1.144 0-2.07-.928-2.07-2.07a2.071 2.071 0 1 1 4.141 0c0 1.144-.927 2.07-2.071 2.07H5.337zM6.669 20.452H3.998V9.749h2.671v10.703zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.225.792 24 1.771 24h20.451C23.206 24 24 23.226 24 22.271V1.729C24 .774 23.206 0 22.225 0z" />
                            </svg>


                        </a>
                        <a href="https://twitter.com/securethread" target="_blank" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                    </div>
                </div>
             

                {/* <div className="text-gray-400 bottom-0 font-bold text-center text-4xl md:text-5xl  xl:text-6xl 2xl:text-8xl blur-[1px] bg-gradient-to-r from-green-800 to-white bg-clip-text text-transparent">
                    SecureThread
                </div>

                <div className="bg-[#f9fafe] blur-sm absolute xl:h-5 2xl:h-8 w-[80vw] bottom-0 text-center">
                </div>
                <div className=''></div> */}

            </div>
        </footer>
    )
}

export default Footer;
