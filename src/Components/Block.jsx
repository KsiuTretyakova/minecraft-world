export default function Block(position, onClick) {
    return (
        <mesh
            position={position}
            onClick={(e) => {
                e.stopPropagation();
                onClick(position);
            }}
            castShadow
            receiveShadow
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={"#8BC34A"} />
        </mesh>
    );
}