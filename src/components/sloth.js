import React, {forwardRef, useState} from "react";
import {useGLTF} from "@react-three/drei";
import Annotation from "@/components/annotation";

const Sloth = (props, ref) => {
    const { nodes, materials } = useGLTF('/models/sloth.glb')
    const [hovered, setHover] = useState(false)

    return (
        <group {...props} dispose={null}>
            <mesh
                scale={hovered ? 0.024 : 0.02}
                rotation={[Math.PI, -Math.PI, Math.PI]}
                position={[-2, -0.7, 0]}
                geometry={nodes.Sloth.geometry}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                castShadow
                receiveShadow>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'royalblue'} roughness={0}/>
            </mesh>
            <Annotation role="annotation prey" position={[-2.3, 1.3, 0]}>
                Sloth <span style={{ fontSize: '1em' }}>🦥</span>
            </Annotation>
        </group>
    )
}

export default forwardRef(Sloth)