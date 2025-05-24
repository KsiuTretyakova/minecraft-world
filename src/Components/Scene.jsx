import { OrbitControls } from "@react-three/drei";
import Ground from "./Ground";
// import { useState } from "react";
import Block from "./Block";

export default function Scene({ blocks, setBlocks, setSelectedBlock }) {
    

    const handleAddBlock = (position) => {
        const key = position.join(', ');
        if (!blocks.some((b) => b.join(', ') === key)) {
            setBlocks((prev) => [...prev, position]);
        }
        
    };


    return (
        <>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.7} castShadow />

        <OrbitControls />

        {/* <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#8BC34A"} />
        </mesh> */}

        <Ground onAddBlock={handleAddBlock} />

        {blocks.map((pos, idx) => (
            <Block key={idx} position={pos} 
            onClick={handleAddBlock} 
            onRemove={setSelectedBlock} />
        ))}

        </>
    );
}