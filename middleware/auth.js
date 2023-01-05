const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    try{
        const token = req.cookies.token;
        const verified = jwt.verify(token, process.env.SECRET_KEY);      
        next();
    }
    catch(err){
        res.status(401).send(err);
    }
}

module.exports = auth;