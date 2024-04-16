import React from "react"
import { Stack } from "expo-router"
import { useFonts } from "expo-font"

const Layout = () => {
    const [fontLoaded] = useFonts({
        KanitRegular: require('../assets/fonts/Kanit-Regular.tff'),
        KanitMedium: require('../assets/fonts/Kanit-Medium.tff'),
        KanitBold: require('../assets/fonts/Kanit-Bold.tff'),
    })

    if (!fontLoaded) {
        return null
    }

    return (
        <Stack>
            <Stack.Screen
                name="index"
            />
        </Stack>
    )
}

export default Layout