import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import styles from './cardGameBanner.style'

const CardGameBanner = ({ title, bannerUrl }) => {
    const [countVote, setCountVote] = useState(0)

    const handleCount = () => {
        setCountVote(countVote + 1)
    }

    return (
        <View style={styles.container}>
            <Text style={{ textAlign: 'center' }}>{title}</Text>
            <TouchableOpacity
                style={styles.bannerBox}
                onPress={() => handleCount()}
            >
                <Image src={bannerUrl} style={styles.banner} />
            </TouchableOpacity>
            <View style={[styles.countBase, countVote > 0 ? { backgroundColor: '#22c55e' } : { backgroundColor: '#fff' }]}>
                <Text style={countVote > 0 ? { color: '#fff' } : {}}>{countVote}</Text>
            </View>
        </View>
    )
}

export default CardGameBanner