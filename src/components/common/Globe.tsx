import React, { useRef, useEffect } from 'react';
import Globe from 'react-globe.gl';

const GlobeComponent: React.FC = () => {
  const globeEl = useRef<any>();

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true;
      globeEl.current.controls().autoRotateSpeed = 0.6;
      globeEl.current.pointOfView({ lat: 20, lng: 10, altitude: 2.2 }, 0);
    }
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center" style={{ minHeight: 350 }}>
      <Globe
        ref={globeEl}
        width={undefined}
        height={undefined}
        backgroundColor="#101A2A"
        showGlobe={true}
        showAtmosphere={true}
        atmosphereColor="#a7a7ff"
        atmosphereAltitude={0.18}
        hexPolygonsData={[]}
        hexPolygonResolution={3}
        hexPolygonMargin={0.7}
        hexPolygonColor={() => 'rgba(167,167,255,0.18)'}
        // No labels, no markers
        onGlobeReady={() => {
          if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
          }
        }}
      />
    </div>
  );
};

export default GlobeComponent; 