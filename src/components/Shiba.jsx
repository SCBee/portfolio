/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.7 shiba.gltf --transform
Author: zixisun02 (https://sketchfab.com/zixisun51)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/shiba-faef9fe5ace445e7b2989d1c1ece361c
Title: Shiba
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import shibaGLTF from "../assets/shiba-transformed.glb";

export default function Model(props) {
  const { nodes, materials } = useGLTF(shibaGLTF);
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Group18985_default_0.geometry}
        material={materials["default"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/shiba-transformed.glb");
