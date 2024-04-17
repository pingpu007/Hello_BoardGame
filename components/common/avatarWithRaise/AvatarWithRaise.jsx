import React from 'react'
import { View, Text, Image } from 'react-native'

import styles from './avatarwithraise.style'

const AvatarWithRaise = ({ imageUrl = 'https://static.tutordirect.com/prod/media/images/user-avatar-placeholder.max-320x320.png', name, active }) => {
    return (
        <View
            width={60}
            style={styles.container}
        >
            <View style={styles.avatarBox}>
                <Image src={imageUrl} style={styles.avatar} />
            </View>
            {active && <Text style={styles.handRaise}>🤚</Text>}
            <Text style={styles.name}>{name}</Text>
        </View>
    )
}

export default AvatarWithRaise