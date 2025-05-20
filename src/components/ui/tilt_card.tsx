import React, { useRef } from "react";

export type TiltCardProps = {
  children: React.ReactNode;
  maxTilt?: number;
  className?: string;
};

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  maxTilt = 15,
  className = "",
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const deltaX = (x - centerX) / centerX;
    const deltaY = (y - centerY) / centerY;
    const rotateX = deltaY * maxTilt;
    const rotateY = deltaX * -maxTilt;
    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03,1.03,1.03)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)";
    }
  };

  return (
    <div
      ref={cardRef}
      className={`transition-transform duration-300 will-change-transform ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};

export default TiltCard; 