
export const postSignup = (req, res, next) => {
    console.log(req.body)
    res.status(200).json({
        message: 'User created successfully',
        user: req.body
    })
}

export const postLogin = (req, res, next) => {
    console.log(req.body)
    res.status(200).json({
        message: 'User created Login',
        user: req.body
    })
}




