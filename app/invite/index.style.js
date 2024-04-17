import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        rowGap: 20,
    },
    textHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    contentCenterGame: {
        height: 392,
    },
    contentCenterUser: {
        width: '100%',
        height: 162,
        gap: 10,
    },
    containerInner: {
        display: 'flex',
        flexDirection: 'row',
        gap: 15,
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    callBtn: {
        alignSelf: 'center',
        height: 65,
        width: 65,
        backgroundColor: '#ef4444',
        borderRadius: 100,
        transform: [{ translateY: -20 }],
        alignItems: 'center',
        justifyContent: 'center',
    },
    callBtnText: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default styles