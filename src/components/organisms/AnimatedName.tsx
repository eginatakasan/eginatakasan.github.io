'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import useWindowSize from '../../utils/useWindowSize';

const AnimatedName = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const name = 'Eginata Kasan';
  const { width } = useWindowSize();

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
      className="text-7xl sm:text-[5rem] mt-2 font-cardo font-bold text-textBlack pr-1 border-solid"
    >
      {name.split('').map((char, index) => (
        <span
          key={index}
          className="char inline-block"
          style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
        >
          {char === ' ' && width && width <= 560 ? <br /> : char}
        </span>
      ))}
    </h1>
  );
};

export default AnimatedName;
