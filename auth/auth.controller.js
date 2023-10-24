const authService = require('./auth.service')
const asyncHandler = require('express-async-handler');

exports.register = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;
    console.log({name, email, password})
    const user = await authService.register({name, email, password});
    res.status(201).json(user);
});

exports.login = asyncHandler(async (req, res)=>{
    const {email, password} = req.body;
    const user = await authService.login({email, password});
    res.status(200).json(user);
})