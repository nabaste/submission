import {Html} from "@react-three/drei";
import React from "react";

export default function Annotation({ children, ...props }) {
    return (
        <Html
            {...props}
            transform
            occlude="blending"
            geometry={
                <roundedPlaneGeometry args={[2, 0.47, 0.24]} />
            }>
            <div className={props.role}>{children}</div>
        </Html>
    )
}