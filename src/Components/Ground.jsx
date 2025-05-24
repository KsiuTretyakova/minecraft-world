export default function Ground({ onAddBlock }) {
    const size = 10;
    
    return (
        <group>
            {[...Array(size)].map((_,x) => 
                [...Array(size)].map((_,z) => {
                    const posX = x - size / 2;
                    const posZ = z - size / 2;
                    return (
                        <mesh
                            key={`${x}-${z}`}
                            position={[posX, 0, posZ]}
                            onClick={(e) => {
                                e.stopPropagation();
                                const [gx, gy, gz] = e.point.toArray().map((n) => Math.floor(n + 0.5));
                                onAddBlock([gx, 1, gz]);
                            }}
                        >
                            <boxGeometry args={[1, 1, 1]} />
                            <meshStandardMaterial color={"#4CAF50"} />
                        </mesh>
                    );
                })
            )}
        </group>
    );
}