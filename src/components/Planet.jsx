import { Html, useTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef, useState } from 'react'
import * as THREE from "three"
import { SphereGeometry, TextureLoader } from 'three'


const Planet = ({ size, planetName, position, speed = 0, sun, handleClick, name }) => {
  const [starting, setstarting] = useState(Math.floor(Math.random() * 30))

  // useEffect(() => {


  //   const handlemouseClick = (event) => {
  //     if (event.button == 0) {
  //       if (selected) {
  //         setselected(false)
  //         handleClick("sun")
  //       }
  //     }

  //   }
  //   window.addEventListener("mousedown", handlemouseClick);
  //   return () => {
  //     window.removeEventListener("mousedown", handlemouseClick)
  //   }
  // }, [])

  const [selected, setselected] = useState(false)
  const planet = useRef();
  const texture = useTexture(planetName);
  useFrame(({ clock, camera }, delta) => {
    setstarting(starting + 0.01)
    const elapsedTime = starting
    const angle = speed * elapsedTime
    // console.log(starting)
    // console.log(camera.position)

    const x = position[0] * Math.cos(angle)
    const z = position[0] * Math.sin(angle)

    const cameraX = (position[0] + 10) * Math.cos(angle)
    const cameraZ = (position[0] - 5) * Math.sin(angle)
    if (planet.current) {
      planet.current.position.set(x, 0, z)
      planet.current.rotation.y = planet.current.rotation.y * delta

    }
    if (selected) {


      camera.position.set(cameraX, 7, cameraZ)
      camera.lookAt(planet.current.position)
    }

  })

  const handlePlanetClick = () => {
    setselected(!selected)
    console.log(selected)
    if (selected) {
      handleClick("sun")
    } else {
      handleClick(name)
    }
  }

  return (

    <group >

      <mesh position={position} ref={planet} onClick={() => {
        handlePlanetClick()
      }}>
        <sphereGeometry args={[size, 24, 24]} />
        <meshStandardMaterial map={texture} emissive={sun ? "red" : ""} emissiveIntensity={0.5}

        />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <ringGeometry args={[position[0] - 0.02, position[0], 64]} />
        <meshBasicMaterial color={"gray"} side={THREE.DoubleSide} />
      </mesh>
      {/* {sun ? <pointLight  color={"red"} intensity={2} distance={100} decay={2} /> : <></>} */}
    </group>

  )
}

export default Planet