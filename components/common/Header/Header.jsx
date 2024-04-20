import { Text, View, TouchableOpacity } from "react-native"
import { useState } from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { Link } from "expo-router"

import styles from './header.style'

const Header = () => {
    return (
        <SafeAreaView>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.burger}>
                    <Text style={styles.text}>📃</Text>
                </TouchableOpacity>
                <View style={styles.linkList}>
                    <Link href={'/'}>
                        <Text style={styles.text}>Home</Text>
                    </Link>
                    <Link href={'/invite'}>
                        <Text style={styles.text}>Invite</Text>
                    </Link>
                    <Link href={'/addgame'}>
                        <Text style={styles.text}>AddGame</Text>
                    </Link>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Header