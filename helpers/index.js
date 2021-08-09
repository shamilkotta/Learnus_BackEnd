const db = require('../config/connection').get
const { USER_COLLECTION, COURSE_COLLECTION } = require('../utils/constants').collections
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


const getToken = (username)=> {
    const payload = { username, isAdmin: false }
    const expiresIn= '3600s'
    if (username == process.env.ADMIN_NAME) {
        payload.isAdmin = true
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
            try {
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
            } catch (err) {
                reject(err)
            }
        })
    },

    doLogin: (loginData)=> {
        return new Promise (async (resolve, reject)=> {
            try {
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
            } catch (err) {
                reject(err)
            }
        })
    },

    getCourse: (match)=> {
        return new Promise (async (resolve, reject)=> {
            try {  
                const course = await db().collection(COURSE_COLLECTION).findOne(match, {projection: {_id: 0, status: 0}})
                course ? resolve(course) : reject({statusCode: 404}) 
            } catch (err) {
                reject(err)
            }
        })
    },

    getAllCourses: ()=> {
        return new Promise (async (resolve, reject)=> {
            try {
                const courses = await db().collection(COURSE_COLLECTION).find({status: 'Active'},{projection: {_id: 0, course__code: 1, course__title: 1, course__price: 1, course__duration: 1, status: 0}}).toArray()
                courses ? resolve(courses) : reject({statusCode: 404})
            } catch (err) {
                reject(err)
            }
        })
    }
}