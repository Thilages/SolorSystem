import React from 'react'
import * as THREE from "three"

const Orbits = ({radius,rotation}) => {
  return (
    <mesh rotation={[-Math.PI/2,rotation,0]} position={[0,0,0]}>
      <ringGeometry args={[radius-0.005,radius,64]} />
      <meshBasicMaterial color={"gray"} side={THREE.DoubleSide}/>
    </mesh>
  )
}

export default Orbits