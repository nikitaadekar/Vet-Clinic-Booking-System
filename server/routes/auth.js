import Express from "express";
import Bcrypt from "bcrypt";
import User from '../models/User.js';
import {registerValidation, loginValidation} from "./validation.js"
import JsonWebToken from "jsonwebtoken";






const router = Express.Router();

router.post('/register', async (req, res) => {

    // Validating the data 
    const {error} = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);

    }
    //Check if the user already in database
    const existEmail = await User.findOne({email: req.body.email});
    if (existEmail){
        return res.status(400).send('This email is already exists.');
    }

    //Hashing the passwords
    const salt = await Bcrypt.genSalt(10);
    const hashedPassword = await Bcrypt.hash(req.body.password, salt);


    // Create a new user
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.json({user: user._id});

    } catch (err) {
        res.status(400).send(err);
    }
});


// login
router.post('/login', async (req, res) => {

    // Validating the data 
    const {error} = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);

    }
    //Check if the email exists
    const loginUser = await User.findOne({email: req.body.email});
    if (!loginUser){
        return res.status(400).send('Email incorrect');
    }

    //If password is correct
    const validPassword = await Bcrypt.compare(req.body.password, loginUser.password);
    if (!validPassword){
        return res.status(400).send('password incorrect');
    }

    //Create and assign a  Token 

    const token = JsonWebToken.sign({_id: loginUser},process.env.TOKEN_SECRET);
    res.header('auth-token',token ).send(token);
    
    

    
});


// exporting router
//module.exports = router;

export default router;
