import { StyleSheet } from "react-native";


const DncryptionStyle = StyleSheet.create ({
    boxDecrypt:{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
    },

    boxInput:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        width:'100%',
    },


    Input:{
        borderWidth:1,
        width:'95%',
        height:'45px',
        margin:5,
        padding:10
    },

    boxResule:{
        width:'80%',
        borderWidth:1,
        minHeight:'200px',
        borderRadius:15,
        margin:5,
        padding:10
    }
})


export default DncryptionStyle