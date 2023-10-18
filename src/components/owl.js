import {useGLTF} from "@react-three/drei";
import React, {forwardRef, useState} from "react";
import Annotation from "@/components/annotation";

const Owl = (props, ref) => {
    const { nodes, materials } = useGLTF('/models/owl.glb')
    const [hovered, setHover] = useState(false)

    return (
        <group {...props} dispose={null}>
            <mesh
                scale={hovered ? 4.8 : 4}
                position={[-1.3, 1.3, 2]}
                rotation={[0, 0, 0]}
                geometry={nodes.Owl.geometry}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                castShadow
                receiveShadow>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} roughness={0}/>
            </mesh>
            <Annotation role="annotation meso" position={[-1.3, 3.3, 2]}>
                Owl <span style={{ fontSize: '1em' }}>🦉</span>
            </Annotation>
        </group>
    )
}

export default forwardRef(Owl)