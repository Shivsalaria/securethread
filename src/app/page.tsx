
import MainHome from "@/components/MainHome/MainHome";
import Feature from "@/components/Feature/Feature";
import SigninForm from "@/components/SigninForm/SigninForm";
import Contact from "@/components/Contact/Contact";
import Partners from '@/components/Partners/Partners';



export default function Home() {
  return (
    <main data-scroll-container>
    {/* // <main> */}

      <MainHome />
      <Feature />
      <Partners />
      <SigninForm />
      <Contact />

    </main>
  );
}