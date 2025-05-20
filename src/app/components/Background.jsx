'use client';
import { useEffect, useRef } from 'react';
import * as THREE from 'three';

let WAVES = null;

export default function Background() {
  const myRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      import('vanta/dist/vanta.waves.min.js').then((module) => {
        WAVES = module.default;

        if (!vantaEffect.current && myRef.current) {
          vantaEffect.current = WAVES({
            el: myRef.current,
            THREE,
            mouseControls: false,
            touchControls: false,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0x0,
            waveSpeed: 0.60,
            zoom: 0.35,
            shininess: 30.00,
          });
        }

      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={myRef} className="fixed inset-0 -z-10 w-full  h-screen"  />;
}
