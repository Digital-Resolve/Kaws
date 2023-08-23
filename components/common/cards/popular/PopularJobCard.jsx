import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import kawsMain from '../../../../assets/images/kaws/kaws1.png'

import styles from './popularjobcard.style'

const PopularJobCard = () => {
  return (
    <TouchableOpacity
      style={styles.container}
    >
      <Text 
        style={styles.textMain}
      >
        Text
      </Text>
      <TouchableOpacity 
        style={styles.kawsDoll}
      >
      
      <Image 
        source={kawsMain}
        style={styles.kawsDollImg}
      />
        
      </TouchableOpacity>

    </TouchableOpacity>
  )
}

export default PopularJobCard