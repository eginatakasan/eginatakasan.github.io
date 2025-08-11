'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import { gsap } from 'gsap';
import useWindowSize from '../../utils/useWindowSize';

const AnimatedName = () => {
  const textRef = useRef<HTMLHeadingElement>(null);
  const name = 'Eginata Kasan';
  const [isStatic, setIsStatic] = useState(true);
  const { width } = useWindowSize();

  useEffect(() => {
    setIsStatic(false);
  }, []);

  const animateChars = (chars: NodeListOf<Element>) => {
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
        duration: 0.3,
        ease: 'back',
        stagger: 0.15,
      },
    );
  };

  const animateHoverChar = (char: HTMLElement) => {
    gsap.fromTo(
      char,
      {
        y: 0,
        rotation: 0,
      },
      {
        y: -10,
        rotation: 'random(-30, 30)',
        duration: 0.3,
        ease: 'back',
      },
    );
  };

  const animateLeaveChar = (char: HTMLElement) => {
    gsap.to(char, {
      y: 0,
      rotation: 0,
      duration: 0.3,
      ease: 'back',
    });
  };

  const animatedName = useMemo(() => {
    return name.split('').map((char, index) => (
      <span
        key={index}
        className="char inline-block"
        onMouseEnter={event => {
          animateHoverChar(event.currentTarget);
        }}
        onMouseLeave={event => {
          animateLeaveChar(event.currentTarget);
        }}
        style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
      >
        {char === ' ' && width && width <= 560 ? <br /> : char}
      </span>
    ));
  }, [isStatic]);

  useEffect(() => {
    if (textRef.current && !isStatic) {
      const chars = textRef.current.querySelectorAll('.char');
      animateChars(chars);
    }
  }, [isStatic]);

  return (
    <h1
      ref={textRef}
      className="text-7xl sm:text-[5rem] mt-2 font-cardo font-bold text-textBlack pr-1 border-solid hover:cursor-pointer"
    >
      {isStatic ? (
        <span className="char inline-block">Eginata Kasan</span>
      ) : (
        animatedName
      )}
    </h1>
  );
};

export default AnimatedName;
