import React from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  className?: string;
  decimals?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ value, duration = 2, className = '', decimals = 0 }) => {
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, latest => latest.toFixed(decimals));

  React.useEffect(() => {
    const controls = animate(motionValue, value, { duration, ease: 'easeInOut' });
    return controls.stop;
  }, [value, duration, motionValue]);

  return (
    <motion.span className={`font-bold text-4xl md:text-5xl lg:text-6xl text-[#009FE3] drop-shadow-lg ${className}`}>{rounded}</motion.span>
  );
};

export default AnimatedNumber; 