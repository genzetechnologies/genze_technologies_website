import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyUs from './components/sections/WhyUs';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F7FAFF] text-[#475569] font-['Inter',sans-serif] selection:bg-[#2563EB] selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar />

      <main>
        {/* 3D Hero Section */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Why Choose Us Section */}
        <WhyUs />

        {/* Project Portfolio Section */}
        <Projects />

        {/* 5-Step Process Timeline Section */}
        <Process />

        {/* Testimonials Framework Section */}
        <Testimonials />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Dark Navy Footer */}
      <Footer />
    </div>
  );
}
