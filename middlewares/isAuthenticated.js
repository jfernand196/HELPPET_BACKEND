const { sign, verify } = require('jsonwebtoken');
const { Model } = require('../api/users/model');


const isAuthenticated = async (req, res, next) => {
    const authHeader = req.headers.authorization;
   
    if (!authHeader) {
        return res.status(401).json({ message: 'No token provided' });
    }
    const token = JSON.parse(authHeader.split(' ')[1]);
    console.log("token",token);
    
    const payload = verify(token, "user");
    if (!payload) {
        return res.status(401).json({ message: 'Invalid token' });
    }  
    
    const user = await Model.findOne({ email: payload.email, id: payload.id });
    if (!user) {
        return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = user;
    req.body.idFoundation = user.foundation[0];
    console.log("user", user);
    next();
}


module.exports = {isAuthenticated};

