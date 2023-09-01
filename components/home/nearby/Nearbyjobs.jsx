import { useRouter } from 'expo-router';
import React from 'react'
import { View, FlatList } from 'react-native'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'

import styles from './nearbyjobs.style'
// import Product from '../../../app/product/product';

const numItems = [1, 2, 3, 4, 5, 6]

const Nearbyjobs = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <FlatList 
        data={numItems}
        numColumns={2}
        renderItem={({ item }) =>(
          <NearbyJobCard handleNavigate={() => router.push(`/product/product`)} />
            )}
      />
      
    </View>
  )
}

export default Nearbyjobs