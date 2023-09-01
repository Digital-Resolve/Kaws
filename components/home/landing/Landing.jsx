import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Stack } from 'expo-router';
import Svg, {Path} from 'react-native-svg';

import styles from './landing.style';

const Landing = ({change}) => {
    
    return (
        <View>
        <Stack.Screen options={{  headerShown: false }} />
        <View style={styles.container}>
            <Svg xmlns="http://www.w3.org/2000/svg" width="123" height="57" viewBox="0 0 123 57" fill="none">
                <Path d="M2.82931 0.467228C2.26051 1.03909 2.43115 2.15421 3.25591 3.24074C3.68252 3.8126 7.97698 9.38821 12.8118 15.6501C17.6466 21.9119 21.5145 27.173 21.4576 27.3731C21.3723 27.5733 16.8503 32.3483 11.4467 38.0097C6.01461 43.6711 1.23666 48.875 0.838502 49.5612C-1.12387 52.9352 0.781622 56.5951 4.50728 56.5379C7.18065 56.5093 7.60726 56.0518 16.9925 43.9284C21.7136 37.8381 25.7236 32.863 25.8943 32.863C26.0365 32.863 29.9612 37.7524 34.597 43.6997C39.2327 49.6756 43.4703 54.9367 44.0391 55.3942C46.2005 57.1098 48.817 56.9668 50.6372 55.0511C51.5757 54.0217 51.6895 53.7358 51.6895 52.4491C51.6895 50.3904 50.9216 49.0751 47.7363 45.7584C46.2005 44.1572 41.6217 39.3536 37.5263 35.0646L30.075 27.2588L30.6153 26.4868C30.9282 26.0579 35.1942 20.5108 40.1428 14.1346C45.0914 7.75842 49.2152 2.23999 49.3289 1.86828C49.5565 0.953308 49.1014 0.29567 48.1913 0.181301C47.651 0.124115 47.1675 0.410042 46.229 1.32502C44.6079 2.92622 28.141 20.2535 26.8897 21.6832L25.9227 22.7697L20.6897 17.2227C3.48343 -0.933823 3.85316 -0.562115 2.82931 0.467228Z" fill="black"/>
                <Path d="M73.0282 0.809685C72.7727 1.38208 72.8295 1.6969 73.3122 2.52689C73.6246 3.07066 77.9125 8.70881 82.7967 15.0624C87.7093 21.4161 91.8269 26.768 91.9404 26.9684C92.054 27.1687 88.3341 31.2614 81.9448 37.9871C71.438 49.0058 70.5293 50.1792 70.5293 52.3257C70.5293 54.7012 72.4319 56.5901 74.874 56.5901C76.5778 56.5901 77.3445 56.2466 78.7076 54.9587C79.2471 54.4722 83.393 49.2633 87.9081 43.3962C92.4516 37.5578 96.2567 32.7496 96.3703 32.7496C96.4555 32.7496 100.204 37.5005 104.662 43.2818C109.149 49.063 113.21 54.2432 113.749 54.7584C115.055 56.0749 116.134 56.5615 117.668 56.5901C120.025 56.6187 121.871 55.0446 122.126 52.7264C122.382 50.4081 121.643 49.4351 110.796 38.0443C105.287 32.2631 100.743 27.4263 100.687 27.3118C100.63 27.1973 104.776 21.7023 109.859 15.1197C114.942 8.50846 119.315 2.75584 119.57 2.29792C120.337 0.866924 119.372 -0.306496 117.867 0.294525C117.639 0.380383 112.698 5.44613 106.906 11.5708L96.3703 22.704L87.3402 13.2021C82.3991 7.96468 77.5717 2.89894 76.6346 1.89724C74.6752 -0.106155 73.5962 -0.449596 73.0282 0.809685Z" fill="black"/>
            </Svg>
            
            <View style={styles.textContainer}>
            <Text style={styles.header} >KAWS.</Text>
            <Text style={styles.subHeader} > Brian Donnelly</Text>
            </View>
            
        </View>
        
        <View style={styles.container2}>

        <TouchableOpacity style={styles.signInBtn} onPress = {() => change()} >
            <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
                <Path d="M 15.003906 3 C 8.3749062 3 3 8.373 3 15 C 3 21.627 8.3749062 27 15.003906 27 C 25.013906 27 27.269078 17.707 26.330078 13 L 25 13 L 22.732422 13 L 15 13 L 15 17 L 22.738281 17 C 21.848702 20.448251 18.725955 23 15 23 C 10.582 23 7 19.418 7 15 C 7 10.582 10.582 7 15 7 C 17.009 7 18.839141 7.74575 20.244141 8.96875 L 23.085938 6.1289062 C 20.951937 4.1849063 18.116906 3 15.003906 3 z"/>
            </Svg>
            <Text style={styles.textBlack}>SIGN IN WITH GOOGLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInBtn} onPress = {() => change()} >
        <Svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
            <Path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"/>
        </Svg>
            <Text style={styles.textBlack}>SIGN IN WITH APPLE</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInBtn2} onPress = {() => change()} >
            <Text style={styles.textWhite}>SIGN IN</Text>
        </TouchableOpacity>
            
        </View>
        </View>
        
        
    )
}

export default Landing