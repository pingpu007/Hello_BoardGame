import React from 'react'
import { View } from 'react-native'

import styles from './contextwrapper.style'

const ContentWrapper = ({ children }) => {
    return (
        <View style={styles.container}>
            {children}
        </View>
    )
}

export default ContentWrapper