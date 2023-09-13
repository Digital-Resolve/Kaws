import React, {useState, useRef, Suspense, useLayoutEffect} from "react";
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import styles from './product.style'
// import * as THREE from 'three';
import { Canvas, useLoader, useFrame } from "@react-three/fiber";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { TextureLoader } from 'expo-three';
// import { useAnimatedSensor, SensorType } from 'react-native-reanimated';
import { ScrollView } from "react-native-gesture-handler";

import { HeaderImage } from '../../components'
import { Stack } from 'expo-router';

// Rendering 3d Model. Couldn't find a working 3d Kaws doll model. Sorry :(
    function Doll() {
        const [angX, setAngX] = useState(1);

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
            });

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

        angle1 = () => {
            setAngX(2);
        };

        angle2 = () => {
            setAngX(3);
        };

        angle3 = () => {
            setAngX(4);
        };

        angle4 = () => {
            setAngX(5);
        };

        return(
            <mesh ref={mesh} rotation={[0.3, angX, 0]} >
                <primitive object={obj} scale={10}  />
            </mesh>
        )
}

// Flatlist num of elements for pictures
const Product = () => {
    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: "#F6F6F6"}}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#F6F6F6" },
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <HeaderImage />
                    )
                }}
            />
            <ScrollView nestedScrollEnabled={true} contentContainerStyle={{flex: 1,}}>
            
                <View style={styles.container}>
                    <View style={styles.model}>
                        <Canvas>
                            {/* <color attach="background" args={["red"]}  /> */}
                            <ambientLight />
                            <pointLight position={[10, 10, 10]} />
                            <Suspense fallback={null}>
                                <Doll   />
                            </Suspense>
                        </Canvas>
                    </View>

                    <View style={styles.imageRow}>
                        <TouchableOpacity style={styles.prodRowImage} onPress={() => angle1()}>
                            <Image source={require('../../assets/images/kaws/kaws4.png')} resizeMode="contain" style={styles.productImage}  />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.prodRowImage} onPress={() => angle2()}>
                            <Image source={require('../../assets/images/kaws/kaws5.png')} resizeMode="contain" style={styles.productImage} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.prodRowImage} onPress={() => angle3()}>
                            <Image source={require('../../assets/images/kaws/kaws4.png')} resizeMode="contain" style={styles.productImage} />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.prodRowImage} onPress={() => angle4()}>
                            <Image source={require('../../assets/images/kaws/kaws5.png')} resizeMode="contain" style={styles.productImage} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.namePrice}>
                        <Text style={styles.productName}>KAWS Statue</Text>
                        <Text style={styles.productPrice}>R16 000.00</Text>
                    </View>

                    <View style={styles.desc}>
                        <Text>The KAWS Family Figures – Grey represents a blend of pop culture and modern artistry. Designed by renowned graffiti artist Brian Donnelly, each figure bears the iconic ‘X’ logo, exemplifying the innovative spirit of KAWS. These limited-edition pieces make a bold statement, infusing any space with a vibrant, contemporary aesthetic. Secure your set today and enjoy a captivating addition to your KAWS collection</Text>
                    </View>

                    <View style={styles.buyBtn}>
                        <TouchableOpacity>
                            <Text style={styles.buyText}>ADD TO CART</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            
            
        </SafeAreaView>
    )
}

export default Product