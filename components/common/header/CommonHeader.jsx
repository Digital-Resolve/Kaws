import React from "react";
import { View } from "react-native";
import { Stack } from 'expo-router';
import { COLORS, SIZES } from "../../../constants";

import HeaderImage from "./HeaderImage";
import HeaderMenu from "./HeaderMenu";

const CommonHeader = () => {
    return(
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
    )
}

export default CommonHeader