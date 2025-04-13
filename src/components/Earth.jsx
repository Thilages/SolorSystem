import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const Earth = (props) => {
  const { nodes, materials } = useGLTF('/models/earth.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={96.724}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere1_phong1_0.geometry}
          material={materials.phong1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere1_phong1_0_1.geometry}
          material={materials.phong1}
        />
      </group>
      <group scale={97.464}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere4_lambert6_0.geometry}
          material={materials.lambert6}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere4_lambert6_0_1.geometry}
          material={materials.lambert6}
        />
      </group>
      <group scale={98.098}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere5_lambert7_0.geometry}
          material={materials.lambert7}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pSphere5_lambert7_0_1.geometry}
          material={materials.lambert7}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/earth.glb')

export default Earth