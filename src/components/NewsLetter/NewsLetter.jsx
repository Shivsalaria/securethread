// 'use client';
// import React, { useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import homeBanner from "@/../public/backgroundhome.png";

// gsap.registerPlugin(ScrollTrigger);

// function NewsLetter() {

//     useEffect(() => {
//         gsap.fromTo(
//             ".newsletter-section",
//             { opacity: 0, y: 50 },
//             {
//                 opacity: 1,
//                 y: 0,
//                 duration: 1,
//                 ease: "power3.out",
//                 scrollTrigger: {
//                     trigger: ".newsletter-section",
//                     start: "top 80%",
//                     end: "bottom 20%",
//                     scrub: true,
//                     markers: false, 
//                 }
//             }
//         );
//     }, []);

//     return (
//         <div className="newsletter-section mx-auto mt-72 md:mt-12 max-w-7xl px-6 py-12 lg:px-24 ">
//             <div
//                 className="relative isolate overflow-hidden px-6 py-24 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-32"
//                 style={{
//                     backgroundImage: `url(${homeBanner.src})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >

//                 <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
//                     Join our Newsletter
//                 </h2>

//                 <p className="mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300">
//                     Get all the latest Secure thread updates, news and events.
//                 </p>

//                 <form className="mx-auto mt-10 flex max-w-md gap-x-4">
//                     <label htmlFor="email-address" className="sr-only">Email address</label>
//                     <input 
//                         id="email-address" 
//                         name="email" 
//                         type="email" 
//                         autoComplete="email" 
//                         required 
//                         className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" 
//                         placeholder="Enter your email" 
//                     />
//                     <button 
//                         type="submit" 
//                         className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
//                     >
//                         Subscribe
//                     </button>
//                 </form>

//                 <svg 
//                     viewBox="0 0 1024 1024" 
//                     className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" 
//                     aria-hidden="true"
//                 >
//                     <circle 
//                         cx="512" 
//                         cy="512" 
//                         r="512" 
//                         fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" 
//                         fillOpacity="0.7"
//                     />
//                     <defs>
//                         <radialGradient 
//                             id="759c1415-0410-454c-8f7c-9a820de03641" 
//                             cx="0" 
//                             cy="0" 
//                             r="1"
//                             gradientUnits="userSpaceOnUse" 
//                             gradientTransform="translate(512 512) rotate(90) scale(512)"
//                         >
//                             <stop stopColor="#7775D6"></stop>
//                             <stop offset="1" stopColor="#7ED321" stopOpacity="0"></stop>
//                         </radialGradient>
//                     </defs>
//                 </svg>

//             </div>
//         </div>
//     );
// }

// export default NewsLetter;



// 'use client'
// import { useState } from 'react'
// import { FaChevronLeft } from "react-icons/fa";
// import { FaChevronRight } from "react-icons/fa";
// import {logoImg} from '@/../public/peoplemaketh.png'


// const testimonials = [
//   {
//     id: 1,
//     name: 'PeopleMaketh',
//     image: 'logoImg',
//     quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley..',
//   },
// ]

// export default function Component() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm h-[80vh] reen flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-base lg:text-5xl text-green-600 font-semibold tracking-wide uppercase">Our Partners</h2>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="sm:col-span-2">
//             <p className="text-xl text-gray-500">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Have you done google research which works all free text available in the fermentum..
//             </p>
//           </div>

//           <div className="relative bg-white p-8 rounded-xl shadow-lg">
//             <img
//               className="w-24 h-24 rounded-full border-4 border-purple-500"
//               src={testimonials[currentTestimonial].image}
//               alt={testimonials[currentTestimonial].name}
//             />
//             <h3 className="mt-4 text-2xl font-semibold text-purple-600">{testimonials[currentTestimonial].name}</h3>
//             <p className="mt-4 text-gray-600">{testimonials[currentTestimonial].quote}</p>
//             <div className="absolute bottom-4 right-4 flex space-x-2">
//               <button
//                 onClick={prevTestimonial}
//                 className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//               >
//                 <FaChevronLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//               >
//                 <FaChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }



// 'use client'
// import { useState } from 'react'
// import { FaChevronLeft, FaChevronRight, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Image from 'next/image'
// import logoImg from '@/../public/peoplemaketh.png'

// const testimonials = [
//   {
//     id: 1,
//     name: 'PeopleMaketh',
//     image: logoImg,
//     quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley..',
//   },
//   {
//     id: 2,
//     name: 'securethread',
//     image: logoImg,
//     quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley..',
//   },
//   {
//     id: 3,
//     name: 'hello',
//     image: logoImg,
//     quote: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley..',
//   },
// ]

// export default function Component() {
//   const [currentTestimonial, setCurrentTestimonial] = useState(0)

//   const nextTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
//   }

//   const prevTestimonial = () => {
//     setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//     <div className="bg-white rounded-lg shadow-sm h-[80vh] reen flex items-center justify-center px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl w-full space-y-8">
//         <div className="text-center">
//           <h2 className="text-base lg:text-5xl text-green-600 font-semibold tracking-wide uppercase">Our Partners</h2>
//         </div>

//         <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
//           <div className="sm:col-span-2">
//             <p className="text-xl text-gray-500">
//               Lorem Ipsum is simply dummy text of the printing and typesetting industry. Have you done google research which works all free text available in the fermentum..
//             </p>
//           </div>

//           <div className="relative bg-white p-8 rounded-xl shadow-lg">
//             <Image
//               className="w-24 h-24 rounded-full border-4 border-purple-500"
//               src={testimonials[currentTestimonial].image}
//               alt={testimonials[currentTestimonial].name}
//             />
//             <h3 className="mt-4 text-2xl font-semibold text-purple-600">{testimonials[currentTestimonial].name}</h3>
//             <p className="mt-4 text-gray-600">{testimonials[currentTestimonial].quote}</p>

//             {/* Added Twitter and LinkedIn icons */}
//             <div className="flex space-x-4 mt-4 text-gray-500">
//               <a href="https://twitter.com/securethread" target="_blank" className="hover:text-gray-400">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="https://www.linkedin.com/company/people-maketh/" target="_blank" className="hover:text-gray-400">
//                 <FaLinkedin size={24} />
//               </a>
//             </div>

//             <div className="absolute bottom-4 right-4 flex space-x-2">
//               <button
//                 onClick={prevTestimonial}
//                 className="p-2 rounded-full bg-purple-100 text-purple-600 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//               >
//                 <FaChevronLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={nextTestimonial}
//                 className="p-2 rounded-full bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
//               >
//                 <FaChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


