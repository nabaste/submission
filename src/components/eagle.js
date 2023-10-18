import React, {forwardRef, useState} from "react";
import {useGLTF} from "@react-three/drei";
import { extend } from '@react-three/fiber'
import { geometry } from 'maath'
import Annotation from "@/components/annotation";

extend(geometry)
const  Eagle = (props, ref) => {
    const { nodes, materials } = useGLTF('/models/eagle.glb')
    const [hovered, setHover] = useState(false)

    return (
        <group {...props} dispose={null}>
            <mesh
                scale={hovered ? 0.06 : 0.05}
                position={[0, 3.4, 0]}
                rotation={[Math.PI, 0, 0]}
                geometry={nodes.Eagle_01.geometry}
                onPointerOver={(event) => setHover(true)}
                onPointerOut={(event) => setHover(false)}
                castShadow
                receiveShadow>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orangered'} roughness={0}/>
                {/*<Html scale={30} rotation={[0, Math.PI, Math.PI]} position={[0, 10, 0]} transform occlude>*/}
                {/*    <div className="annotation text-gray-800">*/}
                {/*        Eagle <span style={{ fontSize: '1.5em' }}>🦅</span>*/}
                {/*    </div>*/}
                {/*</Html>*/}
            </mesh>
            <Annotation role="annotation apex" position={[0, 5, 0]}>
                Eagle <span style={{ fontSize: '1em' }}>🦅</span>
            </Annotation>
        </group>
    )
}



export default forwardRef(Eagle)