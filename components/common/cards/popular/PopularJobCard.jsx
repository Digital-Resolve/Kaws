import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Animated, FlatList } from 'react-native'
import kawsMain from '../../../../assets/images/kaws/kaws1.png'
import { useRouter } from 'expo-router'

import styles from './popularjobcard.style'
import { icons, SIZES } from '../../../../constants'

const jobTypes = ["All", "Jackets", "Jeans", "Shoes", "Shirts"]

const PopularJobCard = () => {
  const router = useRouter();

  const [activeJobType, setActiveJobType] = useState('All')
  var [moveAnim2] = useState(new Animated.Value(120));

  React.useEffect(() => {
      Animated.timing(moveAnim2, {
        toValue: 0,
        useNativeDriver: true,
        duration: 1000,
        delay: 2000,
      }
    ).start();
  }, []);


  return (
    <>
    <TouchableOpacity
      style={styles.container}
    >
    <View style={styles.textContainer}>
      <Text style={styles.headerText}>
        New Drops
      </Text>
      <Text style={styles.mainText}>
        KAWS. BRAIN DONNELLY
      </Text>
      <Text style={styles.subText}>
        View Collection
      </Text>
    </View>
      
    <Animated.View style={[styles.kawsDollContainer, transform= () => (
                  {
                    translateY: moveAnim2
                  }
                )
                ,]}>
      <TouchableOpacity>
        <Image 
          source={kawsMain}
          style={styles.kawsDollImg}
        />
        
      </TouchableOpacity>
    </Animated.View>

    
      

    </TouchableOpacity>
    
    <View style={styles.tabsContainer}>
        <FlatList 
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
                // router.push(`/search/${item}`)
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small}}
          horizontal
        />
      </View>
      </>
    
  )
}

export default PopularJobCard