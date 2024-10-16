// 'use client';
// import React from 'react'
// import { useState } from 'react'
// import { Dialog } from '@headlessui/react'
// import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
// import Image from "next/image";
// import logo from "@/../public/logo.png";

// const navigation = [
//   { name: 'Home', href: './', current: true },
//   { name: 'Features', href: '#features-section', current: false },
//   { name: 'About', href: './', current: true },
//   { name: 'Contact', href: './#contact-section', current: true },

// ]

// function Navbar() {
//   let path = "";


//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
//   return (
//     <div className={`isolate mt-2  rounded-lg  top-0 mx-auto  grid font-semibold z-50 `}>
//       <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
//       </div>

//       <div className="px-6 p-4 lg:px-8">
//         <div>
//           <nav className="flex h-9 items-center justify-between" aria-label="Global">
//             <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
//               <div className="flex place-items-center">
//                 <Image src={logo} alt="Logo" className="lg:h-[10vh] w-auto" />
//               </div>
//             </div>
//             <div className="flex lg:hidden">
//               <button
//                 type="button"
//                 className=" inline-flex items-center justify-center rounded-md  text-gray-700"
//                 onClick={() => setMobileMenuOpen(true)}
//               >
//                 <span className="sr-only">Open main menu</span>
//                 <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//             <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:text-xl lg:gap-x-12">
//               {navigation.map((item) => (
//                 <a data-toggle="collapse"
//                   href={item.href}
//                   key={item.name} 
//                   className={`  text-gray-600 hover:text-green-600 cursor-pointer`}>
//                   {item.name}
//                 </a>
//               ))}
//             </div>
//             <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:text-lg lg:justify-end">
//               <a href="https://asmuser.securethread.io/" target="_blank" rel="noopener noreferrer">
//                 <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-md w-40 h-12">
//                   Login
//                 </button>
//               </a>
//             </div>


//           </nav>
//           {/* mobile */}
//           <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
//             <Dialog.Panel focus="true" className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 lg:hidden">
//               <div className="flex h-9 items-center justify-between">
//                 <div className="flex place-items-center">
//                   <Image src={logo} alt="Logo" className="lg:h-[12vh] w-auto" />
//                 </div>
//                 <div className="flex">
//                   <button
//                     type="button"
//                     className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//                     onClick={() => setMobileMenuOpen(false)}
//                   >
//                     <span className="sr-only">Close menu</span>
//                     <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//                   </button>
//                 </div>
//               </div>
//               <div className="mt-6 flow-root">
//                 <div className="-my-6 divide-y divide-gray-500/10">
//                   <div className="space-y-2 py-6">
//                     {navigation.map((item) => (
//                       <a
//                         smooth
//                         key={item.name} 
//                         to={item === "home" ? item.href + "/#top" : item.href + "#top"}
//                         onClick={() => setMobileMenuOpen(false)}
//                         className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7  text-gray-600 hover:bg-gray-400/10"
//                       >
//                         {item.name}
//                       </a>

                      
//                     ))}
//                   </div>
//                   <div className={`${(path === "Contactus ") ? "text-white" : "text-gray-600"}py-6`}>
//                     <a href="https://asmuser.securethread.io/" target="_blank" rel="noopener noreferrer">
//                       <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-md w-40 h-12">
//                         Login
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </Dialog.Panel>
//           </Dialog>
//         </div>
//       </div>


//     </div>
//   )
// }

// export default Navbar


'use client';
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from "next/image";
import logo from "@/../public/logo.png";

// Import GSAP and ScrollToPlugin
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

// Register the ScrollToPlugin
gsap.registerPlugin(ScrollToPlugin);

const navigation = [
  { name: 'Home', href: '#home', current: true },
  { name: 'Features', href: '#features-section', current: false },
  { name: 'About', href: '#about-section', current: true },
  { name: 'Contact', href: '#contact-section', current: true },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Apply GSAP scroll functionality for each link
      document.querySelectorAll('nav a').forEach((link, index) => {
        link.addEventListener('click', (e) => {
          e.preventDefault(); // Prevent default anchor behavior
          const targetSection = navigation[index].href;
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: targetSection,
              offsetY: 70, // Adjust offsetY if needed
              autoKill: true,
            },
          });
        });
      });
    }, navRef);

    // Cleanup event listeners on component unmount
    return () => ctx.revert();
  }, []);

  return (
    <div className="isolate mt-2 rounded-lg top-0 mx-auto grid font-semibold z-50 p-4">
    {/* // <div className="isolate mt-2 rounded-lg top-0 mx-auto grid font-semibold z-50 p- bg-gradient-to-r from-green-500 to-black"> */}
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"></div>

      <div className="px-6 p-4 lg:px-8">
        <div>
          <nav ref={navRef} className="flex h-9 items-center justify-between" aria-label="Global">
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <div className="flex place-items-center">
                <Image src={logo} alt="Logo" className="lg:h-[10vh] w-auto" />
              </div>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:text-lg xl:text-[19px] lg:gap-x-12">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-green-600 cursor-pointer"
                >
                  {item.name}
                </a>
              ))}
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:text-lg lg:justify-end">
              <a href="https://asmuser.securethread.io/" target="_blank" rel="noopener noreferrer">
                <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-md w-40 h-12">
                 Try
                </button>
              </a>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <Dialog.Panel focus="true" className="fixed inset-0 z-50 overflow-y-auto bg-white px-6 py-6 lg:hidden">
              <div className="flex h-9 items-center justify-between">
                <div className="flex place-items-center">
                  <Image src={logo} alt="Logo" className="lg:h-[8vh] w-auto" />
                </div>
                <div className="flex">
                  <button
                    type="button"
                    className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-gray-600 hover:bg-gray-400/10"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="py-6">
                    <a href="https://asmuser.securethread.io/" target="_blank" rel="noopener noreferrer">
                      <button className="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-white py-2 px-4 border border-gray-400 hover:border-transparent rounded-md w-40 h-12">
                        Try
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
