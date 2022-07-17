import CryptoJS from 'crypto-js'

const FUNC_DECRYPT = async (ciphertext, key) => {
    var bytes = CryptoJS.AES.decrypt(ciphertext, key)
    // console.log(bytes)
    var decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

    return decryptedData
}

export default FUNC_DECRYPT