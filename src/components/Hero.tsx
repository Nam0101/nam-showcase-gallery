import { Button } from "@/components/ui/button";
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Parallax } from 'react-scroll-parallax';

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

  return (
    <section className="min-h-screen flex items-center section-padding pt-24 relative overflow-hidden">
      <style>{`
        .reveal-text {
          clip-path: inset(0 100% 0 0);
        }
        .reveal-text.revealed {
          clip-path: inset(0 0 0 0);
        }
      `}</style>
      {/* Parallax background */}
      <Parallax speed={-30} className="absolute inset-0 -z-10">
        <div
          style={{
            width: '100%',
            height: '100%',
            background: 'radial-gradient(circle at 60% 40%, #0ea5e9 0%, #1e293b 80%)',
            opacity: 0.5,
          }}
        />
      </Parallax>
      <div className="container mx-auto">
        <p className={lines[0].className}>
          <RevealText text={lines[0].text} delay={delays[0]} />
        </p>
        <h1 className={lines[1].className}>
          <RevealText text={lines[1].text} delay={delays[1]} />
        </h1>
        <h2 className={lines[2].className}>
          <RevealText text={lines[2].text} delay={delays[2]} />
        </h2>
        <p className={lines[3].className}>
          <RevealText text={lines[3].text} delay={delays[3]} />
        </p>
        <div className="flex gap-4">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
