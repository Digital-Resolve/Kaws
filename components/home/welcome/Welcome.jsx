import { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  } from 'react-native'
import { useRouter } from 'expo-router'
import CommonHeader from '../../common/header/CommonHeader'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter();
  const [activeJobType, setActiveJobType] = useState('Full-Time')


  return (
    <View>
    <CommonHeader />

      <View style={styles.container}>

        <Text style={styles.userName}>Welcome back!</Text>
        <Text style={styles.welcomeMessage}>John Doe Franseco</Text>
      </View>

      <View style={styles.searchContainer}>

        <View style={styles.searchWrapper}>
        <Image 
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
            <TextInput 
              style={styles.searchInput}
              value=''
              onChange={() => {}}
              placeholder='What are you looking for...'
            />
        </View>
      </View>


    </View>
  )
}

export default Welcome