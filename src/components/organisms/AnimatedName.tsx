'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const AnimatedName = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const name = 'Eginata Kasan';

  useEffect(() => {
    if (textRef.current) {
      const chars = textRef.current.querySelectorAll('.char');

      gsap.fromTo(
        chars,
        {
          y: -100,
          opacity: 0,
          rotation: 'random(-80, 80)',
        },
        {
          y: 0,
          opacity: 1,
          rotation: 0,
          duration: 0.7,
          ease: 'back',
          stagger: 0.15,
        },
      );
    }
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-[5rem] font-cardo font-bold text-textBlack pr-1 border-solid"
    >
      {name.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
