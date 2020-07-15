import { useState, useEffect, useRef } from "react";
import { Canvas, useFrame, extend, useThree } from "react-three-fiber";

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

const MezcalBottle = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Controls />
      <Gun />
    </Canvas>
  );
};

export default MezcalBottle;
