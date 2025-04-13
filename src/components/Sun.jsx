import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Sun(props) {
  const { nodes, materials } = useGLTF('/models/sun.glb')
  return (
    <group {...props} dispose={null} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sun_LOD0__0.geometry}
            material={materials['Scene_-_Root']}
            position={[0, 0, -22.361]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sun_LOD1__0.geometry}
            material={materials['Scene_-_Root']}
            position={[0, 0, -22.361]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sun_LOD2__0.geometry}
            material={materials['Scene_-_Root']}
            position={[0, 0, -22.361]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sun_LOD3__0.geometry}
            material={materials['Scene_-_Root']}
            position={[0, 0, -22.361]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Sun_LOD4__0.geometry}
            material={materials['Scene_-_Root']}
            position={[0, 0, -22.361]}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/sun.glb')

export default Sun;