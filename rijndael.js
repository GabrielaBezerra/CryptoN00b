const Rijndael = require('rijndael-js');

const iv = Buffer.from("392b99151341e54a806b40a51d2d44ad9ed28bec67249f03afe5b2bb77e7c67c", 'hex');
const key = Buffer.from("e396530d81291a2984a03fe8d8c661dd271132910b7baa8acc2d73f0dd6d886d", 'hex');

const rijndael = new Rijndael(key, 'cbc');



module.exports.encrypt = (text) => {

    console.log("\n\n----")
    console.log("Encrypt ->", text)

    return rijndael.encrypt(text, 256, iv).toString('hex')
}



module.exports.decrypt = (hex) => {

    console.log("\n\n----")
    console.log('Decrypt ->', hex)

    const bytes = Buffer.from(hex, 'hex')
    console.log("ciphered", bytes)

    const clearText = rijndael.decrypt(bytes, 256, iv).toString().replace(/\0/g, '');

    return clearText
}