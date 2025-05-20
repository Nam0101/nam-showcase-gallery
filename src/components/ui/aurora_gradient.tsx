import { motion, useMotionValue, useMotionTemplate, animate } from 'framer-motion';
import React, { useEffect } from 'react';

interface AuroraGradientProps {
    className?: string;
    style?: React.CSSProperties;
    colors?: string[];
    duration?: number;
}

const DEFAULT_COLORS = [
    '#0ea5e9', // blue
    '#a78bfa', // purple
    '#f472b6', // pink
    '#facc15', // yellow
    '#0ea5e9', // blue (loop)
];

const AuroraGradient: React.FC<AuroraGradientProps> = ({
    className = '',
    style = {},
    colors = DEFAULT_COLORS,
    duration = 10,
}) => {
    const color = useMotionValue(colors[0]);

    useEffect(() => {
        const controls = animate(color, colors, {
            ease: 'easeInOut',
            duration,
            repeat: Infinity,
            repeatType: 'mirror',
        });
        return controls.stop;
    }, [color, colors, duration]);

    const backgroundImage = useMotionTemplate`radial-gradient(120% 120% at 60% 40%, rgba(14,165,233,0.18) 40%, ${color})`;

    return (
        <motion.div
            className={`absolute inset-0 w-full h-full -z-30 ${className}`}
            style={{ backgroundColor: '#0f172a', ...style, backgroundImage }}
            aria-hidden="true"
        />
    );
};

export default AuroraGradient; 