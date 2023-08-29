/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 1.glb 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/1.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Asset3DLoadersceneRoot.geometry} material={nodes.Asset3DLoadersceneRoot.material} />
    </group>
  )
}

useGLTF.preload('/1.glb')