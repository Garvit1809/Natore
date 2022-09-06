const User = require('../Models/userModel');
const catchAsync = require('./../Utils/catchAsync')

// exports.signup = async (req,res,next) => {
//     try {
//         const newUser = await User.create(req.body);

//     res.status(201).json({
//         status: 'success',
//         data: {
//             user: newUser
//         }
//     })
//     } catch (error) {
//         res.status(400).json({
//             status: 'fail',
//             error
//         })
//     }
// }
exports.signup = catchAsync(async (req,res,next) => {
    const newUser = await User.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            user: newUser
        }
    })
})