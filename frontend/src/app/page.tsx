import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Portfolio from '@/components/Portfolio';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import CTA from '@/components/CTA';

export default function Home() {
  return (
    <div className="space-y-20 md:space-y-32">
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Experience />
      <Testimonials />
      <Contact />
      <CTA />
    </div>
  );
}
