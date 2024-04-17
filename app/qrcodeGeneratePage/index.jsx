import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { View, TextInput, Button, Image, StyleSheet } from 'react-native'
import * as ImagePicker from 'expo-image-picker';
import QRCode from 'react-native-qrcode-svg';

const QrcodePage = () => {
    const [text, setText] = useState("")
    const [image, setImage] = useState(null)
    const [isShowQRCode, setIsShowQRCode] = useState(false)

    const handleTextChange = (value) => {
        setIsShowQRCode(false)
        setText(value)
    }

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        if (!result.canceled) {
          setIsShowQRCode(false)
          setImage(result.assets[0].uri);
        }
      };

      const handleClearData = () => {
        setIsShowQRCode(false)
        setText("")
        setImage(null)
      }

      const handleGenerateQrCode = async () => {
        if(!image || !text) return
        setIsShowQRCode(true)
      }


    return (
        <SafeAreaView>
            <View style={styles.container}>
                <View style={styles.inputContainer}>
                    <TextInput
                        keyboardType="default"
                        placeholder="text"
                        value={text}
                        onChangeText={handleTextChange}
                        style={styles.inputText}
                    />
                    <Button title="Clear Data" onPress={handleClearData} />
                </View>
                <Button title="Upload Image" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={styles.image} />}
                <Button title="Generate QRCode" onPress={handleGenerateQrCode} />
                {isShowQRCode && <QRCode
                    value={text}
                    logo={{uri: image}}
                    logoSize={50}
                    size={200}
                    logoBackgroundColor='transparent'
                />}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: { 
        gap: 10,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    inputContainer: {
        flexDirection: "row",
    },
    inputText: {
        borderWidth: 1,
        padding: 10,
        borderColor:'#000000',
        backgroundColor: "#FFFFFF",
        width: 100,
    },
    image: {
        width: 100,
        height: 100,
    },
  });

export default QrcodePage