const express = require('express');
const rijndael = require('./rijndael.js');
const blowfish = require('./blowfish.js');
const jwt = require('jsonwebtoken');

const secret_key = "secret"

const app = express()
app.use(express.json()) 
app.use (express.urlencoded({extended: false}))

const verifyToken = (req, res, next) => {
    const token = req.headers["authtoken"];
    if (token) {
        req.token = token;
        next();
    } else {
        res.sendStatus(403);
    }
}

app.post('/login', (req,res) => {
    //query user by req.body.attributes
    const user = { id: 1, username: "gabi", email: "gabrieladecarvalhobezerra@gmail.com" }
    jwt.sign(user, secret_key, { expiresIn: "30s" }, (err, token) => {
        if (err) res.json({ err })
        else res.json({ token })
    })
})

app.post('/echo', verifyToken, (req, res) => {
    jwt.verify(req.token, secret_key, (err, authData) => {
        if (err) res.sendStatus(403);
        else res.json({ echo: req.body, auth: authData });
    })
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