import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <div className="relative">
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
