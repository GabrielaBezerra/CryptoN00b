const jwt = require('jsonwebtoken');
const secret_key = "secret"

const verifyToken = (req, res, next) => {
    const token = req.headers["authtoken"];
    if (token) {
        req.token = token;
        next();
    } else {
        res.sendStatus(403);
    }
}

const getTokenForUser = (user) => {
    return jwt.sign(user, secret_key, { expiresIn: "10s" })
}

const decodeAuthData = (token) => {
    return jwt.verify(token, secret_key).promise()
}