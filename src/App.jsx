import React from 'react'
import Planet from './components/Planet'
import Stars from './components/Stars'
import { mercury, sun, venus, earth, mars, jupiter, saturn, neptune, uranus } from '../constants'
import { Canvas } from '@react-three/fiber'
import { PointLightHelper } from 'three';
import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'
import Orbits from './components/Orbits'
import { useHelper } from '@react-three/drei';
import Sun from './components/Sun'
import Saturn from './components/Saturn'
import Earth from './components/Earth'



const App = () => {

  return (
    <div className='w-full h-screen relative border-2 border-white' >
      <div className='absolute text-white text-4xl z-30'>
        Planet name
      </div>
      <Canvas className='bg-black' >



        <PerspectiveCamera makeDefault position={[0, 10, 30]} />

        <OrbitControls maxAzimuthAngle={Math.PI / 4}/>
        <pointLight intensity={10} distance={1000} decay={1} />

        <ambientLight intensity={0.2} />
        <Sun scale={0.2} />

        {/* <Planet size={4} planetName={sun} position={[0, 0, 0]} sun /> */}
        {/* <Orbits radius={6.1} rotation={0}/> */}
        <Planet size={0.2} planetName={mercury} position={[6, 0, 0]} speed={0.1} />
        {/* <Orbits radius={8.1} rotation={0}/>  */}
        <Planet size={0.5} planetName={venus} position={[8, 0, 0]} speed={0.12} />
        {/* <Orbits radius={14.1} rotation={0}/> */}
        <Planet size={0.8} planetName={earth} position={[14, 0, 0]} speed={0.2} />
        {/* <Earth scale={0.009} position={[14, 0, 0]} /> */}
        {/* <Orbits radius={17.1} rotation={0}/> */}
        <Planet size={0.7} planetName={mars} position={[17, 0, 0]} speed={0.25} />
        <Planet size={2} planetName={jupiter} position={[21, 0, 0]} speed={0.2} />
        {/* <Planet size={1} planetName={saturn} position={[27, 0, 0]} speed={0.3} /> */}
        <Saturn position={[27, 0, 0]} />
        <Planet size={0.9} planetName={uranus} position={[34, 0, 0]} speed={0.1} />
        <Planet size={0.8} planetName={mars} position={[39, 0, 0]} speed={0.2} />
        {/* <Planet size={0.7} planetName={mars} position={[17,0,0]} speed={0.4}/> */}
        <Stars />
      </Canvas>
    </div>
  )
}

export default App