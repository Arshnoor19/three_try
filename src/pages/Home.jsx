import {Suspense, useState} from "react"
import { Canvas } from "@react-three/fiber"
import Loader from "../Components/Loader"
import Island from "../models/island";
import Sky from '../models/sky'
import Plane from '../models/plane'
import Bird from '../models/bird'
{/* <div className ="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
      Homey!
     </div> */}

const Home = () => {
  const [isRotating , setIsRotating]=  useState(false);


  const adjustIslandForScreenSize =()=> {
     let ScreenScale=null;
     let ScreenPosition=[0,-6.5,-43];
     let rotation = [0.1,4.7,0];

     if(window.innerWidth < 768)
     {
      ScreenScale =[0.9,0.9,0.9];
      
     }else{
      ScreenScale =[1,1,1];
      
     }
     return [ScreenScale,ScreenPosition,rotation];
  }
  const adjustPlaneForScreenSize =()=> {
     let ScreenScale,ScreenPosition;
     

     if(window.innerWidth < 768)
     {
      ScreenScale =[1.5,1.5,1.5];
      ScreenPosition=[0,-1.5,0];
     }else{
      ScreenScale =[3,3,3];
      ScreenPosition=[0,-4,-4];
     }
     return [ScreenScale,ScreenPosition];
  }
  

  const [islandScale, islandPosition,islandRotation]=adjustIslandForScreenSize();
  const [planeScale,planePosition]=adjustPlaneForScreenSize();

  return (
    <section className='w-full h-screen relative'>
      <Canvas 
        className={`w-full h-screen bg-transparent ${ isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        camera={{near: 0.1 , far : 1000}}
      >
        <Suspense fallback={<Loader/>}>
         <directionalLight position={[1,1,1]} intensity={1}/>
         <ambientLight intensity={0.45}/>
         <pointLight/>
         <spotLight/>
         <hemisphereLight skyColor="#03588a" groundColor="#03588a" intensity={1}/>
         
         <Plane
          isRotating={isRotating}
          planeScale={planeScale}
          planePosition={planePosition}
          rotation = {[0,20,0]}
         />
         <Sky
         
         />
         <Island
          position = {islandPosition}
          scale={islandScale}
          rotation ={islandRotation}
          isRotating={isRotating}
          setIsRotating={setIsRotating}
         />
         <Bird
          
         />
        </Suspense>

      </Canvas>
    </section>
  )
}

export default Home