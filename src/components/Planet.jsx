import { Html, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import { SphereGeometry, TextureLoader } from 'three'


const Planet = ({ size, planetName, position, speed = 0, sun }) => {

  useEffect(() => {
    const handlemouseClick = (event) => {
      if (event.button == 0) {
        if (selected) {
          setselected(false)
        }
      }

    }
    window.addEventListener("mousedown", handlemouseClick);
    return () => {
      window.removeEventListener("mousedown", handlemouseClick)
    }
  }, [])

  const [selected, setselected] = useState(false)
  const planet = useRef();
  const texture = useTexture(planetName);
  useFrame(({ clock, camera }, delta) => {
    const elapsedTime = clock.getElapsedTime();
    const angle = speed * elapsedTime

    // console.log(camera.position)

    const x = position[0] * Math.cos(angle)
    const z = position[0] * Math.sin(angle)

    const cameraX = (position[0] + 10) * Math.cos(angle)
    const cameraZ = (position[0] - 6) * Math.sin(angle)
    if (planet.current) {
      planet.current.position.set(x, 0, z)
      planet.current.rotation.y = planet.current.rotation.y * delta

    }
    if (selected) {
      camera.position.set(cameraX, 7, cameraZ)
      camera.lookAt(planet.current.position)
    }

  })

  return (

    <group >

      <mesh position={position} ref={planet} onClick={() => setselected(!selected)}>
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial map={texture} emissive={sun ? "red" : ""} emissiveIntensity={0.5}

        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[position[0] - 0.005, position[0], 64]} />
        <meshBasicMaterial color={"gray"} side={THREE.DoubleSide} />
      </mesh>
      {/* {sun ? <pointLight  color={"red"} intensity={2} distance={100} decay={2} /> : <></>} */}
    </group>

  )
}

export default Planet