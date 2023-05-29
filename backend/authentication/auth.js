const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
    return jwt.sign({_id: user._id, displayName: user.displayName}, secretKey, {expiresIn: '1d'})
}

exports.verifyToken = (req, res, next) => {
    
    try {
        const token = req.headers.authorization.split(' ')[1];
        req.userId = jwt.verify(token, secretKey)._id
        next()
    } catch {
        return res.status(401).json({
            message: 'Admin access required'
        })
        
    }
}


// för att logga in som admin  email: mia@.com - password: mia
// const admin = ['6434120960bc68540d2d3187']
// test admin email: admin@mail.com pass: bytmig123
const admin = ['646627979885aef7baa7ea69']

exports.checkAdmin = (req, res, next) => {
    if(admin.includes(req.userId)){
        next()
    }
    else{
        res.status(401).json({
            message: 'you need to be admin to se the users orders'
        })
    }
    
}


