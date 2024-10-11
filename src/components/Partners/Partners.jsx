// 'use client'
// import { useState } from 'react'
// import { FaChevronLeft, FaChevronRight, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Image from 'next/image'
// import logoImg from '@/../public/people_maketh_logo.jpeg'

// const testimonials = [
//     {
//         id: 1,
//         name: 'PeopleMaketh',
//         image: logoImg,
//         quote: 'PeopleMaketh is a collaborative platform connecting innovative companies, enhancing partnerships for impactful solutions.',
//     },
// ]

// export default function Component() {
//     const [currentTestimonial, setCurrentTestimonial] = useState(0)

//     const nextTestimonial = () => {
//         setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
//     }

//     const prevTestimonial = () => {
//         setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
//     }

//     return (
//         <div className="bg-white rounded-lg shadow-sm h-auto mt-24 md:mt-4 flex items-center justify-between px-4 sm:px-6 lg:px-8 xl:px-44 mx-auto">
//             <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//                 {/* Left side: Text content */}
//                 <div className="text-left space-y-4">
//                     <h2 className="text-base lg:text-5xl text-green-600 font-semibold tracking-wide uppercase">Our Partners</h2>
//                     <p className="text-3xl lg:text-4xl font-extrabold text-gray-800">Meet Our High-Level Partners</p>
//                     <p className="text-xl text-gray-500 max-w-xl">
//                         {`We collaborate with innovative companies shaping the future. Get to know them and the impact they're making.`}
//                     </p>
//                     <div className="mt-4 bg-green-100 rounded-lg py-2 px-4 inline-block text-green-600 text-lg font-semibold">
//                         Trusted by Industry Leaders
//                     </div>
//                 </div>

//                 {/* Right side: Image and testimonial card */}
//                 <div className="relative bg-white p-8 rounded-xl shadow-lg w-full lg:w-auto lg:h-auto flex flex-col items-center">
//                     <a href="https://www.peoplemaketh.com/" target="_blank" rel="noopener noreferrer">
//                         <Image
//                             className="w-44 h-44 rounded-sm"
//                             src={testimonials[currentTestimonial].image}
//                             alt={testimonials[currentTestimonial].name}
//                             width={128}
//                             height={128}
//                         />
//                     </a>

//                     <h3 className="mt-4 text-2xl font-semibold text-green-600">
//                         {testimonials[currentTestimonial].name}
//                     </h3>
//                     <p className="mt-4 text-gray-600">{testimonials[currentTestimonial].quote}</p>

//                     {/* Social Media Links */}
//                     <div className="flex space-x-4 mt-4 text-gray-500">
//                         <a href="https://twitter.com/securethread" target="_blank" className="hover:text-gray-400">
//                             <FaTwitter size={24} />
//                         </a>
//                         <a href="https://www.linkedin.com/company/people-maketh/" target="_blank" className="hover:text-gray-400">
//                             <FaLinkedin size={24} />
//                         </a>
//                     </div>

//                     {/* Navigation for testimonials */}
//                     <div className="absolute bottom-4 right-4 flex space-x-2">
//                         <button
//                             onClick={prevTestimonial}
//                             className="p-2 rounded-full bg-purple-100 text-gray-600 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                         >
//                             <FaChevronLeft className="w-4 h-4" />
//                         </button>
//                         <button
//                             onClick={nextTestimonial}
//                             className="p-2 rounded-full bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
//                         >
//                             <FaChevronRight className="w-4 h-4" />
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>


//     )
// }


'use client'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import logoImg from '@/../public/people_maketh_logo.jpeg'

const testimonials = [
    {
        id: 1,
        name: 'PeopleMaketh',
        image: logoImg,
        quote: 'Connecting People',
    },
]
function Component() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }
    return (
        <div>
            <section class="relative pt-12 bg-white h-auto pb-12 md:mt-24">
                <div class="items-center flex flex-wrap ">
                    <div class="w-full md:w-5/12 lg:w-6/12 ml-auto mr-auto px-8 2xl:px-28">
                        <div className="text-center md:text-left space-y-4">
                            <h2 className="text-3xl lg:text-5xl text-green-600 font-semibold tracking-wide uppercase">Our Partners</h2>
                            <p className="text-2xl lg:text-4xl font-extrabold text-gray-800">Meet Our High-Level Partners</p>
                            <p className="text-xl text-gray-500 max-w-xl">{`We collaborate with innovative companies shaping the future. Get to know them and the impact they're making.`}</p>
                            <div className="mt-4 bg-green-100 rounded-lg py-2 px-4 inline-block text-green-600 text-lg font-semibold">Trusted by Industry Leaders</div>
                        </div>
                    </div>
                    <div class="w-full md:w-4/12 lg:w-5/12 ">
                        <div className="relative bg-white p-8 rounded-xl 2xl:ms-36 shadow-lg lg:w-[400px] lg:h-[400px] xl:w-[480px] xl:h-[430px]">
                            <a href="https://www.peoplemaketh.com/" target="_blank" rel="noopener noreferrer">
                                <Image
                                    className="w-44 h-44 rounded-sm"
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    width={128}
                                    height={128}
                                />
                            </a>
                            <h3 className="mt-4 text-2xl  text-green-600">{testimonials[currentTestimonial].name}</h3>
                            <p className="mt-4 text-gray-600">{testimonials[currentTestimonial].quote}</p>

                            <div className="flex space-x-4 mt-4 text-gray-500">
                                <a href="https://twitter.com/securethread" target="_blank" className="hover:text-gray-400">
                                    <FaTwitter size={24} />
                                </a>
                                <a href="https://www.linkedin.com/company/people-maketh/" target="_blank" className="hover:text-gray-400">
                                    <FaLinkedin size={24} />
                                </a>
                            </div>

                            <div className="absolute bottom-4 right-4 flex space-x-2">
                                <button
                                    onClick={prevTestimonial}
                                    className="p-2 rounded-full bg-purple-100 text-gray-600 hover:bg-purple-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <FaChevronLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={nextTestimonial}
                                    className="p-2 rounded-full bg-green-500 text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                >
                                    <FaChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Component
