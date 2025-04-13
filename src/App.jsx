import React, { useState,useEffect } from 'react';
import Planet from './components/Planet';
import Stars from './components/Stars';
import { mercury, sun, venus, earth, mars, jupiter, saturn, neptune, uranus } from '../constants';
import { Canvas } from '@react-three/fiber';

import { PerspectiveCamera } from '@react-three/drei';
import { OrbitControls, Html } from '@react-three/drei';

import Sun from './components/Sun';
import Saturn from './components/Saturn';

import Text from './components/Text';

const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("sun");
  const [loading, setLoading] = useState(true);
   useEffect(() => {
      console.log("I made this for my younger cousins... OK")
    }, [])
  return (
    <div className='w-full h-screen relative font-kanit overflow-hidden'>
      {/* Loading Screen */}
      {loading && (
        <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
          <div className="text-white text-center flex items-center justify-center">
            <p className="text-2xl font-semibold">Loading ...</p>
            <div className="w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin mt-4 mx-auto"></div>
          </div>
        </div>
      )}

      {/* Planetary Info Text */}
      <Text name={selectedPlanet} />

      {/* 3D Canvas */}
      <Canvas
        className="bg-black"
        onCreated={() => setLoading(false)} // Hide loading screen when 3D scene is ready
      >
        <PerspectiveCamera makeDefault position={[0, 10, 30]} />
        <OrbitControls maxAzimuthAngle={Math.PI / 4} />
        <pointLight intensity={10} distance={10000} decay={1} />
        <ambientLight intensity={0.2} />

        <Sun scale={0.2} handleClick={setSelectedPlanet} name={"sun"} />
        <Planet size={0.2} planetName={mercury} position={[6, 0, 0]} speed={0.1} handleClick={setSelectedPlanet} name={"mercury"} />
        <Planet size={0.5} planetName={venus} position={[8, 0, 0]} speed={0.12} handleClick={setSelectedPlanet} name={"venus"} />
        <Planet size={0.8} planetName={earth} position={[14, 0, 0]} speed={0.2} handleClick={setSelectedPlanet} name={"earth"} />
        <Planet size={0.7} planetName={mars} position={[17, 0, 0]} speed={0.25} handleClick={setSelectedPlanet} name={"mars"} />
        <Planet size={2} planetName={jupiter} position={[21, 0, 0]} speed={0.2} handleClick={setSelectedPlanet} name={"jupiter"} />
        <Saturn position={[27, 0, 0]} handleClick={setSelectedPlanet} name={"saturn"} />
        <Planet size={0.9} planetName={uranus} position={[34, 0, 0]} speed={0.1} handleClick={setSelectedPlanet} name={"uranus"} />
        <Planet size={0.8} planetName={neptune} position={[39, 0, 0]} speed={0.08} handleClick={setSelectedPlanet} name={"neptune"} />
        <Stars />
      </Canvas>
    </div>
  );
};

export default App;
