import React, {useState} from 'react'
import {Canvas} from '@react-three/fiber'
import {
    Grid,
    Center,
    Environment,
    CameraControls, CubicBezierLine
} from '@react-three/drei'

import Eagle from "@/components/eagle";
import Owl from "@/components/owl";
import Ocelot from "@/components/ocelot";
import Sloth from "@/components/sloth";
import Capybara from "@/components/capybara";

import AnimalCard from "@/components/animalCard";
import {suspend} from 'suspend-react'

const city = import('@pmndrs/assets/hdri/city.exr')



export default function SceneCanvas() {
    const [animalIndex, setAnimalIndex] = useState(0);



    return (
        <>
            <AnimalCard className="max-w-sm" animal={animalIndex}></AnimalCard>
            <Canvas>
                <group position-y={-3.2}>
                    <Center top>
                        <Eagle onClick={() => setAnimalIndex(0)}/>
                        <Owl onClick={() => setAnimalIndex(1)} />
                        <Ocelot onClick={() => setAnimalIndex(2)} />
                        <Sloth onClick={() => setAnimalIndex(3)} />
                        <Capybara onClick={() => setAnimalIndex(4)} />

                        <Connection lineStart={[0, 3.4, 0]} lineEnd={[2, -0.5, 0]} predator={"Apex"}/>
                        <Connection lineStart={[0, 3.4, 0]} lineEnd={[1.20, 1.5, -2]} predator={"Apex"}/>
                        <Connection lineStart={[0, 3.4, 0]} lineEnd={[-2, -0.4, 0]} predator={"Apex"}/>
                        <Connection lineStart={[1.20, 1.5, -2]} lineEnd={[2, -0.5, 0]} predator={"Meso"}/>
                        <Connection lineStart={[1.3, 1.5, -2]} lineEnd={[-2, -0.4, 0]} predator={"Meso"}/>
                        <Connection lineStart={[-1.3, 1.5, 2]} lineEnd={[2, -0.5, 0]} predator={"Meso"}/>
                    </Center>

                    <Ground/>
                    <CameraControls setPosition={[5, 0, 0]} />
                    <Environment files={suspend(city).default}/>
                </group>
            </Canvas>
        </>
    )
}

function Ground() {
    const gridConfig = {
        cellSize: 0.5,
        cellThickness: 0.5,
        cellColor: '#ffffff',
        sectionSize: 3,
        sectionThickness: 1,
        sectionColor: '#9d4b4b',
        fadeDistance: 30,
        fadeStrength: 1,
        followCamera: false,
        infiniteGrid: true
    }
    return <Grid position={[0, -0.01, 0]} args={[10.5, 10.5]} {...gridConfig} />
}

function Connection(props) {
    return (
        <CubicBezierLine
            start={props.lineStart}
            end={props.lineEnd}
            midA={[0, 2, 0]}
            midB={[0, 0, 0]}
            color={props.predator == "Apex" ? "orangered" : "orange" }
            lineWidth={2}
            dashed={false}
        />
    )
}