const jwt = require('jsonwebtoken');
const User = require('../models/User');

module.exports= (role = null)=>{
    return async(req, res,next) =>{
        const token = req.headers['authorization'];
        if(!token){
            return res.status(401).send('Unauthorized');
        }
        try{
            console.log(token);
            const verify = jwt.verify(token, process.env.SECRET_KEY);
            const user = await User.findByPk(verify.id);
            req.user = user;
            if(role && user.role !== role){
                return res.status(401).send('Unauthorized');
            }
            next();
        }
        catch{
            res.status(401).send('Invalid');
        }
    }
}