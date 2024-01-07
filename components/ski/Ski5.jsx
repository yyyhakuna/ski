import { useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas,  } from '@react-three/fiber';
import { PresentationControls, Stage, } from '@react-three/drei';

export default function Ski5() {
    const obj = useLoader(GLTFLoader, 'ski5.glb');
    // 获取模型场景对象
    const mesh = obj.scene;
    
    return (
                <Canvas style={{height:'500px'}}>
                    <color attach="background" args={['#13130c']} />
                <PresentationControls
                    speed={1.5}
                    global
                    zoom={0.7}
                    snap={true}
                    polar={[-0.1, Math.PI , Math.PI]}
                >
                        <Stage intensity={0.1}>
                            <primitive
                                object={mesh}
                                position={[0, 0, 0]}
                                rotation={[1 ,-1, 0]}
                                scale = {[0.056050429, 0.056050429, 0.056050429]}
                            />
                        </Stage>
                </PresentationControls>
            </Canvas>

    )
}

