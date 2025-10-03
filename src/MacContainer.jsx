import { OrbitControls, useGLTF } from '@react-three/drei';
import React from 'react'
import { Canvas } from '@react-three/fiber';


const MacContainer = () => {

  return (
    <div className=' absolute h-[50%] w-[50%] flex justify-center items-center bg-black outline-amber-700 border-2'>
      <Canvas>
        <mesh>
          <OrbitControls />
          <boxGeometry />
        </mesh>
      </Canvas>
    </div>
  )
}

export default MacContainer;
