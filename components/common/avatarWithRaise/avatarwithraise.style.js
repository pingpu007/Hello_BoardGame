import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatarBox: {
        backgroundColor: 'black',
        borderRadius: 100,
        width: 50,
        height: 50,
        overflow: 'hidden',
        position: 'relative',
    },
    avatar: {
        width: '100%',
        height: '100%',
    },
    handRaise: {
        position: 'absolute',
        right: -5,
        top: 0,
        fontSize: 24,
    },
    name: {
        textAlign: 'center'
    }
})

export default styles