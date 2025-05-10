import './App.css';
import React from "react";
import Scene from './Components/Scene';
import { Canvas } from '@react-three/fiber';


function App() {
  return (
    <div className="App">
      <h1>Minecraft-World</h1>
      <Canvas
        shadows
        camera={{ position: [5, 10, 10], fov: 50 }}
        style={{ width: '100vw', height: '100vw', background: '#B3E5FC' }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

export default App;
