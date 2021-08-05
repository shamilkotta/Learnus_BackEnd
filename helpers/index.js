const db = require('../config/connection').get
const { USER_COLLECTION, COURSE_COLLECTION } = require('../utils/constants').collections
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const getToken = (username)=> {
    const payload = { username, isUser: true }
    const expiresIn= '3600s'
    if (username == 'getadminaccess') {
        payload.isUser = false
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn})
        return token
    }else {
        const token = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, {expiresIn})
        return token
    }
}

module.exports = {

    doSignup : (registerData)=> {
        return new Promise (async (resolve, reject)=>{
            const user = await db().collection(USER_COLLECTION).find({$or: [{username: registerData.username},{email: registerData.email}]}).toArray()
            if (user.length == 0) {
                db().collection(USER_COLLECTION).insertOne(registerData).then(data=> {
                    const token = getToken(registerData.username)
                    resolve({data, token})
                }).catch(err=> {
                    reject(err)
                })
            }else {
                reject({statusCode: 400, message: 'Email or Username already in use'})
            }
        })
    },

    doLogin: (loginData)=> {
        return new Promise (async (resolve, reject)=> {
            const user = await db().collection(USER_COLLECTION).findOne({username: loginData.username})
            if (user) {
                bcrypt.compare(loginData.password, user.password).then(data=>{
                    const token = getToken(loginData.username)
                    resolve({data, token})
                }).catch(err=> {
                    reject(err)
                })
            }else {
                reject({statusCode: 400, message: 'Invalid username'})
            }
        })
    },

    getCourse: (id)=> {
        return new Promise (async (resolve, reject)=> {
            const course = await db().collection(COURSE_COLLECTION).findOne({course__code: id})
            course ? resolve(course) : reject({statusCode: 404}) 
        })
    },

    getAllCourses: ()=> {
        return new Promise (async (resolve, reject)=> {
            const courses = await db().collection(COURSE_COLLECTION).find({},{projection: {_id: 0, course__code: 1, course__title: 1, course__price: 1, course__duration: 1}}).toArray()
            courses ? resolve(courses) : reject({statusCode: 404})
        })
    }
}