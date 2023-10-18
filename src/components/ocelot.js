import {useGLTF} from "@react-three/drei";
import React, {forwardRef, useState} from "react";
import Annotation from "@/components/annotation";

const Ocelot = (props, ref) => {
    const { nodes, materials } = useGLTF('/models/ocelot.glb')
    const [hovered, setHover] = useState(false)

    return (
        <group {...props} dispose={null}>
            <mesh
                scale={hovered ? 0.18 : 0.15}
                rotation={[Math.PI/2, -Math.PI, Math.PI]}
                position={[1.20, 1.5, -2]}
                geometry={nodes.Ocelot.geometry}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                castShadow
                receiveShadow>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} roughness={0}/>
            </mesh>
            <Annotation role="annotation meso" position={[1.2, 2.8, -2]}>
                Ocelot <span style={{ fontSize: '1em' }}>🐆</span>
            </Annotation>
        </group>
    )
}

export default forwardRef(Ocelot);