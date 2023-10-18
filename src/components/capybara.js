import {useGLTF} from "@react-three/drei";
import React, {forwardRef, useState} from "react";
import Annotation from "@/components/annotation";

const Capybara = (props, ref) => {
    const { nodes, materials } = useGLTF('/models/capybara.glb')
    const [hovered, setHover] = useState(false)

    return (
        <group {...props} dispose={null}>
            <mesh
                scale={hovered ? 2.4 : 2}
                rotation={[-Math.PI/2, 0, 0]}
                position={[2, -1, 0]}
                geometry={nodes.Capybara.geometry}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                castShadow
                receiveShadow>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'royalblue'} roughness={0}/>
            </mesh>
            <Annotation role="annotation prey" position={[2.3, 0.5, 0]}>
                Capybara <span style={{ fontSize: '1em' }}>🐁</span>
            </Annotation>
        </group>
    )
}

export default forwardRef(Capybara);