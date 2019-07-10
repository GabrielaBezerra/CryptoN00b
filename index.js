const express = require('express');
const rijndael = require('./rijndael.js')
const blowfish = require('./blowfish.js')

const app = express()

app.use(express.json()) 
app.use (express.urlencoded({extended: false}))


app.post('/echo', (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.post('/rijndael/encrypt', (req, res) => {
    const encrypted = rijndael.encrypt(JSON.stringify(req.body))
    res.send(encrypted)
})

app.post('/rijndael/decrypt', (req, res) => {
    const decrypted = rijndael.decrypt(req.body)
    res.send(decrypted)
})

app.post('/blowfish/encrypt', (req, res) => {
    const encrypted = blowfish.encrypt(JSON.stringify(req.body))
    res.send(encrypted)
})

app.post('/blowfish/decrypt', (req, res) => {
    const decrypted = blowfish.decrypt(req.body)
    res.send(decrypted)
})

app.listen(8900, () => console.log('Listening...'))