import { useState, useEffect, useRef } from "react";
import {
  Canvas,
  useLoader,
  useFrame,
  extend,
  useThree,
} from "react-three-fiber";

let GLTFLoader;
let OrbitControls;

const Gun = () => {
  const bottleRef = useRef();
  const [model, setModel] = useState();
  useFrame(() => {
    if (bottleRef.current) {
      bottleRef.current.rotation.y += 0.05;
    }
  });
  GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader").GLTFLoader;
  useEffect(() => {
    new GLTFLoader().load("/botella_mezcalderon.gltf", setModel);
  }, []);

  return model ? <primitive object={model.scene} ref={bottleRef} /> : null;
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
  return hasOrbit ? (
    <orbitControls args={[camera, gl.domElement]} ref={orbitRef} />
  ) : null;
};

const Box = () => {
  const mesh = useRef();
  useFrame(() => {
    mesh.current.rotation.y += 0.1;
    mesh.current.rotation.x += 0.1;
  });
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshPhysicalMaterial attach="material" color="green" />
    </mesh>
  );
};

const MezcalBottle = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Controls />
      {/* <Box /> */}
      <Gun />
    </Canvas>
  );
};

export default MezcalBottle;
