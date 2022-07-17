import CryptoJS from 'crypto-js'

const FUNC_ENCRYPT = (val, key) => {
    let ciphertext = CryptoJS.AES.encrypt(JSON.stringify(val), key).toString()

    return ciphertext
}

export default FUNC_ENCRYPT