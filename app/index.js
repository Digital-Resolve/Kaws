import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator, LogBox} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Drawer } from 'expo-router/drawer';
import { Stack, useRouter } from 'expo-router';
// import HeaderImage from '../components/common/header/HeaderImage'
// import HeaderMenu from "../components/common/header/HeaderMenu";

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, HeaderImage, HeaderMenu, Landing } from '../components'

LogBox.ignoreAllLogs();

const Home = () =>{

    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const [refreshing, setRefreshing] = React.useState(false);
    const [logIn, setIsLogin] = React.useState(true);
    function handleState() {
        setLoading(true);
        setTimeout(() => {
        setLoading(false);
        setIsLogin(false);
        }, 1500);
        
     }

     function LogOut() {
        setIsLogin(true);
      }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);

    
    const Drawer = createDrawerNavigator();

    return(
        
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: COLORS.bgWhite },
                    headerShadowVisible: false,
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <HeaderMenu />
                    ),
                    // headerRight: () => (
                    //     <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
                    // ),
                    headerTitle: () => (
                        <HeaderImage />
                    )
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>
                <View 
                    style={{
                        flex:1,
                        padding: SIZES.medium
                    }}
                >
                {loading ? (<ActivityIndicator size="large" colors={COLORS.primary} style={{ position: "relative", alignSelf: "center", justifyContent: "center", height: 600,}} />) : (<>{logIn ? (<Landing change={handleState} />) : (<><Welcome /><Popularjobs />{refreshing?(<ActivityIndicator size="large" colors={COLORS.primary} style={{marginTop: 30, }}/>) : ( <Nearbyjobs/>) }</>)}</>)}
                
                
                </View>
                
            </ScrollView>

        </SafeAreaView>
        
    )
}

export default Home