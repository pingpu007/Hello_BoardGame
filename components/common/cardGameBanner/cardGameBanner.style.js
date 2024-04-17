import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 5,
    },
    bannerBox: {
        height: 80,
        width: 100,
        borderRadius: 10,
        overflow: 'hidden',
        position: 'relative',
    },
    banner: {
        width: '100%',
        height: '100%',
    },
    countBase: {
        height: 25,
        width: 25,
        borderRadius: 100,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        bottom: -10,
        right: -5,
    },
    countEqualZero: {
        backgroundColor: 'white'
    },
    countMoreThanZero: {
        backgroundColor: '#22c55e',
        color: 'white',
    }
})

export default styles