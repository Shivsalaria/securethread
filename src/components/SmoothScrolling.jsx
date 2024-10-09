// "use client";
// import { ReactLenis } from "@studio-freight/react-lenis";

// function SmoothScrolling({ children }) {
//   return (
//     <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
//       {children}
//     </ReactLenis>
//   );
// }

// export default SmoothScrolling;


"use client";
import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,  
        duration: 1,  
        smoothTouch: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;



// "use client"
// import { useEffect } from 'react';
// import LocomotiveScroll from 'locomotive-scroll';

// const SmoothScrolling = () => {
//   useEffect(() => {
//     const scroller = new LocomotiveScroll({
//       el: document.querySelector('[data-scroll-container]'),
//       smooth: true,
//       scrollSpeed: 0.8, // Slower scrolling for smoother effect
//       lerp: 0.06, // Lower lerp value for more smoothing
//     });

//     return () => {
//       scroller.destroy(); 
//     };
//   }, []);

//   return null; 
// };

// export default SmoothScrolling;