export default function Ground({ onAddBlock }) {
    const size = 10;
    
    return (
        <group>
            {[...Array(size)].map((_,x) => 
                [...Array(size)].map((_,z) => {
                    const pozX = x - size / 2;
                    const pozZ = z - size / 2;
                    return (
                        <mesh
                            
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