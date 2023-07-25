import { useEffect } from 'react';
import { About } from '@/components/About';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Maps } from '@/components/Maps';
import { Services } from '@/components/Services';
import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {

  useEffect(() => {

    AOS.init();
  }, []);

  return (
    <>
        <div className="relative before:content-[''] before:block before:absolute before:bg-header before:left-0 before:top-0 before:w-full before:h-full before:z-[-1] before:bg-cover before:bg-no-repeat before:opacity-90">
          <Header />
        </div>
        <About />
        <Services />
        <Maps />
        <Footer />
    </>
  )
}
