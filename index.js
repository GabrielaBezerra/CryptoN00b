const express = require('express');
const rijndael = require('./rijndael.js')
const blowfish = require('./blowfish.js')

const app = express()

app.use('/rijndael/encrypt', (req, res) => {
    const encrypted = rijndael.encrypt(req.query.text)
    const payload = JSON.stringify({ secret: encrypted })
    res.send(payload)
})

app.use('/rijndael/decrypt', (req, res) => {
    const decrypted = rijndael.decrypt(req.query.text)
    const payload = JSON.stringify({ text: decrypted })
    res.send(payload)
})

app.use('/blowfish/encrypt', (req, res) => {
    const encrypted = blowfish.encrypt(req.query.text)
    const payload = JSON.stringify({ secret: encrypted.toString('hex') })
    res.send(payload)
})

app.use('/blowfish/decrypt', (req, res) => {
    const decrypted = blowfish.decrypt(req.query.text)
    const payload = JSON.stringify({ text: decrypted })
    res.send(payload)
})

app.listen(8900, () => console.log('Listening...'))