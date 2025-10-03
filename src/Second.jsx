import { Canvas } from '@react-three/fiber'
import React from 'react'
import { OrbitControls } from '@react-three/drei'
import MacContainer from './MacContainer'

const Second = ({isDark}) => {
  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <MacContainer />
    </div>
  )
}

export default Second;