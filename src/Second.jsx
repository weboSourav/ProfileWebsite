import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import { Environment, OrbitControls, ScrollControls, useGLTF, useScroll, useTexture } from '@react-three/drei'
import * as THREE from 'three'
const Second = ({isDark}) => {
  return (
    <div className='h-screen w-full flex justify-center items-center '>
      <Canvas camera={{fov:25 ,position:[0,-1,100]}}>
        
        <Environment files={['https://dl.polyhaven.org/file/ph-assets/HDRIs/exr/4k/studio_small_09_4k.exr']}/>
    <ScrollControls pages={3}>
      <MacContainer />
    </ScrollControls>
    
    </Canvas>
</div>
  )
}
const  MacContainer = () =>{
let model = useGLTF('/laptop.glb');
let meshes = {};
model.scene.traverse((e) => {
meshes[e.name] = e;



})
console.log(meshes);
meshes.Screen.rotation.x=THREE.MathUtils.degToRad(270);
// meshes.matte.material.map=tex;

let data = useScroll();

useFrame((state,delta) =>{
meshes.Screen.rotation.x=THREE.MathUtils.degToRad(270 - (data.offset * 90));



})


return (
  <group>
    <primitive object={model.scene} />
  </group>
);



}



export default Second;