import { motion } from 'framer-motion';
import React from 'react';

const blobs = [
    { color: 'rgba(14,165,233,0.5)', size: 400, top: '10%', left: '20%' },
    { color: 'rgba(244,114,182,0.4)', size: 350, top: '40%', left: '60%' },
    { color: 'rgba(250,204,21,0.3)', size: 300, top: '60%', left: '30%' },
    { color: 'rgba(168,139,250,0.35)', size: 320, top: '30%', left: '70%' },
];

const AuroraBlobs: React.FC = () => (
    <div className="absolute inset-0 -z-40 pointer-events-none overflow-hidden">
        {blobs.map((blob, i) => (
            <motion.div
                key={i}
                className="absolute rounded-full blur-3xl mix-blend-lighten"
                style={{
                    width: blob.size,
                    height: blob.size,
                    top: blob.top,
                    left: blob.left,
                    background: blob.color,
                }}
                animate={{
                    scale: [1, 1.18, 1],
                    x: [0, 40, -40, 0],
                    y: [0, -30, 30, 0],
                }}
                transition={{
                    duration: 14 + i * 2,
                    repeat: Infinity,
                    repeatType: 'mirror',
                    ease: 'easeInOut',
                }}
            />
        ))}
    </div>
);

export default AuroraBlobs; 