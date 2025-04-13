import React, { useState } from 'react'
import Planet from './components/Planet'
import Stars from './components/Stars'
import { mercury, sun, venus, earth, mars, jupiter, saturn, neptune, uranus } from '../constants'
import { Canvas } from '@react-three/fiber'

import { PerspectiveCamera } from '@react-three/drei'
import { OrbitControls } from '@react-three/drei'

import Sun from './components/Sun'
import Saturn from './components/Saturn'

import Text from './components/Text'



const App = () => {
  const [selectedPlanet, setSelectedPlanet] = useState("sun")
  return (
    <div className='w-full h-screen relative font-kanit overflow-hidden' >
      <Text name={selectedPlanet} />
      <Canvas className='bg-black' >



        <PerspectiveCamera makeDefault position={[0, 10, 30]} />

        <OrbitControls maxAzimuthAngle={Math.PI / 4} />
        <pointLight intensity={10} distance={10000} decay={1} />

        <ambientLight intensity={0.2} />
        <Sun scale={0.2} handleClick={setSelectedPlanet} name={"sun"} />

        {/* <Planet size={4} planetName={sun} position={[0, 0, 0]} sun /> */}
        {/* <Orbits radius={6.1} rotation={0}/> */}
        <Planet size={0.2} planetName={mercury} position={[6, 0, 0]} speed={0.1} handleClick={setSelectedPlanet} name={"mercury"} />
        {/* <Orbits radius={8.1} rotation={0}/>  */}
        <Planet size={0.5} planetName={venus} position={[8, 0, 0]} speed={0.12} handleClick={setSelectedPlanet} name={"venus"} />
        {/* <Orbits radius={14.1} rotation={0}/> */}
        <Planet size={0.8} planetName={earth} position={[14, 0, 0]} speed={0.2} handleClick={setSelectedPlanet} name={"earth"} />
        {/* <Earth scale={0.009} position={[14, 0, 0]} /> */}
        {/* <Orbits radius={17.1} rotation={0}/> */}
        <Planet size={0.7} planetName={mars} position={[17, 0, 0]} speed={0.25} handleClick={setSelectedPlanet} name={"mars"} />
        <Planet size={2} planetName={jupiter} position={[21, 0, 0]} speed={0.2} handleClick={setSelectedPlanet} name={"jupiter"} />
        {/* <Planet size={1} planetName={saturn} position={[27, 0, 0]} speed={0.3} /> */}
        <Saturn position={[27, 0, 0]} handleClick={setSelectedPlanet} name={"saturn"} />
        <Planet size={0.9} planetName={uranus} position={[34, 0, 0]} speed={0.1} handleClick={setSelectedPlanet} name={"uranus"} />
        <Planet size={0.8} planetName={neptune} position={[39, 0, 0]} speed={0.08} handleClick={setSelectedPlanet} name={"neptune"} />
        {/* <Planet size={0.7} planetName={mars} position={[17,0,0]} speed={0.4}/> */}
        <Stars />
      </Canvas>
    </div>
  )
}

export default App