import React, { useRef, useState } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"

export default function Saturn(props) {
  const group = useRef()
  const [selected, setselected] = useState(false)
  useFrame(({ clock, camera }) => {
    const elapsedTime = clock.getElapsedTime()
    const angle = 0.21 * elapsedTime
    const targetPosition = group.current?.position;

    const x = props.position[0] * Math.cos(angle)
    const z = props.position[0] * Math.sin(angle)
    const cameraX = (props.position[0] + 10) * Math.cos(angle)
    const cameraZ = (props.position[0] -6) * Math.sin(angle)


    if (group.current) {
      group.current.position.set(x, 0, z)


    }
    if (targetPosition && selected) {
      camera.position.set(cameraX, 4, cameraZ)
      camera.lookAt(targetPosition);
    }
  })


  const { nodes, materials, animations } = useGLTF('/models/saturn.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null} onClick={() => setselected(!selected)}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={0.002}>
          <group name="56fb5d81d5a845599d5e60534f293915fbx" rotation={[Math.PI / 2, 0, 0]}>
            <group name="Object_2">
              <group name="RootNode">
                <group name="Saturn_Rings" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Saturn_Rings_Material_#63_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Saturn_Rings_Material_#63_0'].geometry}
                    material={materials.Material_63}
                  />
                </group>
                <group name="Saturn" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                  <mesh
                    name="Saturn_Material_#50_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Saturn_Material_#50_0'].geometry}
                    material={materials.Material_50}
                  />
                </group>
                <group name="Saturn_Clouds" rotation={[-Math.PI / 2, 0, -0.019]} scale={101}>
                  <mesh
                    name="Saturn_Clouds_Material_#62_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Saturn_Clouds_Material_#62_0'].geometry}
                    material={materials.Material_62}
                  />
                </group>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                  <ringGeometry args={[props.position[0] - 0.005, props.position[0], 64]} />
                  <meshBasicMaterial color={"gray"} side={THREE.DoubleSide} />
                </mesh>
                <group
                  name="Sphere_Mimas"
                  position={[-988.316, 0, -1127.884]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Sphere_Mimas_Material_#64_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere_Mimas_Material_#64_0'].geometry}
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Enceladus"
                  position={[1784.732, 0, 239.893]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Sphere_Enceladus_Material_#64_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere_Enceladus_Material_#64_0'].geometry}
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Dione"
                  position={[-3011.732, 0, -1085.334]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Sphere_Dione_Material_#64_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere_Dione_Material_#64_0'].geometry}
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Rhea"
                  position={[-2969.675, 0, -3375.375]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Sphere_Rhea_Material_#64_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere_Rhea_Material_#64_0'].geometry}
                    material={materials.Material_64}
                  />
                </group>
                <group
                  name="Sphere_Tethys"
                  position={[396.367, 0, 2165.972]}
                  rotation={[-Math.PI / 2, 0, 0]}
                  scale={100}>
                  <mesh
                    name="Sphere_Tethys_Material_#64_0"
                    castShadow
                    receiveShadow
                    geometry={nodes['Sphere_Tethys_Material_#64_0'].geometry}
                    material={materials.Material_64}
                  />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/saturn.glb')