'use client'
import { useState } from 'react'
import { FaChevronLeft, FaChevronRight, FaTwitter, FaLinkedin } from "react-icons/fa";
import Image from 'next/image'
import logoImg from'@/../public/people_maketh_logo.jpeg'

const testimonials = [
    {
        id: 1,
        name: 'PeopleMaketh',
        image: logoImg,
        quote: 'PeopleMaketh is a collaborative platform connecting innovative companies, enhancing partnerships for impactful solutions.',
    },
]

export default function Component() {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <div className="bg-white rounded-lg shadow-sm h-[65vh] mt-24 md:mt-4 flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-24 mx-auto">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="text-center md:text-left space-y-4">
                    <h2 className="text-base lg:text-5xl text-green-600 font-semibold tracking-wide uppercase">Our Partners</h2>
                    <p className="text-3xl lg:text-4xl font-extrabold text-gray-800">Meet Our High-Level Partners</p>
                    <p className="text-xl text-gray-500 max-w-xl">{`We collaborate with innovative companies shaping the future. Get to know them and the impact they're making.`}</p>
                    <div className="mt-4 bg-green-100 rounded-lg py-2 px-4 inline-block text-green-600 text-lg font-semibold">Trusted by Industry Leaders</div>
                </div>

                <div className="relative bg-white p-8 rounded-xl 2xl:ms-24  shadow-lg lg:w-[500px] lg:h-[430px]">
                    <Image
                        className="w-44 h-44 rounded-full border-4 border-dotted border-green-200"
                        src={testimonials[currentTestimonial].image}
                        alt={testimonials[currentTestimonial].name}
                        width={128}  
                        height={128} 
                    />


                    <h3 className="mt-4 text-2xl font-semibold text-green-600">{testimonials[currentTestimonial].name}</h3>
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

    )
}

