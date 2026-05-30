'use client';

/* eslint-disable react-hooks/set-state-in-effect */

import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '@/lib/use-reduced-motion';

interface Props {
  /** Final numeric value to count up to */
  value: number;
  /** Prefix (e.g., "$") */
  prefix?: string;
  /** Suffix (e.g., "K", "M", "/yr") */
  suffix?: string;
  /** Animation duration in ms */
  duration?: number;
  /** Delay before animation kicks off in ms (after viewport entry) */
  delay?: number;
  /** Tailwind className for the rendered span */
  className?: string;
}

/**
 * Animated metric counter — counts from 0 to `value` when scrolled into view.
 * Reduced-motion users see the final value immediately.
 * Pattern adapted from FeeTierReveal CountUp; simplified for one-shot use.
 */
export function CountUpMetric({
  value,
  prefix = '',
  suffix = '',
  duration = 1400,
  delay = 0,
  className = '',
}: Props) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);
  const [triggered, setTriggered] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !triggered) {
            setTriggered(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [reduce, triggered, value]);

  useEffect(() => {
    if (!triggered || reduce) return;
    let raf: number;
    const startAt = performance.now() + delay;
    const tick = (now: number) => {
      if (now < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startAt;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out-quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setDisplay(Math.round(value * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(tick);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [triggered, reduce, value, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}
