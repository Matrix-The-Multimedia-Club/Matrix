import { Canvas, useFrame } from "@react-three/fiber"
import { PerspectiveCamera } from "@react-three/drei"
import { useRef } from "react"

function Tunnel() {
  const group = useRef()

  useFrame(() => {
    group.current.position.z += 0.15

    // reset tunnel
    if (group.current.position.z > 10) {
      group.current.position.z = 0
    }
  })

  return (
    <group ref={group}>
      {[...Array(30)].map((_, i) => (
        <mesh key={i} position={[0, 0, -i * 4]}>
          <boxGeometry args={[6, 6, 0.2]} />
          <meshBasicMaterial wireframe />
        </mesh>
      ))}
    </group>
  )
}

export default function Scene() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />

      <ambientLight intensity={1} />

      <Tunnel />
    </Canvas>
  )
}