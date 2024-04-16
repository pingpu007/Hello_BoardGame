import React from "react"
import { Stack } from "expo-router"
import { useFonts } from "expo-font"

import { Header } from "../components/common"

const Layout = () => {
    const [fontLoaded] = useFonts({
        KanitRegular: require('../assets/fonts/Kanit-Regular.ttf'),
        KanitMedium: require('../assets/fonts/Kanit-Medium.ttf'),
        KanitBold: require('../assets/fonts/Kanit-Bold.ttf'),
    })

    if (!fontLoaded) {
        return null
    }

    return (
        <>
            <Header />
            <Stack>
                <Stack.Screen
                    name="index"
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen
                    name="invite/index"
                    options={{
                        headerShown: false
                    }}
                />
            </Stack>
        </>
    )
}

export default Layout