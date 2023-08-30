import React, {useState, useRef, Suspense, useLayoutEffect} from "react";
import { View, Text, Image } from 'react-native';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import CommonHeader from "../../components/common/header/CommonHeader";
import styles from './product.style'
// import * as THREE from 'three';
import { Canvas, useLoader } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

function Doll(props) {
    const material = useLoader(MTLLoader, require('./models/Airmax/shoe.mtl'));

    const obj = useLoader(
        OBJLoader, 
        require('./models/Airmax/shoe.obj'),
        (loader) => {
            material.preload();
            loader.setMaterials(material);
        }
        );
    return(
        <mesh>
            <primitive object={obj} scale={15} />
        </mesh>
    )
}

const Product = () => {
    
    return(
    <>
        {/* <CommonHeader /> */}
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />

                {/* <mesh > */}
                <Suspense fallback={null}>
                    <Doll  />
                </Suspense>
                    {/* <boxGeometry />
                    <meshStandardMaterial color={'orange'} />
                </mesh> */}
            </Canvas>
        <View style={styles.imageContainer}>
        </View>

        <View>
            <Text>Image Rows</Text>
        </View>
        <View>
            <Text>Product Name</Text>
            <Text>Product Price</Text>
        </View>

        <View>
            <Text>Product Description</Text>
        </View>
    </>
    )
}

export default Product