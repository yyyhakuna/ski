import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, useFrame } from '@react-three/fiber';
import { PresentationControls, Stage, Text } from '@react-three/drei';
import * as THREE from "three"
import { useEffect ,useRef} from 'react';

function Render(){
    return useFrame((state) => {
    state.scene.position.y=THREE.MathUtils.lerp(0, -80, 0.1);
    state.scene.position.x=THREE.MathUtils.lerp(0, 50, 0.1);
    state.camera.position.y=THREE.MathUtils.lerp(0, 0, 0);
    },[])
}

export default function Ski0() {
    const obj = useLoader(GLTFLoader, 'ski0.glb');
    // 获取模型场景对象
    const ref = useRef();
    const mesh = obj.scene;
    
    return (
                <Canvas >
                    {/* <Render /> */}
                <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.7}
                    snap={true}
                    polar={[0, 0 , 0]}
                >
                        <Stage intensity={0.1}>
                            <primitive
                                ref={ref}
                                object={mesh}
                                position={[0, 0, 0]}
                                rotation={[1 ,-1, 0]}
                                scale = {[0.066050429, 0.066050429, 0.066050429]}
                            />
                        </Stage>
                </PresentationControls>
            </Canvas>
    )
}

