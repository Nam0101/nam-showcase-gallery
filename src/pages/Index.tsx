import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { ParallaxProvider } from 'react-scroll-parallax';

const Index = () => {
  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-navy text-white">
        <Navbar />
        <AnimatedSection><Hero /></AnimatedSection>
        <AnimatedSection delay={0.1}><About /></AnimatedSection>
        <AnimatedSection delay={0.2}><Projects /></AnimatedSection>
        <AnimatedSection delay={0.3}><Skills /></AnimatedSection>
        <AnimatedSection delay={0.4}><Contact /></AnimatedSection>
        <Footer />
      </div>
    </ParallaxProvider>
  );
};

export default Index;
