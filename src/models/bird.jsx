import { useGLTF } from '@react-three/drei'
import React from 'react'
import birdScene from '../assets/3d/bird.glb'

const bird = () => {
    const {scene, animations}=useGLTF(birdScene);
  return (
    <mesh position={[-2,1,0]} scale={[0.003,0.003,0.003]}>
        <primitive object={scene}/>

    </mesh>
  )
}

export default bird