
import MainHome from "@/components/Mainhome/MainHome";
import Feature from "@/components/Feature/Feature";
import SigninForm from "@/components/SigninForm/SigninForm";
import Contact from "@/components/Contact/Contact";
import Partners from '@/components/Partners/Partners';



export default function Home() {
  return (
    <div data-scroll-container>
      <MainHome />
      <Feature />
      <Partners />
      <SigninForm />
      <Contact />

    </div>
  );
}