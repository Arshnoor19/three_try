import React, { Suspense, useEffect, useRef } from 'react'
import planeScene from '../assets/3d/plane.glb'
import { useAnimations, useGLTF } from '@react-three/drei'
const plane = ({isRotating ,...props}) => {
    
    const ref = useRef();
    const {scene , animations} = useGLTF(planeScene);
    const {actions}=useAnimations(animations,ref);

    useEffect(()=>{
      actions['Take 001'].play();
    },[actions,isRotating])
    return (
     
      
        

    <mesh position={[-4,1,0]} {...props} ref={ref} >
        
        

        <primitive object={scene}/>

    </mesh>
  )
}

export default plane