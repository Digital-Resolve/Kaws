import React from "react";
import { View, Text, Image } from 'react-native';
import CommonHeader from "../../components/common/header/CommonHeader";
import styles from './product.style'





const Product = () => {
    
    return(
    <>
        <CommonHeader />
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