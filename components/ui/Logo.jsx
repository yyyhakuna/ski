import { useFrame, useLoader } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Canvas, } from '@react-three/fiber';
import { PresentationControls, Stage, } from '@react-three/drei';
import * as THREE from "three"


function Render() {
    let x;
    let y;
    const onMouseMove = event=>{
        x = (event.clientX-320)/100
        y = (event.clientY-550)/100
    }
    return useFrame(state => {
        state.camera.position.y= THREE.MathUtils.lerp(0,-7,0.1)
        document.addEventListener('mousemove', onMouseMove, false)
        state.scene.position.x = THREE.MathUtils.lerp(0, -20, 0.1);
        state.scene.position.y = THREE.MathUtils.lerp(0, -20, 0.1);
        state.scene.rotation.y = THREE.MathUtils.lerp(0, x, 0.1);
        state.scene.rotation.x = THREE.MathUtils.lerp(0, y, 0.1);
    })
}

export default function logo() {
    const width = document.body.width
    const obj = useLoader(GLTFLoader, 'logo.glb');
    // 获取模型场景对象
    const mesh = obj.scene;

    return (
        <Canvas style={{ position: 'absolute' , display:`${width<767?'none':'flex'}`}}>
            <Render />
            <PresentationControls
                speed={1.5}
                global
                zoom={0.7}
                snap={true}
                cursor={false}
                polar={[-0.1, Math.PI, Math.PI]}
            >
                <Stage intensity={0.1}>
                    <primitive
                        object={mesh}
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={[0.8, 0.8, 0.8]}
                    />
                </Stage>
            </PresentationControls>
        </Canvas>
    )
}

