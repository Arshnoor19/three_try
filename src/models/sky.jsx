import { useGLTF } from '@react-three/drei';
import React from 'react'
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import skyscene from '../assets/3d/sky.glb';


const Sky = ({isRotating}) => {
  const sky = useGLTF(skyscene);
  const skyRef= useRef();

  useFrame((_,delta)=>{
    
      skyRef.current.rotation.y += 0.09 * delta
    
  })

  return (

    <mesh ref={skyRef}>
      <primitive object={sky.scene}/>
    </mesh>
  )
}

export default Sky