import React from 'react'
import { View, Text, Image, FlatList, TouchableOpacity,  } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

import styles from './nearbyjobs.style'



const numItems = [1, 2, 3, 4, 5, 6, 7]


const Nearbyjobs = () => {
  return (
    <View style={styles.container}>
      <FlatList 
        data={numItems}
        numColumns={2}
        renderItem={({ item }) =>(
          <NearbyJobCard />
            )}
      />
      
    </View>
  )
}

export default Nearbyjobs