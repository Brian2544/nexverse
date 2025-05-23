// @ts-ignore
// eslint-disable-next-line
declare module 'vanta/dist/vanta.halo.min';
// @ts-ignore
// eslint-disable-next-line
declare module 'vanta/dist/vanta.waves.min';
// @ts-ignore
// eslint-disable-next-line
declare module 'vanta/dist/vanta.fog.min';

import { useEffect } from 'react';
import * as THREE from 'three';
import HALO from 'vanta/dist/vanta.halo.min';
import WAVES from 'vanta/dist/vanta.waves.min';
import FOG from 'vanta/dist/vanta.fog.min';

const effectMap: Record<string, any> = {
  HALO,
  WAVES,
  FOG,
};

const useVanta = (ref: React.RefObject<HTMLElement>, effect: 'HALO' | 'WAVES' | 'FOG', options: any = {}) => {
  useEffect(() => {
    if (!ref.current) return;
    let vantaEffect: any;
    const VantaEffect = effectMap[effect];
    if (VantaEffect) {
      vantaEffect = VantaEffect({
        el: ref.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        ...options,
      });
    }
    return () => {
      if (vantaEffect && typeof vantaEffect.destroy === 'function') {
        vantaEffect.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref, effect]);
};

export default useVanta; 