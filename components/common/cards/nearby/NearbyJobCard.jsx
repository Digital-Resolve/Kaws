import React, {useState} from 'react'
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native'

import styles from './nearbyjobcard.style'

import kaws2 from '../../../../assets/images/kaws/kaws2.png'
import kaws3 from '../../../../assets/images/kaws/kaws3.png'

const NearbyJobCard = () => {
  const isLoading = false;

  var [fadeAnim] = useState(new Animated.Value(0));
  var [moveAnim] = useState(new Animated.Value(150));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1100,
        delay: 500,
        useNativeDriver: true,
      }),
      Animated.timing(moveAnim, {
        delay: 500,
        toValue: 0,
        useNativeDriver: true,
        duration: 800,
      })
    ]).start(({finished}) => {
      { isLoading ?  (
        fadeAnim.setValue(0),
        moveAnim.setValue(150)
      ):
      (
        fadeAnim.resetAnimation,
        moveAnim.resetAnimation
        
      )}
      
    });
  }, []);
  return (
    <Animated.View style={{
      opacity: fadeAnim,
      transform: [
      {
        translateY: moveAnim
      }
    ],
    }}>
          <View style={styles.itemRow}>
                <TouchableOpacity style={styles.item}>

                  <View style={styles.itemImage}>
                    <Image 
                      source={kaws2}
                      resizeMode='contain'
                      style={styles.productImage}
                    />
                  </View>

                  <View style={styles.itemName}>
                    <Text style={styles.itemDescription}>KAWS DOLL</Text>
                  </View>

                  <View style={styles.itemPrice}>
                    <Text style={styles.itemDescription}>R16 000.00</Text>
                  </View>

                </TouchableOpacity>

                <TouchableOpacity style={styles.item}>

                  <View style={styles.itemImage}>
                    <Image 
                      source={kaws3}
                      resizeMode='contain'
                      style={styles.productImage}
                    />
                  </View>

                  <View style={styles.itemName}>
                    <Text>BOMBER JACKET</Text>
                  </View>

                  <View style={styles.itemPrice}>
                    <Text>R26 000.00</Text>
                  </View>

                </TouchableOpacity>
                
              </View>
    </Animated.View>
        
  )
}

export default NearbyJobCard