import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#27272a',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    burger: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#3f3f46',
        height: 40,
        width: 40,
        borderRadius: 100,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
    },
    linkList: {
        display: 'flex',
        flexDirection: 'row',
        columnGap: 10,
    }
})

export default styles