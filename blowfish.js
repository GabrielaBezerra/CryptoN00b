const Blowfish = require('egoroof-blowfish');

const key = 'super key'
const bf = new Blowfish(key, Blowfish.MODE.CBC, Blowfish.PADDING.NULL);
bf.setIv('abcdefgh'); 

module.exports.encrypt = (text) => {

    console.log("\n\n----")
    console.log("Encrypt ->", text)

    const encoded = bf.encode(text);
    const hex = toHexString(encoded)
    
    console.log(hex)

    return hex
}



module.exports.decrypt = (body) => {

    console.log("\n\n----")
    console.log('Decrypt ->', body.hash)

    const intBuffer = toIntBuffer(body.hash)
    const decoded = bf.decode(intBuffer, Blowfish.TYPE.STRING);

    console.log(decoded)

    return decoded
}





const toHexString = (intBuffer) => {
    let hexString = ""
    intBuffer.forEach(n => {
        const h = n.toString(16)
        hexString += ((h.length === 1) ? ("0"+h) : h)
    })
    return hexString
}

const toIntBuffer = (hex) => {
    const hexArray = hex.match(/.{1,2}/g)
    const intArray = hexArray.map(h => parseInt(h, 16))
    return (new Uint8Array(intArray))
}