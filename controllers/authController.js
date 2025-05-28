const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User');

async function register(req, res){
    const {email, password, role} = req.body;
    try{
        const hashed = await bcrypt.hash(password, 15);
        const user = await User.create({email, password:hashed, role})
        res.status(201).send('User Registered');
    }
    catch(error){
        res.status(400).send('Registration failed')
    }
}
async function login(req, res) {
    const {email, password} = req.body;
    try{
        const user = await User.findOne({where:{email}});
        const pass = await bcrypt.compare(password, user.password)
        if(!user || !pass){
            return res.status(401).send('Invalid')
        }
        const token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {expiresIn:'10h'})
        res.json({message:'Login Successful', token})
    }
    catch(err){
        res.status(500).send('Login failed');
    }
}

module.exports={register, login};