import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustBar />
      <Services />
      <Process />
      <Portfolio />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
