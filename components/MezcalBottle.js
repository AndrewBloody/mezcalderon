import { useState, useEffect, useRef, useMemo, Suspense } from "react";
import {
  Canvas,
  useFrame,
  extend,
  useThree,
  useLoader,
} from "react-three-fiber";
import * as THREE from "three";

let GLTFLoader;
let OrbitControls;

const Bottle = () => {
  const { camera } = useThree();
  const bottleRef = useRef();
  const [model, setModel] = useState();
  useFrame(() => {
    if (bottleRef.current) {
      // bottleRef.current.rotation.y += 0.01;
      // bottleRef.current.position.z = -4;
      bottleRef.current.position.y = -1;
      // debugger;
      // const x = camera.position.x,
      //   y = camera.position.y,
      //   z = camera.position.z;

      // camera.position.x = x * Math.cos(0.02) - z * Math.sin(0.02);
      // camera.position.z = z * Math.cos(0.02) + x * Math.sin(0.02);
    }
  });
  GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader").GLTFLoader;
  useEffect(() => {
    new GLTFLoader().load("/botella_cristal4.glb", (gltf) => {
      // debugger;
      setModel(gltf);
    });
  }, []);

  return model ? (
    <group>
      <primitive object={model.scene} ref={bottleRef} />
      <spotLight position={[0, 10, 10]} penumbra={1} castShadow />
      <spotLight position={[0, 10, -10]} penumbra={1} castShadow />
      <spotLight
        position={[0, 2, 0]}
        penumbra={1}
        castShadow
        color="yellow"
        intensity="10"
      />
    </group>
  ) : null;
};

const Controls = () => {
  const orbitRef = useRef();
  const { camera, gl } = useThree();
  const [hasOrbit, setHasOrbit] = useState(false);
  useFrame(() => {
    if (orbitRef.current) {
      orbitRef.current.update();
    }
  });
  useEffect(() => {
    OrbitControls = require("three/examples/jsm/controls/OrbitControls")
      .OrbitControls;
    extend({ OrbitControls });
    setHasOrbit(true);
  }, []);
  // <orbitControls args={[camera, gl.domElement]} ref={orbitRef} autoRotate />
  return hasOrbit ? (
    <orbitControls args={[camera, gl.domElement]} ref={orbitRef} autoRotate />
  ) : null;
};

function Cube(props) {
  const ref = useRef();
  const texture = useLoader(THREE.TextureLoader, "/images/magey.jpg");

  // useFrame(() => {
  //   ref.current.rotation.x += 0.003;
  //   ref.current.rotation.y += 0.003;
  //   ref.current.rotation.z += 0.003;
  // });

  return (
    <mesh ref={ref} {...props}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial
        map={texture}
        attach="material"
        side={THREE.BackSide}
        map-wrapS={THREE.RepeatWrapping}
        map-wrapT={THREE.RepeatWrapping}
        map-repeat={[2, 1]}
      />
    </mesh>
  );
}

const MezcalBottle = () => {
  return (
    <Canvas
      // shadowMap
      // // camera={{ position: [1, 1, 4] }}
      // // style={{ background: "black" }}
      // camera={{ position: [0, 0, 5] }}
      // onCreated={({ gl }) => {
      //   gl.shadowMap.enabled = true;
      //   gl.shadowMap.type = THREE.PCFSoftShadowMap;
      // }}
      colorManagement
      // pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 10] }}
    >
      <ambientLight intensity={0.2} />
      {/* <spotLight intensity="10" position={[0, 0, 0]} color="yellow" /> */}
      <Suspense fallback={null}>
        <Cube scale={[10, 10, 10]} />
      </Suspense>
      {/* <fog attach="fog" args={["white", 5, 15]} /> */}
      {/* <ambientLight /> */}
      {/* <pointLight position={[15, 25, 30]} color="white" intensity="5" />
      <pointLight position={[-15, -25, -30]} color="white" intensity="5" /> */}
      {/* <mesh position={[40, 20, -5]}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshBasicMaterial attach="material" color="green" />
      </mesh> */}
      <Controls />
      <Bottle />
    </Canvas>
  );
};

export default MezcalBottle;
