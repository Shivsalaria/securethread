// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import Header from "@/components/Header"
// import Footer from "@/components/Footer";
// import "./globals.css";
// import SmoothScrolling from "@/components/SmoothScrolling";


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "SecureThread",
//   description: "",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <Header />
//         <SmoothScrolling>
//           {children}
//         </SmoothScrolling>
//         <Footer />
//       </body>
//     </html>
//   );
// }







import type { Metadata } from "next";
import { Poppins, Urbanist } from "@next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

// Import Poppins for headings
const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const urbanist = Urbanist({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "SecureThread",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${urbanist.variable} antialiased`}
      >
        <SmoothScrolling>
        <Header />
          {children}
        <Footer />
        </SmoothScrolling>
      </body>
    </html>
  );
}
