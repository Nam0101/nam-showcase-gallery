import { Button } from "@/components/ui/button";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AuroraGradient from './ui/aurora_gradient';
import AuroraBlobs from './ui/aurora_blobs';

const REVEAL_DURATION_PER_CHAR = 0.04; // seconds per character
const REVEAL_MIN_DURATION = 0.5; // seconds
const REVEAL_MAX_DURATION = 1.5; // seconds
const REVEAL_DELAY = 0.3; // seconds between lines

const lines = [
  { text: "Hi, my name is", className: "text-accent mb-4 font-mono" },
  { text: "Nam Nguyen", className: "text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white" },
  { text: "I build things for the web.", className: "text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-slate" },
  { text: "I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, human-centered products.", className: "max-w-lg text-slate text-lg mb-10" },
];

function getRevealDuration(length: number): number {
  return Math.max(REVEAL_MIN_DURATION, Math.min(REVEAL_MAX_DURATION, length * REVEAL_DURATION_PER_CHAR));
}

// Animation variants
const textRevealVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: (custom: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.7, ease: "easeOut" }
  })
};

const buttonGroupVariant = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { delay: 2.5, duration: 0.7, ease: "easeOut" } }
};

const RevealText: React.FC<{ text: string; delay: number; className?: string }> = ({ text, delay, className }) => {
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => setRevealed(true), delay * 1000);
    return () => clearTimeout(timeout);
  }, [delay]);
  const duration = getRevealDuration(text.length);
  return (
    <span
      className={`reveal-text ${revealed ? 'revealed' : ''} ${className || ''}`}
      style={{
        display: 'inline-block',
        transition: `clip-path ${duration}s cubic-bezier(0.77,0,0.175,1)`,
        clipPath: revealed ? 'inset(0 0 0 0)' : 'inset(0 100% 0 0)',
      }}
    >
      {text}
    </span>
  );
};

const Hero = () => {
  // Calculate delays for each line
  let accDelay = 0;
  const delays = lines.map((line, i) => {
    const d = accDelay;
    accDelay += getRevealDuration(line.text.length) + REVEAL_DELAY;
    return d;
  });

  // Mouse-follow gradient state
  const [gradientPos, setGradientPos] = useState({ x: 60, y: 40 });
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height
    });
  };

  // Setup for tsParticles
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <AuroraBlobs />
      <AuroraGradient />
      <style>{`
        .reveal-text {
          clip-path: inset(0 100% 0 0);
        }
        .reveal-text.revealed {
          clip-path: inset(0 0 0 0);
        }
      `}</style>
      {/* Animated particles/gradient background */}
      <Particles
        id="tsparticles-hero"
        init={particlesInit}
        className="absolute inset-0 -z-20"
        options={{
          fullScreen: false,
          background: {
            color: "transparent"
          },
          particles: {
            number: { value: 60, density: { enable: true, area: 800 } },
            color: { value: ["#0ea5e9", "#a78bfa", "#f472b6", "#facc15"] },
            shape: { type: "circle" },
            opacity: { value: 0.25, random: true },
            size: { value: 80, random: { enable: true, minimumValue: 20 } },
            move: {
              enable: true,
              speed: 1.5,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
            links: { enable: false },
          },
          detectRetina: true,
        }}
      />
      {/* Animated floating shapes */}
      <Parallax speed={-30} className="absolute inset-0 -z-10 pointer-events-none">
        {/* Shape 1: Strong parallax, rotation, scale, blue glow */}
        <motion.div
          className="absolute left-10 top-10 w-16 h-16 rounded-full bg-accent/30"
          animate={{
            y: [0, 30, 0],
            x: [0, 10, 0],
            translateX: (mousePos.x - 0.5) * 180,
            translateY: (mousePos.y - 0.5) * 180,
            rotate: (mousePos.x - 0.5) * 40,
            scale: [1, 1.12, 1], // pulsing
            boxShadow: `0 0 ${(mousePos.x - 0.5) * 60}px 20px rgba(14,165,233,0.25)`
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Shape 2: Even stronger parallax, negative rotation, purple glow */}
        <motion.div
          className="absolute right-20 top-32 w-24 h-24 rounded-full bg-white/10 border border-accent"
          animate={{
            y: [0, -40, 0],
            x: [0, -20, 0],
            translateX: (mousePos.x - 0.5) * 240,
            translateY: (mousePos.y - 0.5) * 200,
            rotate: (mousePos.y - 0.5) * -50,
            scale: [1, 1.15, 1], // pulsing
            boxShadow: `0 0 ${(mousePos.y - 0.5) * 80}px 24px rgba(168,139,250,0.18)`
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />
        {/* Shape 3: Medium parallax, positive rotation, pink glow */}
        <motion.div
          className="absolute left-1/2 bottom-10 w-12 h-12 rounded-full bg-accent/20"
          animate={{
            y: [0, 20, 0],
            x: [0, 15, 0],
            translateX: (mousePos.x - 0.5) * 120,
            translateY: (mousePos.y - 0.5) * 120,
            rotate: (mousePos.x + mousePos.y - 1) * 30,
            scale: [1, 1.10, 1], // pulsing
            boxShadow: `0 0 ${(mousePos.x + mousePos.y - 1) * 60}px 16px rgba(244,114,182,0.18)`
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Shape 4: Strong parallax, negative rotation, yellow glow */}
        <motion.div
          className="absolute right-10 bottom-20 w-20 h-20 rounded-full bg-accent/10 border border-white/20"
          animate={{
            y: [0, -25, 0],
            x: [0, 10, 0],
            translateX: (mousePos.x - 0.5) * 200,
            translateY: (mousePos.y - 0.5) * 160,
            rotate: (mousePos.y - 0.5) * 60,
            scale: [1, 1.13, 1], // pulsing
            boxShadow: `0 0 ${(mousePos.y - 0.5) * 70}px 18px rgba(250,204,21,0.18)`
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
        />
      </Parallax>
      <div className="container mx-auto">
        <motion.p
          className={lines[0].className}
          variants={textRevealVariant}
          initial="hidden"
          animate="visible"
          custom={delays[0]}
        >
          <RevealText text={lines[0].text} delay={delays[0]} />
        </motion.p>
        <motion.h1
          className={lines[1].className}
          variants={textRevealVariant}
          initial="hidden"
          animate="visible"
          custom={delays[1]}
        >
          <RevealText text={lines[1].text} delay={delays[1]} />
        </motion.h1>
        <motion.h2
          className={lines[2].className}
          variants={textRevealVariant}
          initial="hidden"
          animate="visible"
          custom={delays[2]}
        >
          <RevealText text={lines[2].text} delay={delays[2]} />
        </motion.h2>
        <motion.p
          className={lines[3].className}
          variants={textRevealVariant}
          initial="hidden"
          animate="visible"
          custom={delays[3]}
        >
          <RevealText text={lines[3].text} delay={delays[3]} />
        </motion.p>
        <motion.div
          className="flex gap-4"
          variants={buttonGroupVariant}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ display: 'inline-block' }}
          >
            <Button className="btn-primary">View My Projects</Button>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.08, boxShadow: "0 4px 24px rgba(0,0,0,0.12)" }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            style={{ display: 'inline-block' }}
          >
            <Button className="btn-secondary">Get In Touch</Button>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
