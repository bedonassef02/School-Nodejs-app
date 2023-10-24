const authService = require('./auth.service')
const asyncHandler = require('express-async-handler');

exports.register = asyncHandler(async (req, res)=>{
    const {name, email, password} = req.body;
    console.log({name, email, password})
    const user = await authService.register({name, email, password});
    res.status(201).json(user);
});