import React, {useState, useRef, Suspense, useLayoutEffect} from "react";
import { View, Text, Image } from 'react-native';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import styles from './product.style'
// import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from 'expo-three';
import { useAnimatedSensor, SensorType } from 'react-native-reanimated';


import { COLORS } from '../../constants'
import { HeaderImage } from '../../components'
import { Stack } from 'expo-router';


function Doll(props) {
    const [base, normal, rough] = useLoader(TextureLoader, [
        require('./models/Airmax/textures/BaseColor.jpg'),
        require('./models/Airmax/textures/Normal.jpg'),
        require('./models/Airmax/textures/Roughness.png'),
      ]);
    const material = useLoader(MTLLoader, require('./models/Airmax/shoe.mtl'));

    const obj = useLoader(
        OBJLoader, 
        require('./models/Airmax/shoe.obj'),
        (loader) => {
            material.preload();
            loader.setMaterials(material);
        }
        );

        const mesh = useRef();

        useLayoutEffect(() => {
          obj.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.material.map = base;
              child.material.normalMap = normal;
              child.material.roughnessMap = rough;
            }
          });
        }, [obj]);

        useFrame((state, delta) => {
            let { x, y, z } = props.animatedSensor.sensor.value;
            x = ~~(x * 40) / 5000;
            y = ~~(y * 40) / 5000;
            mesh.current.rotation.x += x;
            mesh.current.rotation.y += y;
          });

          
    return(
        <mesh ref={mesh} rotation={[0.3, 5, 0]}>
            <primitive object={obj} scale={7} />
        </mesh>
    )
}

const Product = () => {
    const animatedSensor = useAnimatedSensor(SensorType.GYROSCOPE, {
        interval: 40,
      });
    
    return(
    <>
        <Stack.Screen
            options={{
                headerStyle: { backgroundColor: COLORS.bgWhite },
                headerShadowVisible: false,
                headerTitleAlign: 'center',
                headerTitle: () => (
                    <HeaderImage />
                )
            }}
        />
            <Canvas style={{height: 100}}>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Suspense fallback={null}>
                    <Doll animatedSensor={animatedSensor}  />
                </Suspense>
            </Canvas>
        {/* <View style={styles.imageContainer}>
        </View> */}

        <View>
            <Image source={'../../assets/images/kaws/kaws1.png'} resizeMode="contain" />
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