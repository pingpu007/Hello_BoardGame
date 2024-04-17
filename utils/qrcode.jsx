import Qrcode from "qrcode";

export const getQrCodeWithLogo = async (content,image,width) => {
    const qrCode = await Qrcode.toBuffer(content)
    console.log(qrCode,"qrCodeqrCodeqrCodeqrCode")

    return qrCode
}