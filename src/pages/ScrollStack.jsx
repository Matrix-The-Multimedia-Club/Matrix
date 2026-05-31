import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 160,
  rotationAmount = 8,
}) => {
  const scrollerRef = useRef(null);
  const cardsRef = useRef([]);
  const lenisRef = useRef(null);
  const animationFrameRef = useRef(null);

  const updateCardTransforms = useCallback(() => {
    const cards = cardsRef.current;
    if (!cards.length) return;

    const scrollTop = scrollerRef.current ? scrollerRef.current.scrollTop : window.scrollY;

    cards.forEach((card, i) => {
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const cardTop = rect.top + window.scrollY;
      const progress = Math.max(0, Math.min(1, (scrollTop - (cardTop - 500)) / 800));

      const scale = 0.92 + i * 0.03;
      const finalScale = 1 - progress * (1 - scale);
      const rotation = i * rotationAmount * progress * 0.5;
      const translateY = progress * (i * 50);

      card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${finalScale}) rotate(${rotation}deg)`;
    });
  }, [rotationAmount]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(scroller.querySelectorAll('.scroll-stack-card'));
    cardsRef.current = cards;

    const lenis = new Lenis({
      duration: 1.3,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      lerp: 0.1,
    });

    lenis.on('scroll', updateCardTransforms);

    const raf = (time) => {
      lenis.raf(time);
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    lenisRef.current = lenis;

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      if (lenisRef.current) lenisRef.current.destroy();
    };
  }, [updateCardTransforms]);

  return (
    <div className={`scroll-stack-scroller ${className}`} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;