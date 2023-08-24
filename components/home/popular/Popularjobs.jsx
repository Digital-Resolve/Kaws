import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator, Animated, RefreshControl } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS, SIZES} from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';

import styles from './popularjobs.style'

const Popularjobs = () => {

  const router = useRouter();
  const isLoading = false;
  const error = false;

  var [fadeAnim] = useState(new Animated.Value(0));
  var [moveAnim] = useState(new Animated.Value(150));

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1100,
        useNativeDriver: true,
      }),
      Animated.timing(moveAnim, {
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
    <View style={styles.container}>

      <View style={styles.cardsContainer}  >
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : ( 
              <Animated.View 
                style={{
                  opacity: fadeAnim,
                  transform: [
                  {
                    translateY: moveAnim
                  }
                ],
                }}
                
              >
                <PopularJobCard />
              </Animated.View>

              )}
      </View>
    </View>
  )
}

export default Popularjobs