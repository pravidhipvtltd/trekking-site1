import { ReactLenis } from 'lenis/react';

export default function LenisRoot({ children }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.3,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 2,
      }}
    >
      {children}
    </ReactLenis>
  );
}
