module.exports = {
    profile: (req, res, next)=>{
        res.status(200).json({message: 'success', data: req.user})
    },

    cart: (req, res, next)=>{
        res.status(200)
    },

    myCourses: (req, res, next)=> {
        res.status(200)
    }
}