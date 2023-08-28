import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl, ActivityIndicator, LogBox} from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, HeaderImage, HeaderMenu, Landing } from '../components'

// LogBox.ignoreAllLogs();

const Home = () =>{

    const router = useRouter();

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
        setRefreshing(false);
        }, 2000);
    }, []);

    return(
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bgWhite }}>
            

            <ScrollView showsVerticalScrollIndicator={false} refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} /> }>
                <View 
                    style={{
                        flex:1,
                        padding: SIZES.medium
                    }}
                >

                <Landing />

                {/* <Welcome /> */}
                
                {/* <Popularjobs  /> */}

                
                {/* {refreshing ? (<ActivityIndicator size="large" colors={COLORS.primary} />) : ( <Nearbyjobs />) } */}


                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home