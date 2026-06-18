import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '', style }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  
  // Calculate total character count to pass down correctly
  const totalLength = text.length;
  
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={className}
      style={style}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const renderedWord = (
          <span key={wordIndex} style={{ display: 'inline-block', whiteSpace: 'nowrap' }}>
            {wordChars.map((char, charIndex) => {
              const globalIndex = charCounter;
              charCounter++;
              return (
                <AnimatedChar
                  key={`${wordIndex}-${charIndex}`}
                  char={char}
                  index={globalIndex}
                  total={totalLength}
                  progress={scrollYProgress}
                />
              );
            })}
            {wordIndex < words.length - 1 && (
              <span style={{ display: 'inline-block' }}>&nbsp;</span>
            )}
          </span>
        );
        
        // Account for the space in the global character counter
        if (wordIndex < words.length - 1) {
          charCounter++;
        }
        
        return renderedWord;
      })}
    </p>
  );
};

interface AnimatedCharProps {
  char: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
}

const AnimatedChar: React.FC<AnimatedCharProps> = ({ char, index, total, progress }) => {
  const start = index / total;
  const end = Math.min(start + 0.05, 1);
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <motion.span
      style={{
        opacity,
        display: 'inline-block',
      }}
    >
      {char}
    </motion.span>
  );
};

export default AnimatedText;
