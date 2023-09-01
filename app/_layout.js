import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen'
import HeaderImage from '../components/common/header/HeaderImage'
import HeaderMenu from "../components/common/header/HeaderMenu";
import { COLORS, icons, images, SIZES } from '../constants'


// While app is loading the splash screen will be displayed until 'hideAsync' is called
SplashScreen.preventAutoHideAsync

const Layout = () => {
    // Loading of custom fonts into the application
    const [fontsLoaded] = useFonts({
        PoppinsLight: require("../assets/fonts/Poppins-Light.ttf"),
        PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        PoppinsMedium: require("../assets/fonts/Poppins-Medium.ttf"),
        PoppinsBold: require("../assets/fonts/Poppins-Bold.ttf"),
    })

    const onLayoutRootView = useCallback(async () =>{
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded])

    if (!fontsLoaded) {
        return null;
    }

    return <Stack onLayout={onLayoutRootView} />
}

export default Layout;