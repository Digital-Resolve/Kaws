import React, { useState } from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { Stack, useRouter } from 'expo-router';

import { COLORS, icons, images, SIZES } from '../constants'
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome, HeaderImage, HeaderMenu } from '../components'

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
            <Stack.Screen
                options={{
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

                <Welcome />

                <Popularjobs onRefresh={onRefresh}  />

                <Nearbyjobs />

                </View>
            </ScrollView>

        </SafeAreaView>
    )
}

export default Home